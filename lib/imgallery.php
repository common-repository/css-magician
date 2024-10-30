<?php
/**
 *  CSS MAGICIAN
 * @category front office features
 * @authors presta-magician.com <contact@presta-magician.com>
 * @copyright Vinum Master 2015-2020
 * @version 1.0.0
 * @website <https://www.presta-magician.com> 
 * @file imgallery.php
 * @license: GPLv2
 * International Registered Trademark & Property of Presta Magician
 * Css Magician for Wordpress basic version
 * 
 **/
if (!defined('CSSM_VERSION')) {
    die('-1');
}
class ImgGallery
{
    private $thumbsize; //Size of the image thumbnail
    private $elements;
    public function __construct(
        $thumbsize = 100, //Change this to match your thumbnail size
        $elements = array()
    ) {
        $this->thumbsize = $thumbsize;
        $this->elements = $elements;
    }
    //========================================//
    //=====> List the images to include <=====//
    //========================================//
    public function getImageArray($url)
    {
        //Tell the class to look for images inside this folder
        $path = $url . '/{*.jpg,*.gif,*.png}';
        $imgarray = glob($path, GLOB_BRACE) ? glob($path, GLOB_BRACE) : array();
        return $imgarray; //Return the found images
    }
    //=========================================//
    //=====> Add an image to the gallery <=====//
    //=========================================//
    public function addImage($src)
    {
        $elements = $this->elements;
        $elements[] = $src;
        $this->elements = $elements;
    }
    //==========================================//
    //===> Add all the images from a folder <===//
    //==========================================//
    public function loadImages($url)
    {
        $imgarray = $this->getImageArray($url);
        if (!empty($imgarray)) {foreach ($imgarray as $img) {$this->addImage($img);}}
    }
    //=========================================//
    //==> Write the markup for the gallery <===//
    //=========================================//
    public function display($url, $where, $position,$what,$swipersliderindex)
    {
        $markup = '
    <div id="easyimgallery" style="top:' . $position . 'px;">
    <input id="easyimgallerywhat" type="hidden" value="'.$what.'"/>
    <input id="easyimgalleryswiper" type="hidden" value="'.$swipersliderindex.'"/>
      <ul>';
            $markup .= '<li>
            <img src="'.CSSM_PLUGIN_URL.'assets/img/gallery/cache/noitem.png" alt="noitem" data-rel="noitem" />
        </li>';      
      
        if (!empty($this->elements)) {foreach ($this->elements as $img) {
            $imgname = explode("/", $img);
            $imgname = end($imgname);
            $thumb = $this->getImageThumbnail($img, $url, $imgname);
            $markup .= '<li>
          <img src="' . $thumb . '" alt="' . $imgname . '"/>
          <span class="vmutc_galleryImageRemove" data-name="' . $imgname . '">Remove</span>
        </li>';
        }}
        $markup .= '
      </ul>
    </div>';
        echo $markup;
        return $markup;
    }
    //=========================================//
    //====> Easy call to set everything up <===//
    //=========================================//
    public static function getPublicSide($url, $position,$what,$swipersliderindex)
    {
        $where = explode("/", $url);
        $where = end($where);
        $gallery = new ImgGallery();
        $gallery->loadImages($url);
        $gallery->display($url, $where, $position,$what,$swipersliderindex);
    }
    //=========================================//
    //=====> Create the image thumbnail <======//
    //=========================================//
    public function getImageThumbnail($src, $url, $imgname)
    {
        $size = $this->thumbsize;
        $imgSrc = $src;
        //cached img
     
            $cachepath = CSSM_PLUGIN_URL.'assets/img/gallery/cache/' . $imgname;
   
        $thumbSize = $size;
        $urlreal = $url . '/cache/' . $imgname;

        if (file_exists($urlreal)) {return $cachepath;} //If cached, return right away
        else { //Create the thumbnail
            //getting the image dimensions
            list($width, $height, $type) = getimagesize($imgSrc);
            switch ($type) { //saving the image into memory (for manipulation with GD Library)
                case 1:
                    {
                        $myImage = imagecreatefromgif($imgSrc);
                        $background = imagecolorallocate($myImage, 0, 0, 0);
                        imagecolortransparent($myImage, $background);
                        $thumb = imagecreatetruecolor($thumbSize, $thumbSize);
                        break;
                    }
                case 2:
                    {
                        $myImage = imagecreatefromjpeg($imgSrc);
                        $thumb = imagecreatetruecolor($thumbSize, $thumbSize);
                        break;
                    }
                case 3:
                    {
                        $myImage = imagecreatefrompng($imgSrc);
                        $thumb = imagecreatetruecolor($thumbSize, $thumbSize);
                        imageAlphaBlending($thumb, false);
                        imageSaveAlpha($thumb, true);
                        break;
                    }
            }
            if ($width > $size || $height > $size) {
                //setting the crop size
                if ($width > $height) {
                    $biggestSide = $width;
                } else {
                    $biggestSide = $height;
                }
                //The crop size will be half that of the largest side
                $cropPercent = .5;
                $cropWidth = $biggestSide * $cropPercent;
                $cropHeight = $biggestSide * $cropPercent;
            } else { $cropWidth = $width;
                $cropHeight = $height;}
            //getting the top left coordinate
            $c1 = array("x" => ($width - $cropWidth) / 2, "y" => ($height - $cropHeight) / 2);
            // Creating the thumbnail
            imagecopyresampled($thumb, $myImage, 0, 0, $c1['x'], $c1['y'], $thumbSize, $thumbSize, $cropWidth, $cropHeight);
            //final output
            $this->cachePicture($thumb, $urlreal);
            imagedestroy($thumb);
            return $cachepath;
        }
    }
    //=============================================//
    //==> Save the dynamically created pictures <==//
    //=============================================//
    public function cachePicture($im, $cachepath)
    {
        if (!is_dir(dirname($cachepath))) {mkdir(dirname($cachepath));}
        if (function_exists("imagepng")) {imagepng($im, $cachepath);} elseif (function_exists("imagegif")) {imagegif($im, $cachepath);} elseif (function_exists("imagejpeg")) {imagejpeg($im, $cachepath, 0.5);} elseif (function_exists("imagewbmp")) {imagewbmp($im, $cachepath);} else {die("Doh ! No graphical functions on this server ?");}
        return $cachepath;
    }
    //=========================================================//
    //=> Used for debugging to see what the gallery contains <=//
    //=========================================================//
    public function trace()
    {
        highlight_string(print_r($this, true));
    }
}
