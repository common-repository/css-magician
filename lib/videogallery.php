<?php
/**
 *  CSS MAGICIAN
 * @category front office features
 * @authors presta-magician.com <contact@presta-magician.com>
 * @copyright Vinum Master 2015-2020
 * @version 1.0.0
 * @website <https://www.presta-magician.com> 
 * @file videogallery.php
 * @license: GPLv2
 * International Registered Trademark & Property of Presta Magician
 * Css Magician for Wordpress basic version
 * 
 **/
if (!defined('CSSM_VERSION')) {
    die('-1');
}
class VideoGallery
{
    private $thumbsize; //Size of the video thumbnail
    private $elements;

    public function __construct(
        $thumbsize = 100, //Change this to match your thumbnail size
        $elements = array()
    ) {
        $this->thumbsize = $thumbsize;
        $this->elements = $elements;
    }
    //========================================//
    //=====> List the video to include <=====//
    //========================================//
    public function getVideoArray($url)
    {
        //Tell the class to look for video inside this folder
        $path = $url . '/{*.mp4}';
        $videoarray = glob($path, GLOB_BRACE) ? glob($path, GLOB_BRACE) : array();
        return $videoarray; //Return the found videos
    }
    //=========================================//
    //=====> Add an video to the gallery <=====//
    //=========================================//
    public function addVideo($src)
    {
        $elements = $this->elements;
        $elements[] = $src;
        $this->elements = $elements;
    }
    //==========================================//
    //===> Add all the video from a folder <===//
    //==========================================//
    public function loadVideos($url)
    {
        $videoarray = $this->getVideoArray($url);
        if (!empty($videoarray)) {foreach ($videoarray as $video) {$this->addVideo($video);}}
    }
    //=========================================//
    //==> Write the markup for the gallery <===//
    //=========================================//
    public function display($url, $where, $position,$what)
    {
        $date = new DateTime();
        $date = $date->getTimestamp();
        $markup = '
    <div id="easyvideogallery" style="top:' . $position . 'px;">
    <input id="easyvideogallerywhat" type="hidden" value="'.$what.'"/>
  
      <ul>';
        $markup .= '<li>
            <img src="'.CSSM_PLUGIN_URL.'assets/img/video/noitem.png" alt="noitem" data-rel="noitem" />
        </li>';
     

        if (!empty($this->elements)) {
            foreach ($this->elements as $video) {
                $videoname = explode("/", $video);
                $videoname = end($videoname);
                $thumb = $this->getVideoThumbnail($video, $url, $date, $videoname);
                if ($videoname != "noitem.png") {
                        $markup .= '<li>
      <video autoplay loop where="' . $where . '" src="'.CSSM_PLUGIN_URL.'assets/img/video/' . $videoname . '?v=' . $date . '" alt="' . $videoname . '" />
      <span class="vmutc_galleryVideoRemove" data-name="' . $videoname . '">Remove</span>

    </li>';
              
                }

            }
        }
        $markup .= '
      </ul>
    </div>';
        echo $markup;
        return $markup;
    }
    //=========================================//
    //====> Easy call to set everything up <===//
    //=========================================//
    public static function getPublicSide($url, $position,$what)
    {
        $where = explode("/", $url);
        $where = end($where);
        $gallery = new VideoGallery();
        $gallery->loadVideos($url);
        $gallery->display($url, $where, $position,$what);
    }
    //=========================================//
    //=====> Create the video thumbnail <======//
    //=========================================//
    public function getVideoThumbnail($src, $url, $date, $videoname)
    {
        $size = $this->thumbsize;
        $imgSrc = $src;
        //cached img
            $cachepath = CSSM_PLUGIN_URL.'assets/img/video/' . $videoname . '?v=' . $date;
       
        $thumbSize = $size;
        if (file_exists($cachepath)) {
            return $cachepath;
        } //If cached, return right away
        else {
            //final output
            return $cachepath;
        }
    }

    //=========================================================//
    //=> Used for debugging to see what the gallery contains <=//
    //=========================================================//
    public function trace()
    {
        highlight_string(print_r($this, true));
    }
}
