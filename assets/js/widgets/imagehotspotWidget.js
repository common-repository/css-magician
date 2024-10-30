 // global vars
 var spotId = 0;
 var imagehotspotForm = jQuery('#toolTipGenerator form');
 var hotSpots = [];
 var selectedSpot;
 jQuery(document).ready(
     function ($) {

         addWidgetButton('imagehotspot', 'vmutc-create-addimagehotspot', 'fas fa-map-marker-alt', 'Image Hot Spot','pro');
         $(document).on('click', '#vmutc-create-addimagehotspot', function () {
            Swal.fire({
                title: '<strong>IMage Hot Spot Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/imagehotspotwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
         });
        
     });