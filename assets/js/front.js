/** 
 * CSS MAGICIAN
 *
 * @category front office features
 * @authors presta-magician.com <contact@presta-magician.com>
 * @copyright Presta Magician 2015-2020
 * @version 1.0.0
 * @website <https://www.presta-magician.com>
 
 * @file front.js
 *
* @license: GPLv2
   International Registered Trademark & Property of Presta Magician
Css Magician for Wordpress basic version **/
var countElement = 0;
var counter = new Array();
var clock = new Array();
var timer = new Array();
var flyingCharactersTimeline = new Array();
var animatorTimeline = new Array();
var swiperSlider = new Array();
var backgroundTimeline = new Array();
var counterSVG = new Array();
var counterUp = window.counterUp["default"]; // import counterUp 
var particlesObj = {};
var gridstack = [];


jQuery(document).ready(function ($) {
  "use strict";

  var baseDir = $('#cssm_base_dir').val();
  window.onresize = function (e) {
    $('.counterWidget').each(function () {
      var counterID = this.id;
      var divider = $(this).attr('data-radius');
      counterSVG[counterID + '_circle'].updateRadius(getCounterSVGWidth(counterID, divider));
    });
  };
  if ($('#vmutc_isVideo').val() == 1 && $('#vmutc_videoName').val() != '') {
    $('body').prepend('<div id="vmutc_video_container"><video id="vmutc_video" loop="loop" muted="muted" autoplay="autoplay"><source type="video/mp4" src="' + $('#vmutc_videoName').val() + '"></video></div>');
  }
  if ($('#vmutc_isImage').val() == 1 && $('#vmutc_imageName').val() != '') {
    $('body').prepend('<div id="vmutc_image_container"><img id="vmutc_image" src="' + $('#vmutc_imageName').val() + '"></img></div>');
  }
  if (typeof ($('#vmutc_allblocks').val()) != 'undefined' && $('#vmutc_allblocks').val() != '') {
    var isFirefox = /firefox/.test(navigator.userAgent.toLowerCase());      
    var allBlocks = JSON.parse($('#vmutc_allblocks').val());
    for (var index in allBlocks) {
      var block = allBlocks[index],
        id = "",
        id_block = "",
        parent = "",
        where = "",
        what = "",
        content = "",
        isAdmin = false,
        whatClass = "",
        style = "";
      if (typeof ($('#cssm_id_theme').val()) != 'undefined') {
        isAdmin = true;
      }
      for (var attribut in block) {
        if (attribut == "id")
          id = block[attribut];
        if (attribut == "id_block")
          id_block = block[attribut];
        if (attribut == "parent")
          parent = block[attribut];
        if (attribut == "where")
          where = block[attribut];
        if (attribut == "admin_block" && isAdmin)
          content = block[attribut];
        if (attribut == "front_block" && !isAdmin)
          content = block[attribut];
        if (attribut == "what")
          what = block[attribut];
        if (attribut == "whatClass")
          whatClass = block[attribut];
        if (attribut == "style")
          style = block[attribut];
      }
      if (where == 'append') {
        $(parent).append(content);
      }
      if (where == 'prepend') {
        $(parent).prepend(content);
      }
      if (where == 'before') {
        $(parent).before(content);
      }
      if (where == 'after') {
        $(parent).after(content);
      }
      var marginHorizontal = $('#' + id_block).attr('data-widgetmarginhorizontal');
   //   $('#' + id_block).attr('style',style);
      $("<style type='text/css'>" + $('#' + id_block + '.grid-stack > .grid-stack-item > .grid-stack-item-content').selector + "{left:" + marginHorizontal + "px!important;} </style>").appendTo($("#vmutc_front_styles_container"));
      $("<style type='text/css'>" + $('#' + id_block + '.grid-stack .grid-stack-placeholder > .placeholder-content').selector + "{left:" + marginHorizontal + "px!important;} </style>").appendTo($("#vmutc_front_styles_container"));
      var originHeight = $('#' + id_block).height();
  
      if (isAdmin && $('#' + id_block).length) {
      $('#' + id_block).find('.ui-resizable-handle').remove();
        gridstack[id_block] = GridStack.init({
          alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
          resizable: {
            handles: 'e, se, s, sw, w'
          },
          float: false,
          minRow: 1,
          removeTimeout: 100,
          acceptWidgets: '.openwidget'
        }, '#' + id_block);
        var verticalMargin = $('#' + id_block).attr('data-widgetmarginvertical');
        gridstack[id_block].verticalMargin(verticalMargin);     
     
      } else {
        if($('#' + id_block).length)
        {
        gridstack[id_block] = GridStack.init({
          disableDrag: true,
          disableResize: true,
          staticGrid: true,
        });
        var verticalMargin = $('#' + id_block).attr('data-widgetmarginvertical');
        gridstack[id_block].verticalMargin(verticalMargin);
      }
     
      }
   
      $('#' + id_block).height(originHeight);   
   
      var hasAccordion = $('#' + id_block).find('.accordionWidget');
      if (hasAccordion.length) {
        for (var i = 0; i < hasAccordion.length; i++) {
          var accordionid = $(hasAccordion[i]).attr('id');
          var backcolorhover = $(hasAccordion[i]).attr('data-accordiontitlebackcolorhover');
          var colorhover = $(hasAccordion[i]).attr('data-accordiontitlecolorhover');
          var titlefont = $(hasAccordion[i]).attr('data-accordiontitlefont');
          var iconfontsize = $(hasAccordion[i]).attr('data-accordioniconfontsize');
          var iconcolor = $(hasAccordion[i]).attr('data-accordioniconcolor');
          var activecolor = $(hasAccordion[i]).attr('data-accordionactivecolor');
         
          $('#' + accordionid + ' .vmutc-accordion').on('click', function () {
            this.classList.toggle("activeAccordion");
            var panel = this.nextElementSibling;
            if ($(this).hasClass('activeAccordion')) {
              panel.style.height = 'auto';
            } else {
              panel.style.height = 0;
            }
          });
          $("<style type='text/css'>#" + accordionid + " .vmutc-accordion:hover {background-color:" + backcolorhover + "!important;}#" + accordionid + " .vmutc-accordion:hover h3{color:" + colorhover + "!important;}</style>").appendTo("#vmutc_front_styles_container");
          $("<style type='text/css'>#" + accordionid + " .vmutc-accordion:after{color:" + iconcolor + ";font-size:" + iconfontsize + "px!important;} </style>").appendTo("#vmutc_front_styles_container");
          $("<style type='text/css'>#" + accordionid + " .vmutc-accordion.activeAccordion{background-color:" + activecolor + "!important;} </style>").appendTo("#vmutc_front_styles_container");
        }
      }
      var hasTab = $('#' + id_block).find('.tabWidget');
      if (hasTab.length) {
        for (var i = 0; i < hasTab.length; i++) {
          var tabid = $(hasTab[i]).attr('id');
          var activebackcolor = $(hasTab[i]).attr('data-tabwidgettabbackgroundcoloractive');
          var activecolor = $(hasTab[i]).attr('data-tabwidgettabtextcoloractive');
          $('#' + tabid + ' .vmutc-tabs li').on('click', 'a', function (e) {
            var parentContainer = $(this).closest('.vmutc_tab_container');
            var tab = $(this).parent();
            var index = tab.attr('data-index');
            parentContainer.find('.active').removeClass('active');
            tab.addClass('active');
            parentContainer.find('.vmutc-tab-pane[data-index="' + index + '"]').addClass('active');
          });
          $("<style type='text/css'>#" + tabid + " .vmutc-tab-item.active .vmutc-tab-link{background-color:" + activebackcolor + "!important;color:" + activecolor + "!important;} </style>").appendTo("#vmutc_front_styles_container");
         
        }
      }
  
  
      var hasButtonWidget = $('#' + id_block).find('.buttonWidget');
      if (hasButtonWidget.length) {
        for (var i = 0; i < hasButtonWidget.length; i++) {
          var buttonID = $(hasButtonWidget[i]).attr('id');
          var buttontype = $('#' + buttonID).attr('data-button');
          var backgroundColorAfter = $('#' + buttonID).attr('data-buttonbackcolorafter');
          var backgroundColorBefore = $('#' + buttonID).attr('data-buttonbackcolorbefore');
          var textColorHover = $('#' + buttonID).attr('data-buttontextcolorhover');
          $("<style id='vmutc_buttonWidgetStyle_" + buttonID + "' type='text/css'></style>").appendTo("#vmutc_front_styles_container");
          $("<style id='vmutc_buttonWidgetStyleText_" + buttonID + "' type='text/css'></style>").appendTo("#vmutc_front_styles_container");
          if (buttontype != 'sandy-one' && buttontype != 'sandy-two' && buttontype != "sandy-three" && buttontype != "sandy-four")
            $('#vmutc_buttonWidgetStyle_' + buttonID).html('#' + buttonID + ' a.animated-button.' + buttontype + ':after{background-color:' + backgroundColorAfter + '!important;}');
          else
            $('#vmutc_buttonWidgetStyle_' + buttonID).html('#' + buttonID + ' a.animated-button.' + buttontype + ':after{border-color:' + backgroundColorAfter + '!important;}');
          if (buttontype == 'facebook2' || buttontype == 'twitter2' || buttontype == 'google' || buttontype == 'dribbble' || buttontype == 'skype') {
            $('#vmutc_buttonWidgetStyle_' + buttonID).html('#' + buttonID + '.social-btns .btn.' + buttontype + ':before{background-color:' + backgroundColorBefore + '!important;}');
            $('#vmutc_buttonWidgetStyleText_' + buttonID).html('#' + buttonID + '.social-btns a.btn:focus .fab,#' + buttonID + '.social-btns a.btn:hover .fab{color:' + textColorHover + '!important}');
          } else {
            $('#vmutc_buttonWidgetStyleText_' + buttonID).html('#' + buttonID + ' a:focus ,#' + buttonID + ' a:hover{color:' + textColorHover + '!important}');
          }
        }
      }
      var hasParticles = $('#' + id_block).find('.particlesWidget');
      if (hasParticles.length) {
        for (var i = 0; i < hasParticles.length; i++) {
          var particleID = $(hasParticles[i]).attr('id');
          updateParticle(particleID);
        }
      }

   
    
      var hasTitleWidget = $('#' + id_block).find('.titleWidget');
      if (hasTitleWidget.length) {
        for (var i = 0; i < hasTitleWidget.length; i++) {
          var titleID = $(hasTitleWidget[i]).attr('id');
          var backgroundColor = $(hasTitleWidget[i]).attr('data-titlebackcolorhover');
          var bordercolor = $(hasTitleWidget[i]).attr('data-titlebordercolorhover');
          var fontcolor = $(hasTitleWidget[i]).attr('data-titlefontcolorhover');
          var style = $(hasTitleWidget[i]).attr('data-style');
          $("<style id='vmutc_titleWidgetStyle_" + titleID + "' type='text/css'></style>").appendTo("#vmutc_front_styles_container");
          $('#vmutc_titleWidgetStyle_' + titleID).html('#' + titleID + ' .vmutc_titleWidgetStyle.vmutc_title' + style + ':hover:after {background-color:' + backgroundColor + '; border-color:' + bordercolor + ';color:' + fontcolor + '}');
        }
      }
    
      var hasRow = $('#' + id_block);
      if (hasRow.length) {
        for (var i = 0; i < hasRow.length; i++) {
          var rowID = $(hasRow[i]).attr('id');
          var backgroundColor = $('#' + rowID).attr('data-sectionbackgroundcolor');
          var backgroundImage = $('#' + rowID).attr('data-sectionbackgroundurl');
          var width = $('#' + rowID).attr('data-sectionwidth');
          var height = $('#' + rowID).attr('data-sectionHeight');
          var realParallax = $('#' + rowID).attr('data-sectionrealparallax');
          var hasParticles = $('#' + rowID).attr('data-sectionhasparticles');
          var isGradientUsed = $('#' + rowID).attr('data-gradientused');
          $('#' + rowID).attr('data-parent',parent);
          if (isGradientUsed == "1") {
            var backgroundGradient = $('#' + rowID).attr('data-gradient');
            if (backgroundImage != '') {
              var backgroundGradient = $('#' + rowID).attr('data-gradient');
              $("<style type='text/css'>" + $('#' + rowID).selector + "{margin:auto;width:" + width + "%;height:" + height + "px;background-image:url(" + baseDir + "assets/img/gallery/" + backgroundImage + "), " + backgroundGradient + ";}</style>").appendTo("#vmutc_front_styles_container");
            }
            if (backgroundImage == '') {
              $("<style type='text/css'>" + $('#' + rowID).selector + "{margin:auto;width:" + width + "%;height:" + height + "px;background:" + backgroundGradient + ";}</style>").appendTo("#vmutc_front_styles_container");
            }
          } else {
            if (backgroundImage != '') {
              $("<style type='text/css'>" + $('#' + rowID).selector + "{margin:auto;width:" + width + "%;height:" + height + "px;background-image:url(" + baseDir + "assets/img/gallery/" + backgroundImage + ");background-color:" + backgroundColor + "}</style>").appendTo("#vmutc_front_styles_container");
            }
            if (backgroundImage == '') {
              $("<style type='text/css'>" + $('#' + rowID).selector + "{margin:auto;width:" + width + "%;height:" + height + "px;background-color:" + backgroundColor + ";}</style>").appendTo("#vmutc_front_styles_container");
            }
          }
         
          if (hasParticles == "1") {
            updateSectionParticle(rowID);
          }
        }
      }
      var hasColumn = $('#' + id_block).find('.grid-stack-item');
      if (hasColumn.length) {
        for (var i = 0; i < hasColumn.length; i++) {
          var columnID = $(hasColumn[i]).attr('id');
          var backgroundColor = $('#' + columnID).attr('data-columnbackgroundcolor');
          var backgroundImage = $('#' + columnID).attr('data-columnbackgroundurl');
          var width = $('#' + columnID).attr('data-columnwidth');
          var height = $('#' + columnID).attr('data-columnHeight');
          var realParallax = $('#' + columnID).attr('data-columnrealparallax');
          var realLeft =  $('#' + columnID).attr('data-columnrealleft');
          var realTop = $('#' + columnID).attr('data-columnrealtop');
          var isGradientUsed = $('#' + columnID).attr('data-columngradientused');          
          if (isGradientUsed == "1") {
            var backgroundGradient = $('#' + columnID).attr('data-columngradient');
            if (backgroundImage != '') {
              var backgroundGradient = $('#' + columnID).attr('data-columngradient');
              $("<style type='text/css'>" + $('#' + columnID ).selector + "{height:" + height + "%;background-image:url(" + baseDir + "assets/img/gallery/" + backgroundImage + "), " + backgroundGradient + ";}</style>").appendTo("#vmutc_front_styles_container");
            }
            if (backgroundImage == '') {
              $("<style type='text/css'>" + $('#' + columnID).selector + "{height:" + height + "%;background:" + backgroundGradient + ";}</style>").appendTo("#vmutc_front_styles_container");
            }
          } else {
            if (backgroundImage != '') {
              $("<style type='text/css'>" + $('#' + columnID).selector + "{height:" + height + "%;background-image:url(" + baseDir + "assets/img/gallery/" + backgroundImage + ");background-color:" + backgroundColor + "}</style>").appendTo("#vmutc_front_styles_container");
            }
            if (backgroundImage == '') {
              $("<style type='text/css'>" + $('#' + columnID).selector + "{height:" + height + "%;background-color:" + backgroundColor + ";}</style>").appendTo("#vmutc_front_styles_container");
            }
          }
          if(!isFirefox)
          $('#' + columnID).css({'top':realTop,'left':realLeft}); 
   
     
        }
      }
   
      var hasAnimator = $('#' + id_block).find('.vmutc_animator ');
      if (hasAnimator.length) {
        for (var i = 0; i < hasAnimator.length; i++) {
          var animatorID = $(hasAnimator[i]).attr('id');
          var type = $('#' + animatorID).attr('data-animatortype');
          var start = $('#' + animatorID).attr('data-animatorstart');
          var scrub = $('#' + animatorID).attr('data-animatorscrub');
          var callFunction = false;
          var duration = $('#' + animatorID).attr('data-animatorduration');
          var easeCode = $('#' + animatorID).attr('data-animatoreasecode');
          var reverse = $('#' + animatorID).attr('data-animatorreverse');
          var end = $('#' + animatorID).attr('data-animatorend');
       
          if ($(hasAnimator[i]).hasClass('counterWidget')) {
            callFunction = 'counterWidget';
          }
          if ($(hasAnimator[i]).hasClass('counterCustomWidget')) {
            callFunction = 'counterCustomWidget';
          }
          if ($(hasAnimator[i]).hasClass('counterUpWidget')) {
            callFunction = 'counterUpWidget';
          }
          if ($(hasAnimator[i]).hasClass('flyingCharactersWidget')) {
            callFunction = 'flyingCharactersWidget';
          }
          if ($(hasAnimator[i]).hasClass('audioWidget')) {
            callFunction = 'audioWidget';
          }
          if (type != 'none') {
            $('#' + animatorID).css('opacity', 0);
             animator(animatorID, type, start, reverse, callFunction, duration, easeCode, scrub,end);
          }
        }
      }
    }
  }
  if (typeof ($('#vmutc_animations').val()) != 'undefined' && $('#vmutc_animations').val() != '') {
    var animations = JSON.parse($('#vmutc_animations').val());
    for (var parent in animations) {
      var animation = animations[parent],
        when = "",
        dothat = "",
        infinite = "",
        speed = "";
      for (var attribut in animation) {
        if (attribut == "when" && animation[attribut] != 'onRunFinished')
          when = animation[attribut];
        if (attribut == "when" && animation[attribut] == 'onRunFinished')
          when = animation[attribut] + ', on: $AniJSNotifier';
        if (attribut == "do")
          dothat = animation[attribut];
        if (attribut == "infinite" && animation[attribut] != '')
          infinite = animation[attribut];
        if (attribut == "speed" && animation[attribut] != false)
          speed = animation[attribut];
      }
      $(parent).attr('data-anijs', "if: " + when + ', do: ' + dothat + ' ' + infinite + ' animated').addClass('animationCursor');
      AniJS.run();
    }
  }
  function updateParticle(particleID) {
    var bounce = false;
    if ($('#' + particleID).attr('data-moveoutmode') == 'bounce')
      bounce = true;
    particlesObj = {
      "particles": {
        "number": {
          "value": $('#' + particleID).attr('data-particlenumber'),
          "density": {
            "enable": Boolean(Number($('#' + particleID).attr('data-density'))),
            "valueArea": $('#' + particleID).attr('data-densityvalue')
          }
        },
        "color": {
          "value": $('#' + particleID).attr('data-particlecolor')
        },
        "shape": {
          "type": $('#' + particleID).attr('data-imagetype'),
          "stroke": {
            "width": $('#' + particleID).attr('data-strokewidth'),
            "color": $('#' + particleID).attr('data-strokecolor')
          },
          "polygon": {
            "nbSides": $('#' + particleID).attr('data-nbsides')
          },
          "image": {
            "src": $('#' + particleID).attr('data-imageurl'),
            "width": $('#' + particleID).attr('data-imagewidth'),
            "height": $('#' + particleID).attr('data-imageheight')
          }
        },
        "opacity": {
          "value": $('#' + particleID).attr('data-opacityvalue'),
          "random": Boolean(Number($('#' + particleID).attr('data-opacityrandom'))),
          "anim": {
            "enable": Boolean(Number($('#' + particleID).attr('data-opacityanim'))),
            "speed": $('#' + particleID).attr('data-opacityanimspeed'),
            "minimumValue": $('#' + particleID).attr('data-minopacityanim'),
            "sync": Boolean(Number($('#' + particleID).attr('data-opacityanimsync')))
          }
        },
        "size": {
          "value": $('#' + particleID).attr('data-sizevalue'),
          "random": Boolean(Number($('#' + particleID).attr('data-sizerandom'))),
          "anim": {
            "enable": Boolean(Number($('#' + particleID).attr('data-sizeanim'))),
            "speed": $('#' + particleID).attr('data-sizeanimspeed'),
            "minimumValue": $('#' + particleID).attr('data-minsizeanim'),
            "sync": Boolean(Number($('#' + particleID).attr('data-sizeanimsync')))
          }
        },
        "lineLinked": {
          "enable": Boolean(Number($('#' + particleID).attr('data-linelinked'))),
          "distance": $('#' + particleID).attr('data-linedistance'),
          "color": $('#' + particleID).attr('data-linecolor'),
          "opacity": $('#' + particleID).attr('data-lineopacity'),
          "width": $('#' + particleID).attr('data-linewidth')
        },
        "move": {
          "enable": Boolean(Number($('#' + particleID).attr('data-moveenable'))),
          "speed": $('#' + particleID).attr('data-movespeed'),
          "direction": $('#' + particleID).attr('data-movedirection'),
          "bounce": bounce,
          "random": Boolean(Number($('#' + particleID).attr('data-moverandom'))),
          "straight": Boolean(Number($('#' + particleID).attr('data-movestraight'))),
          "outMode": $('#' + particleID).attr('data-moveoutmode'),
          "attract": {
            "enable": Boolean(Number($('#' + particleID).attr('data-moveattract'))),
            "rotateX": $('#' + particleID).attr('data-attractrotatex'),
            "rotateY": $('#' + particleID).attr('data-attractrotatey')
          }
        }
      },
      "interactivity": {
        "detectsOn": "canvas",
        "events": {
          "onHover": {
            "enable": Boolean(Number($('#' + particleID).attr('data-particlehover'))),
            "mode": $('#' + particleID).attr('data-particlehovermode')
          },
          "onClick": {
            "enable": Boolean(Number($('#' + particleID).attr('data-particleclick'))),
            "mode": $('#' + particleID).attr('data-particleclickmode')
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": $('#' + particleID).attr('data-grabdistance'),
            "lineLinked": {
              "opacity": $('#' + particleID).attr('data-grabopacity')
            }
          },
          "bubble": {
            "distance": $('#' + particleID).attr('data-bubbledistance'),
            "size": $('#' + particleID).attr('data-bubblesize'),
            "duration": $('#' + particleID).attr('data-bubbleduration'),
            "opacity": $('#' + particleID).attr('data-bubbleopacity'),
            "speed": 3
          },
          "repulse": {
            "distance": $('#' + particleID).attr('data-repulse'),
            "duration": 0.4
          },
          "push": {
            "quantity": 4
          },
          "remove": {
            "quantity": 2
          }
        }
      },
      "detectRetina": true
    }
    if (typeof (window.pJSDom[particleID]) != 'undefined')
      window.pJSDom[particleID].pJS.fn.vendors.destroypJS();
      tsParticles.load(particleID, particlesObj);
    var particlesCanvas = $('#' + particleID + ' canvas.tsparticles-canvas-el');
    var height = $('#' + particleID).attr('data-canvasheight');
    $(particlesCanvas).attr('height', height);
  }
  function updateSectionParticle(particleID) {
    var bounce = false;
    if ($('#' + particleID).attr('data-sectionparticlemoveoutmode') == 'bounce')
      bounce = true;
    particlesObj = {
      "particles": {
        "number": {
          "value": $('#' + particleID).attr('data-sectionparticlenumber'),
          "density": {
            "enable": Boolean(Number($('#' + particleID).attr('data-sectionparticledensity'))),
            "valueArea": $('#' + particleID).attr('data-sectionparticledensityvalue')
          }
        },
        "color": {
          "value": $('#' + particleID).attr('data-sectionparticlecolor')
        },
        "shape": {
          "type": $('#' + particleID).attr('data-sectionparticleimagetype'),
          "stroke": {
            "width": $('#' + particleID).attr('data-sectionparticlestrokewidth'),
            "color": $('#' + particleID).attr('data-sectionparticlestrokecolor')
          },
          "polygon": {
            "nbSides": $('#' + particleID).attr('data-sectionparticlenbsides')
          },
          "image": {
            "src": $('#' + particleID).attr('data-sectionparticleimageurl'),
            "width": $('#' + particleID).attr('data-sectionparticleimagewidth'),
            "height": $('#' + particleID).attr('data-sectionparticleimageheight')
          }
        },
        "opacity": {
          "value": $('#' + particleID).attr('data-sectionparticleopacityvalue'),
          "random": Boolean(Number($('#' + particleID).attr('data-sectionparticleopacityrandom'))),
          "anim": {
            "enable": Boolean(Number($('#' + particleID).attr('data-sectionparticleopacityanim'))),
            "speed": $('#' + particleID).attr('data-sectionparticleopacityanimspeed'),
            "minimumValue": $('#' + particleID).attr('data-sectionparticleminopacityanim'),
            "sync": Boolean(Number($('#' + particleID).attr('data-sectionparticleopacityanimsync')))
          }
        },
        "size": {
          "value": $('#' + particleID).attr('data-sectionparticlesizevalue'),
          "random": Boolean(Number($('#' + particleID).attr('data-sectionparticlesizerandom'))),
          "anim": {
            "enable": Boolean(Number($('#' + particleID).attr('data-sectionparticlesizeanim'))),
            "speed": $('#' + particleID).attr('data-sectionparticlesizeanimspeed'),
            "minimumValue": $('#' + particleID).attr('data-sectionparticleminsizeanim'),
            "sync": Boolean(Number($('#' + particleID).attr('data-sectionparticlesizeanimsync')))
          }
        },
        "lineLinked": {
          "enable": Boolean(Number($('#' + particleID).attr('data-sectionparticlelinelinked'))),
          "distance": $('#' + particleID).attr('data-sectionparticlelinedistance'),
          "color": $('#' + particleID).attr('data-sectionparticlelinecolor'),
          "opacity": $('#' + particleID).attr('data-sectionparticlelineopacity'),
          "width": $('#' + particleID).attr('data-sectionparticlelinewidth')
        },
        "move": {
          "enable": Boolean(Number($('#' + particleID).attr('data-sectionparticlemoveenable'))),
          "speed": $('#' + particleID).attr('data-sectionparticlemovespeed'),
          "direction": $('#' + particleID).attr('data-sectionparticlemovedirection'),
          "bounce": bounce,
          "random": Boolean(Number($('#' + particleID).attr('data-sectionparticlemoverandom'))),
          "straight": Boolean(Number($('#' + particleID).attr('data-sectionparticlemovestraight'))),
          "outMode": $('#' + particleID).attr('data-sectionparticlemoveoutmode'),
          "attract": {
            "enable": Boolean(Number($('#' + particleID).attr('data-sectionparticlemoveattract'))),
            "rotateX": $('#' + particleID).attr('data-sectionparticleattractrotatex'),
            "rotateY": $('#' + particleID).attr('data-sectionparticleattractrotatey')
          }
        }
      },
      "interactivity": {
        "detectsOn": "canvas",
        "events": {
          "onHover": {
            "enable": Boolean(Number($('#' + particleID).attr('data-sectionparticlehover'))),
            "mode": $('#' + particleID).attr('data-sectionparticlehovermode')
          },
          "onClick": {
            "enable": Boolean(Number($('#' + particleID).attr('data-sectionparticleclick'))),
            "mode": $('#' + particleID).attr('data-sectionparticleclickmode')
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": $('#' + particleID).attr('data-sectionparticlegrabdistance'),
            "lineLinked": {
              "opacity": $('#' + particleID).attr('data-sectionparticlegrabopacity')
            }
          },
          "bubble": {
            "distance": $('#' + particleID).attr('data-sectionparticlebubbledistance'),
            "size": $('#' + particleID).attr('data-sectionparticlebubblesize'),
            "duration": $('#' + particleID).attr('data-sectionparticlebubbleduration'),
            "opacity": $('#' + particleID).attr('data-sectionparticlebubbleopacity'),
            "speed": 3
          },
          "repulse": {
            "distance": $('#' + particleID).attr('data-sectionparticlerepulse'),
            "duration": 0.4
          },
          "push": {
            "quantity": 4
          },
          "remove": {
            "quantity": 2
          }
        }
      },
      "detectRetina": true
    }
    var height = $('#' + particleID).height();
    var width = $('#' + particleID).width();
    if (typeof (window.pJSDom[particleID]) != 'undefined')
      window.pJSDom[particleID].pJS.fn.vendors.destroypJS();
      tsParticles.load(particleID, particlesObj);
    var particlesCanvas = $('#' + particleID + ' canvas.tsparticles-canvas-el');
    $(particlesCanvas).css({
      'width': width + 'px',
      'height': height + 'px',
      'z-index': $('#' + particleID).attr('data-sectionparticlezindex')
    });

  }
});
function random(min, max) {
  return (Math.random() * (max - min)) + min;
}

function animator(whatElement, type, start, reverse, callFunction, duration, easeCode, scrub,end,debug) {
  Swal.fire({
    title: '<strong>Go to Premium</strong>',
    icon: 'info',
    html:
      'Animations functions are only available with the Premium version !',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText:
    '<a href="//demo-css-magician-wp.presta-magician.com/accordionwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
  });

}
function counterWidget(whatElement) {
  jQuery('#' + whatElement).css('opacity', 1);
 //  var countercustomid = jQuery('#' + whatElement + ' .counterCustomWidget_counterCustom').closest('.counterCustomWidget').attr('id');
  clock[whatElement].start();
}


function getCounterSVGWidth(counterid, divider) {
  var height = jQuery('#' + counterid).height();
  var width = jQuery('#' + counterid).width();
  if (width < height)
    height = width;
  return height / divider;
}