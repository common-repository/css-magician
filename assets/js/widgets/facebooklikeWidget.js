jQuery(document).ready(
    function ($) {
        addWidgetButton('facebooklike', 'vmutc-create-addFacebooklike', 'fab fa-facebook', 'Facebook Like','pro');
        $(document).on('click', '#vmutc-create-addFacebooklike', function () {
            Swal.fire({
                title: '<strong>Facebook Like Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/facebboklikewidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });
       
    });