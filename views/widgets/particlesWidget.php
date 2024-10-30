<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
<div id="vmutc_particlesContainer" class="vmutc_handle vmutc_widgetWindow">
    <div class="panel-group" role="tablist">
        <div class="panel panel-default">
            <div class="panel-heading panel-odd" role="tab">
                <h3 class="panel-title">
                    <div data-toggle="collapse" href="#vmutc_particlesTab" aria-expanded="true"
                        aria-controls="vmutc_particlesTab" class="vmutc_animatorTab collapsed" data-title="Particles">
                        <span><?php echo _e('Particles' , 'css-magician'); ?></span> <i class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>
            <div id="vmutc_particlesTab" class="panel-collapse collapse panel-odd" role="tabpanel">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-4 vmutc-widgetValues">
                            <label class="control-label smallfont11 col-md-12">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('Number' , 'css-magician'); ?></span>
                            </label>
                            <div id="vmutc_particleNumber_slider" class=""></div>
                            <input type="text" name="vmutc_particleNumber" id="vmutc_particleNumber" value="0"
                                class="vmutc_editorInput vmutc_numeric inputAlign">
                        </div>
                        <div class="col-md-4 vmutc-widgetValues">
                            <label class="control-label smallfont11">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('enable Density' , 'css-magician'); ?></span>
                            </label>
                            <input type="checkbox" name="vmutc_particleDensity" id="vmutc_particleDensity" value="0"
                                class="">
                        </div>
                        <div class="col-md-4 vmutc-widgetValues">
                            <label class="control-label smallfont11 col-md-12">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('density Value' , 'css-magician'); ?></span>
                            </label>
                            <div id="vmutc_particleDensityValue_slider" class=""></div>
                            <input type="text" name="vmutc_particleDensityValue" id="vmutc_particleDensityValue"
                                value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 vmutc-widgetValues">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-7">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('color' , 'css-magician'); ?></span>
                                </label>
                                <input type="text" name="vmutc_particleColor" id="vmutc_particleColor">
                                <input type="hidden" name="vmutc_particleColorReal" id="vmutc_particleColorReal">
                            </div>
                        </div>
                        <div class="col-md-3 vmutc-widgetValues">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('stroke Width' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleStrokeWidth_slider" class=""></div>
                                <input type="text" name="vmutc_particleStrokeWidth" id="vmutc_particleStrokeWidth"
                                    value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                        <div class="col-md-3 vmutc-widgetValues">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-7">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('stroke Color' , 'css-magician'); ?></span>
                                </label>
                                <input type="text" name="vmutc_particleStrokeColor" id="vmutc_particleStrokeColor">
                                <input type="hidden" name="vmutc_particleStrokeColorReal" id="vmutc_particleStrokeColorReal">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('polygon Nb. Sides' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particlePolygonNbSides_slider" class=""></div>
                                <input type="text" name="vmutc_particlePolygonNbSides" id="vmutc_particlePolygonNbSides"
                                    value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label smallfont11 col-md-12" style="text-align:center;">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('particles Type' , 'css-magician'); ?></span>
                                </label>
                                <select id="vmutc_particleType" type="select" class="vmutc_selectorEffects"
                                    name="vmutc_particleType" autocomplete="off" style="padding:5px;">
                                    <option value="image">image</option>
                                    <option value="circle">circle</option>
                                    <option value="edge">edge</option>
                                    <option value="triangle">triangle</option>
                                    <option value="polygon">polygon</option>
                                    <option value="star">star</option>
                                    <option value="image">image</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('image Width' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleImageWidth_slider"></div>
                                <input type="text" name="vmutc_particleImageWidth" id="vmutc_particleImageWidth"
                                    value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('image Height' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleImageHeight_slider"></div>
                                <input type="text" name="vmutc_particleImageHeight" id="vmutc_particleImageHeight"
                                    value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label class="control-label col-md-3 smallfont11">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('image Url' , 'css-magician'); ?></span>
                            </label>
                            <div class="col-md-9">
                                <input type="text" name="vmutc_particleImageUrl" id="vmutc_particleImageUrl" value="" style="width:100%;"
                                    class="vmutc_random" where="imageMask">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading panel-even" role="tab">
                <h3 class="panel-title">
                    <div data-toggle="collapse" href="#vmutc_particlesSizeTab" aria-expanded="true"
                        aria-controls="vmutc_particlesSizeTab" class="vmutc_animatorTab collapsed" data-title="Particles Size">
                        <span><?php echo _e('Particles Size' , 'css-magician'); ?></span> <i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>
            <div id="vmutc_particlesSizeTab" class="panel-collapse collapse panel-even" role="tabpanel">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('particles Size' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleSize_slider" class=""></div>
                                <input type="text" name="vmutc_particleSize" id="vmutc_particleSize" value="0"
                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group  vmutc-widgetValues">
                                <label class="control-label smallfont11">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('size Random' , 'css-magician'); ?></span>
                                </label>
                                <input type="checkbox" name="vmutc_particleSizeRandom" id="vmutc_particleSizeRandom"
                                    value="0" class="">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group  vmutc-widgetValues">
                                <label class="control-label smallfont11">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('size Anim' , 'css-magician'); ?></span>
                                </label>
                                <input type="checkbox" name="vmutc_particleSizeAnim" id="vmutc_particleSizeAnim"
                                    value="0" class="">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('size Anim Speed' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleSizeAnimSpeed_slider" class=""></div>
                                <input type="text" name="vmutc_particleSizeAnimSpeed" id="vmutc_particleSizeAnimSpeed"
                                    value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('min. size Anim' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleMinSizeAnim_slider" class=""></div>
                                <input type="text" name="vmutc_particleMinSizeAnim" id="vmutc_particleMinSizeAnim"
                                    value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group  col-md-12">
                                <label class="control-label smallfont11">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('size Anim Sync' , 'css-magician'); ?></span>
                                </label>
                                <input type="checkbox" name="vmutc_particleSizeAnimSync" id="vmutc_particleSizeAnimSync"
                                    value="0" class="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading panel-odd" role="tab">
                <h3 class="panel-title">
                    <div data-toggle="collapse" href="#vmutc_particlesOpacityTab" aria-expanded="true"
                        aria-controls="vmutc_particlesOpacityTab" class="vmutc_animatorTab collapsed" data-title="OPacity">
                        <span><?php echo _e('Opacity' , 'css-magician'); ?></span> <i class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>
            <div id="vmutc_particlesOpacityTab" class="panel-collapse collapse panel-odd" role="tabpanel">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group  col-md-12">
                                <label class="control-label smallfont11">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('opacity Random' , 'css-magician'); ?></span>
                                </label>
                                <input type="checkbox" name="vmutc_particleOpacityRandom"
                                    id="vmutc_particleOpacityRandom" value="0" class="">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('opacity Value' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleOpacityValue_slider" class=""></div>
                                <input type="text" name="vmutc_particleOpacityValue" id="vmutc_particleOpacityValue"
                                    value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group  col-md-12">
                                <label class="control-label smallfont11">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('opacity Anim' , 'css-magician'); ?></span>
                                </label>
                                <input type="checkbox" name="vmutc_particleOpacityAnim" id="vmutc_particleOpacityAnim"
                                    value="0" class="">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('opacity Anim Speed' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleOpacityAnimSpeed_slider" class=""></div>
                                <input type="text" name="vmutc_particleOpacityAnimSpeed"
                                    id="vmutc_particleOpacityAnimSpeed" value="0"
                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('min. opacity Anim' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleMinOpacityAnim_slider" class=""></div>
                                <input type="text" name="vmutc_particleMinOpacityAnim" id="vmutc_particleMinOpacityAnim"
                                    value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group  vmutc-widgetValues">
                                <label class="control-label smallfont11">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('opacity Anim Sync' , 'css-magician'); ?></span>
                                </label>
                                <input type="checkbox" name="vmutc_particleOpacityAnimSync"
                                    id="vmutc_particleOpacityAnimSync" value="0" class="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading panel-even" role="tab">
                <h3 class="panel-title">
                    <div data-toggle="collapse" href="#vmutc_particlesLineTab" aria-expanded="true"
                        aria-controls="vmutc_particlesLineTab" class="vmutc_animatorTab collapsed" data-title="Particles Lines">
                        <span><?php echo _e('Particles Lines' , 'css-magician'); ?></span> <i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>
            <div id="vmutc_particlesLineTab" class="panel-collapse collapse panel-even" role="tabpanel">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group  vmutc-widgetValues">
                                <label class="control-label smallfont11">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('line linked' , 'css-magician'); ?></span>
                                </label>
                                <input type="checkbox" name="vmutc_particleLineLinked" id="vmutc_particleLineLinked"
                                    value="0" class="">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('Line Distance' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleLineDistance_slider" class=""></div>
                                <input type="text" name="vmutc_particleLineDistance" id="vmutc_particleLineDistance"
                                    value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('line Opacity' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleLineOpacity_slider" class=""></div>
                                <input type="text" name="vmutc_particleLineOpacity" id="vmutc_particleLineOpacity"
                                    value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group  col-md-12">
                                <label class="control-label smallfont11">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('line Width' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleLineWidth_slider" class=""></div>
                                <input type="text" name="vmutc_particleLineWidth" id="vmutc_particleLineWidth" value="0"
                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('line Color' , 'css-magician'); ?></span>
                                </label>
                                <input type="text" name="vmutc_particleLineColor" id="vmutc_particleLineColor">
                                <input type="hidden" name="vmutc_particleLineColorReal"
                                    id="vmutc_particleLineColorReal">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading panel-odd" role="tab">
                <h3 class="panel-title">
                    <div data-toggle="collapse" href="#vmutc_particlesMoveTab" aria-expanded="true"
                        aria-controls="vmutc_particlesMoveTab" class="vmutc_animatorTab collapsed" data-title="Particles Move">
                        <span><?php echo _e('Particles Move' , 'css-magician'); ?></span><i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>
            <div id="vmutc_particlesMoveTab" class="panel-collapse collapse panel-odd" role="tabpanel">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-7">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('move Enable' , 'css-magician'); ?></span>
                                </label>
                                <input type="checkbox" name="vmutc_particleMoveEnable" id="vmutc_particleMoveEnable"
                                    value="0" class="">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12" style="text-align:center;">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('move Direction' , 'css-magician'); ?></span>
                                </label>
                                <select id="vmutc_particleMoveDirection" type="select"
                                    class="vmutc_select70 vmutc_selectorEffects" name="vmutc_particleMoveDirection"
                                    autocomplete="off" style="padding:5px;">
                                    <option value="none">none</option>
                                    <option value="top">top</option>
                                    <option value="top-right">top-right</option>
                                    <option value="top-left">top-left</option>
                                    <option value="bottom">bottom</option>
                                    <option value="bottom-right">bottom-right</option>
                                    <option value="bottom-left">bottom-left</option>
                                    <option value="left">left</option>
                                    <option value="right">right</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('move Random' , 'css-magician'); ?></span>
                                </label>
                                <input type="checkbox" name="vmutc_particleMoveRandom" id="vmutc_particleMoveRandom"
                                    value="0" class="">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('move Straight' , 'css-magician'); ?></span>
                                </label>
                                <input type="checkbox" name="vmutc_particleMoveStraight" id="vmutc_particleMoveStraight"
                                    value="0" class="">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('move Speed' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleMoveSpeed_slider" class=""></div>
                                <input type="text" name="vmutc_particleMoveSpeed" id="vmutc_particleMoveSpeed" value="0"
                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12" style="text-align:center;">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('move Out Mode' , 'css-magician'); ?></span>
                                </label>
                                <select id="vmutc_particleMoveOutMode" type="select"
                                    class=" vmutc_select70 vmutc_selectorEffects" name="vmutc_particleMoveOutMode"
                                    autocomplete="off" style="padding:5px;">
                                    <option value="out">out</option>
                                    <option value="bounce">bounce</option>

                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group  vmutc-widgetValues">
                                <label class="control-label smallfont11">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('move Attract' , 'css-magician'); ?></span>
                                </label>
                                <input type="checkbox" name="vmutc_particleMoveAttract" id="vmutc_particleMoveAttract"
                                    value="0" class="">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('attract Rotate X' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleAttractRotateX_slider" class=""></div>
                                <input type="text" name="vmutc_particleAttractRotateX" id="vmutc_particleAttractRotateX"
                                    value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('attract Rotate Y' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_particleAttractRotateY_slider" class=""></div>
                                <input type="text" name="vmutc_particleAttractRotateY" id="vmutc_particleAttractRotateY"
                                    value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                    </div>
                </div> <!-- panel body-->
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading panel-even" role="tab">
                <h3 class="panel-title">
                    <div data-toggle="collapse" href="#vmutc_interactivityTab" aria-expanded="true"
                        aria-controls="vmutc_interactivityTab" class="vmutc_animatorTab collapsed" data-title="Interactivity">
                        <span><?php echo _e('Interactivity' , 'css-magician'); ?></span><i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>
            <div id="vmutc_interactivityTab" class="panel-collapse collapse panel-even" role="tabpanel">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('Hover' , 'css-magician'); ?></span>
                                </label>
                                <input type="checkbox" name="vmutc_particleHover" id="vmutc_particleHover" value="0"
                                    class="">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12" style="text-align:center;">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('hover Mode' , 'css-magician'); ?></span>
                                </label>
                                <select id="vmutc_particleHoverMode" type="select"
                                    class=" vmutc_select70 vmutc_selectorEffects" name="vmutc_particleHoverMode"
                                    autocomplete="off" style="padding:5px;">
                                    <option value="grab">grab</option>
                                    <option value="bubble">bubble</option>
                                    <option value="repulse">repulse</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group  vmutc-widgetValues">
                                <label class="control-label smallfont11">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('Click' , 'css-magician'); ?></span>
                                </label>
                                <input type="checkbox" name="vmutc_particleClick" id="vmutc_particleClick" value="0"
                                    class="">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group vmutc-widgetValues">
                                <label class="control-label smallfont11 col-md-12" style="text-align:center;">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                        ><?php echo _e('click Mode' , 'css-magician'); ?></span>
                                </label>
                                <select id="vmutc_particleClickMode" type="select"
                                    class=" vmutc_select70 vmutc_selectorEffects" name="vmutc_particleClickMode"
                                    autocomplete="off" style="padding:5px;">
                                    <option value="push">push</option>
                                    <option value="bubble">bubble</option>
                                    <option value="repulse">repulse</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-3 vmutc-widgetValues">
                            <label class="control-label">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('grab Distance' , 'css-magician'); ?></span>
                            </label>
                            <div id="vmutc_particleGrabDistance_slider" class=""></div>
                            <input type="text" name="vmutc_particleGrabDistance" id="vmutc_particleGrabDistance"
                                value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                        </div>
                        <div class="form-group col-md-3 vmutc-widgetValues">
                            <label class="control-label">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('grab Line Linked Opacity' , 'css-magician'); ?></span>
                            </label>
                            <div id="vmutc_particleGrabLineOpacity_slider" class=""></div>
                            <input type="text" name="vmutc_particleGrabLineOpacity" id="vmutc_particleGrabLineOpacity"
                                value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-3 vmutc-widgetValues">
                            <label class="control-label">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('bubble Distance' , 'css-magician'); ?></span>
                            </label>
                            <div id="vmutc_particleBubbleDistance_slider" class=""></div>
                            <input type="text" name="vmutc_particleBubbleDistance" id="vmutc_particleBubbleDistance"
                                value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                        </div>
                        <div class="form-group col-md-3 vmutc-widgetValues">
                            <label class="control-label">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('bubble Opacity' , 'css-magician'); ?></span>
                            </label>
                            <div id="vmutc_particleBubbleOpacity_slider" class=""></div>
                            <input type="text" name="vmutc_particleBubbleOpacity" id="vmutc_particleBubbleOpacity"
                                value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                        </div>
                        <div class="form-group col-md-3 vmutc-widgetValues">
                            <label class="control-label">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('bubble Size' , 'css-magician'); ?></span>
                            </label>
                            <div id="vmutc_particleBubbleSize_slider" class=""></div>
                            <input type="text" name="vmutc_particleBubbleSize" id="vmutc_particleBubbleSize" value="0"
                                class="vmutc_editorInput vmutc_numeric inputAlign">
                        </div>
                        <div class="form-group col-md-3 vmutc-widgetValues">
                            <label class="control-label">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('bubble Duration' , 'css-magician'); ?></span>
                            </label>
                            <div id="vmutc_particleBubbleDuration_slider" class=""></div>
                            <input type="text" name="vmutc_particleBubbleDuration" id="vmutc_particleBubbleDuration"
                                value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-3 vmutc-widgetValues">
                            <label class="control-label">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('repulse Distance' , 'css-magician'); ?></span>
                            </label>
                            <div id="vmutc_particleRepulseDistance_slider" class=""></div>
                            <input type="text" name="vmutc_particleRepulseDistance" id="vmutc_particleRepulseDistance"
                                value="0" class="vmutc_editorInput vmutc_numeric inputAlign">
                        </div>
                    </div>
                </div> <!-- panel body-->
            </div> <!-- panel collpase-->
        </div>
        <!--panel default-->
    </div>
    <!--panel-group -->
    
</div>