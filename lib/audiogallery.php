<?php
/**
 *  CSS MAGICIAN
 * @category front office features
 * @authors presta-magician.com <contact@presta-magician.com>
 * @copyright Vinum Master 2015-2020
 * @version 1.0.0
 * @website <https://www.presta-magician.com> 
 * @file audiogallery.php
 * @license: GPLv2
 * International Registered Trademark & Property of Presta Magician
 * Css Magician for Wordpress basic version
 * 
 **/
if (!defined('CSSM_VERSION')) {
    die('-1');
}
class AudioGallery
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
    public function getAudioArray($url)
    {
        //Tell the class to look for images inside this folder
        $path = $url . '/{*.mp3}';
        $imgarray = glob($path, GLOB_BRACE) ? glob($path, GLOB_BRACE) : array();
        return $imgarray; //Return the found images
    }
    //=========================================//
    //=====> Add an image to the gallery <=====//
    //=========================================//
    public function addAudio($src)
    {
        $elements = $this->elements;
        $elements[] = $src;
        $this->elements = $elements;
    }
    //==========================================//
    //===> Add all the images from a folder <===//
    //==========================================//
    public function loadAudios($url)
    {
        $audioarray = $this->getAudioArray($url);
        if (!empty($audioarray)) {
            foreach ($audioarray as $audio) {
                $this->addAudio($audio);
            }
        }
    }
    //=========================================//
    //==> Write the markup for the gallery <===//
    //=========================================//

    public function display($url, $where, $position,$what)
    {
        $date = new DateTime();
        $date = $date->getTimestamp();
        $markup = '
    <div id="easyaudiogallery" style="top:' . $position . 'px;">
    <input id="easyaudiogallerywhat" type="hidden" value="'.$what.'"/>
  
      <ul>';
             $markup .= '<li>
            <img src="'.CSSM_PLUGIN_URL.'assets/img/audio/noitem.png" alt="noitem" data-rel="noitem" />
        </li>';
       
        if (!empty($this->elements)) {
            foreach ($this->elements as $audio) {
                $audioname = explode("/", $audio);
                $audioname = end($audioname);
                $thumb = $this->getAudioThumbnail($audio, $url, $date, $audioname);
                if ($audioname != "noitem.png") {
                         $markup .= '<li>
               <img class="" where="' . $where . '" src="'.CSSM_PLUGIN_URL.'assets/img/mp3.png" alt="' . $audioname . '" />

      <audio where="' . $where . '" src="'.CSSM_PLUGIN_URL.'assets/img/audio/' . $audioname . '?v=' . $date . '" alt="' . $audioname . '" />
      <span class="" data-name="' . $audioname . '">' . $audioname . '</span>
      <span class="vmutc_galleryAudioRemove" data-name="' . $audioname . '">Remove</span>

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
        $gallery = new AudioGallery();
        $gallery->loadAudios($url);
        $gallery->display($url, $where, $position,$what);
    }
    //=========================================//
    //=====> Create the image thumbnail <======//
    //=========================================//
    public function getAudioThumbnail($src, $url, $date, $audioname)
    {
        $size = $this->thumbsize;
        $imgSrc = $src;
        //cached img
            $cachepath = CSSM_PLUGIN_URL.'assets/img/audio/' . $audioname . '?v=' . $date;
    

        $thumbSize = $size;
        if (file_exists($cachepath)) {
            return $cachepath;
        } //If cached, return right away
        else {
            //final output
            return $cachepath;
        }
    }
    //=============================================//
    //==> Save the dynamically created pictures <==//
    //=============================================//
    //=========================================================//
    //=> Used for debugging to see what the gallery contains <=//
    //=========================================================//
    public function trace()
    {
        highlight_string(print_r($this, true));
    }
}
