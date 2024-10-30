<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
class Tools
{
    public static function getValue($key, $default_value = false)
    {
        if (empty($key) || !is_string($key)) {
            return false;
        }
       
        $value = (isset($_POST[$key]) ? $_POST[$key] : (isset($_GET[$key]) ? $_GET[$key] : $default_value));    
        $value = wp_kses_post($value);
    
        if (is_string($value)) {
            return urldecode(preg_replace('/((\%5C0+)|(\%00+))/i', '', urlencode($value)));
        }

        return $value;
    }

    public static function getRemoteAddr()
    {
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        return $ip;
    }
    public static function substr($str, $start, $length = false, $encoding = 'utf-8')
    {
        if (is_array($str)) {
            return false;
        }
        if (function_exists('mb_substr')) {
            return mb_substr($str, (int) $start, ($length === false ? Tools::strlen($str) : (int) $length), $encoding);
        }

        return substr($str, $start, ($length === false ? Tools::strlen($str) : (int) $length));
    }
    public static function strtolower($str)
    {
        if (is_array($str)) {
            return false;
        }
        if (function_exists('mb_strtolower')) {
            return mb_strtolower($str, 'utf-8');
        }

        return strtolower($str);
    }

    public static function strlen($str, $encoding = 'UTF-8')
    {
        if (is_array($str)) {
            return false;
        }
        $str = html_entity_decode($str, ENT_COMPAT, 'UTF-8');
        if (function_exists('mb_strlen')) {
            return mb_strlen($str, $encoding);
        }

        return strlen($str);
    }
    public static function refreshCACertFile()
    {
        if ((time() - @filemtime(_PS_CACHE_CA_CERT_FILE_) > 1296000)) {
            $stream_context = @stream_context_create(
                array(
                    'http' => array('timeout' => 3),
                    'ssl' => array(
                        'cafile' => CaBundle::getBundledCaBundlePath(),
                    ),
                )
            );

            $ca_cert_content = @file_get_contents(Tools::CACERT_LOCATION, false, $stream_context);
            if (empty($ca_cert_content)) {
                $ca_cert_content = @file_get_contents(CaBundle::getBundledCaBundlePath());
            }

            if (
                preg_match('/(.*-----BEGIN CERTIFICATE-----.*-----END CERTIFICATE-----){50}$/Uims', $ca_cert_content) &&
                substr(rtrim($ca_cert_content), -1) == '-'
            ) {
                file_put_contents(_PS_CACHE_CA_CERT_FILE_, $ca_cert_content);
            }
        }
    }
    private static function file_get_contents_curl(
        $url,
        $curl_timeout,
        $opts
    ) {
        $content = false;

        if (function_exists('curl_init')) {
            Tools::refreshCACertFile();
            $curl = curl_init();

            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 5);
            curl_setopt($curl, CURLOPT_TIMEOUT, $curl_timeout);
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
            curl_setopt($curl, CURLOPT_CAINFO, _PS_CACHE_CA_CERT_FILE_);
            curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($curl, CURLOPT_MAXREDIRS, 5);

            if ($opts != null) {
                if (isset($opts['http']['method']) && Tools::strtolower($opts['http']['method']) == 'post') {
                    curl_setopt($curl, CURLOPT_POST, true);
                    if (isset($opts['http']['content'])) {
                        parse_str($opts['http']['content'], $post_data);
                        curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
                    }
                }
            }

            $content = curl_exec($curl);

            if (false === $content && _PS_MODE_DEV_) {
                $errorMessage = sprintf('file_get_contents_curl failed to download %s : (error code %d) %s',
                    $url,
                    curl_errno($curl),
                    curl_error($curl)
                );

                throw new \Exception($errorMessage);
            }

            curl_close($curl);
        }

