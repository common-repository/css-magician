jQuery(document).ready(
    function ($) {

        addWidgetButton('imagetext', 'vmutc-create-addimagetext', 'fas fa-image', 'Image/Text','pro');
        $(document).on('click', '#vmutc-create-addimagetext', function () {
            Swal.fire({
                title: '<strong>Image/Text Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/imagetextwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });
     
    });