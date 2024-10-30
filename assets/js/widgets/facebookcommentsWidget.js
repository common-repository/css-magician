jQuery(document).ready(
    function ($) {
        addWidgetButton('facebookcomments', 'vmutc-create-addFacebookcomments', 'fab fa-facebook', 'Facebook Comments','pro');
        $(document).on('click', '#vmutc-create-addFacebookcomments', function () {
            Swal.fire({
                title: '<strong>Facebook Comments Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/facebookcommentswidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });
      
    });