        return $content;
    }
    private static function file_get_contents_fopen(
        $url,
        $use_include_path,
        $stream_context
    ) {
        $content = false;

        if (in_array(ini_get('allow_url_fopen'), array('On', 'on', '1'))) {
            $content = @file_get_contents($url, $use_include_path, $stream_context);
        }

        return $content;
    }
    public static function file_get_contents(
        $url,
        $use_include_path = false,
        $stream_context = null,
        $curl_timeout = 5,
        $fallback = false
    ) {
        $is_local_file = !preg_match('/^https?:\/\//', $url);
        $require_fopen = false;
        $opts = null;

        if ($stream_context) {
            $opts = stream_context_get_options($stream_context);
            if (isset($opts['http'])) {
                $require_fopen = true;
                $opts_layer = array_diff_key($opts, array('http' => null));
                $http_layer = array_diff_key($opts['http'], array('method' => null, 'content' => null));
                if (empty($opts_layer) && empty($http_layer)) {
                    $require_fopen = false;
                }
            }
        } elseif (!$is_local_file) {
            $stream_context = @stream_context_create(
                array(
                    'http' => array('timeout' => $curl_timeout),
                    'ssl' => array(
                        'verify_peer' => true,
                        'cafile' => CaBundle::getBundledCaBundlePath(),
                    ),
                )
            );
        }

        if ($is_local_file) {
            $content = @file_get_contents($url, $use_include_path, $stream_context);
        } else {
            if ($require_fopen) {
                $content = Tools::file_get_contents_fopen($url, $use_include_path, $stream_context);
            } else {
                $content = Tools::file_get_contents_curl($url, $curl_timeout, $opts);
                if (empty($content) && $fallback) {
                    $content = Tools::file_get_contents_fopen($url, $use_include_path, $stream_context);
                }
            }
        }

        return $content;
    }

    public static function isRealImage($filename, $fileMimeType = null, $mimeTypeList = null)
    {
        // Detect mime content type
        $mimeType = false;
        if (!$mimeTypeList) {
            $mimeTypeList = array('image/gif', 'image/jpg', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/x-png');
        }

        // Try 4 different methods to determine the mime type
        if (function_exists('getimagesize')) {
            $imageInfo = @getimagesize($filename);

            if ($imageInfo) {
                $mimeType = $imageInfo['mime'];
            } else {
                $fileMimeType = false;
            }
        } elseif (function_exists('finfo_open')) {
            $const = defined('FILEINFO_MIME_TYPE') ? FILEINFO_MIME_TYPE : FILEINFO_MIME;
            $finfo = finfo_open($const);
            $mimeType = finfo_file($finfo, $filename);
            finfo_close($finfo);
        } elseif (function_exists('mime_content_type')) {
            $mimeType = mime_content_type($filename);
        } elseif (function_exists('exec')) {
            $mimeType = trim(exec('file -b --mime-type ' . escapeshellarg($filename)));
            if (!$mimeType) {
                $mimeType = trim(exec('file --mime ' . escapeshellarg($filename)));
            }
            if (!$mimeType) {
                $mimeType = trim(exec('file -bi ' . escapeshellarg($filename)));
            }
        }

        if ($fileMimeType && (empty($mimeType) || $mimeType == 'regular file' || $mimeType == 'text/plain')) {
            $mimeType = $fileMimeType;
        }

        // For each allowed MIME type, we are looking for it inside the current MIME type
        foreach ($mimeTypeList as $type) {
            if (strstr($mimeType, $type)) {
                return true;
            }
        }

        return false;
    }
    public static function isCorrectImageFileExt($filename, $authorizedExtensions = null)
    {
        // Filter on file extension
        if ($authorizedExtensions === null) {
            $authorizedExtensions = array('gif', 'jpg', 'jpeg', 'jpe', 'png');
        }
        $nameExplode = explode('.', $filename);
        if (count($nameExplode) >= 2) {
            $currentExtension = strtolower($nameExplode[count($nameExplode) - 1]);
            if (!in_array($currentExtension, $authorizedExtensions)) {
                return false;
            }
        } else {
            return false;
        }

        return true;
    }


}
