<?php
/**
 *  CSS MAGICIAN
 * @category front office features
 * @authors presta-magician.com <contact@presta-magician.com>
 * @copyright Vinum Master 2015-2020
 * @version 1.0.0
 * @website <https://www.presta-magician.com> 
 * @file svggallery.php
 * @license: GPLv2
 * International Registered Trademark & Property of Presta Magician
 * Css Magician for Wordpress basic version
 * 
 **/
if (!defined('CSSM_VERSION')) {
    die('-1');
}
class SvgGallery
{
    private $thumbsize; //Size of the svg thumbnail
    private $elements;

    public function __construct(
        $thumbsize = 100, //Change this to match your thumbnail size
        $elements = array()
    ) {
        $this->thumbsize = $thumbsize;
        $this->elements = $elements;
    }
    //========================================//
    //=====> List the svg to include <=====//
    //========================================//
    public function getSvgArray($url)
    {
        //Tell the class to look for svg inside this folder
        $path = $url . '/{*.svg}';
        $svgarray = glob($path, GLOB_BRACE) ? glob($path, GLOB_BRACE) : array();
        return $svgarray; //Return the found svgs
    }
    //=========================================//
    //=====> Add an svg to the gallery <=====//
    //=========================================//
    public function addSvg($src)
    {
        $elements = $this->elements;
        $elements[] = $src;
        $this->elements = $elements;
    }
    //==========================================//
    //===> Add all the svg from a folder <===//
    //==========================================//
    public function loadSvg($url)
    {
        $svgarray = $this->getSvgArray($url);
        if (!empty($svgarray)) {foreach ($svgarray as $svg) {$this->addSvg($svg);}}
    }
    //=========================================//
    //==> Write the markup for the gallery <===//
    //=========================================//
    public function display($url, $where, $position,$what)
    {
        $date = new DateTime();
        $date = $date->getTimestamp();
        $markup = '
    <div id="easysvggallery" style="top:' . $position . 'px;">
    <input id="easysvggallerywhat" type="hidden" value="'.$what.'"/>
 
      <ul>';
            $markup .= '<li class="vmutc_svg_selector" data-name="">
            <img src="'.CSSM_PLUGIN_URL.'assets/img/svg/noitem.png" alt="noitem" data-rel="noitem" />
        </li>';
        

        if (!empty($this->elements)) {
            foreach ($this->elements as $svg) {
                $svgname = explode("/", $svg);
                $svgname = end($svgname);
                if ($svgname != "noitem.png") {
                    $svgcontent = file_get_contents($svg);

                    $markup .= '<li class="vmutc_svg_selector" data-name="' . $svgname . '" ><div class="vmutc_svg_preview" data-name="' . $svgname . '">' . $svgcontent . '</div>
              <div class="vmutc_svg_gallery_action"> <span class="vmutc_gallerySvgCopy" data-name="' . $svgname . '"><i class="fas fa-file-import"></i></span>
               <span class="vmutc_gallerySvgRemove" data-name="' . $svgname . '"><i class="fas fa-trash-alt"></i></span> </div>
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
        $gallery = new SvgGallery();
        $gallery->loadSvg($url);
        $gallery->display($url, $where, $position,$what);
    }
}
