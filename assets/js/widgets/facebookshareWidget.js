jQuery(document).ready(
    function ($) {
        addWidgetButton('facebookshare', 'vmutc-create-addFacebookshare', 'fab fa-facebook', 'Facebook Share','pro');
        $(document).on('click', '#vmutc-create-addFacebookshare', function () {
            Swal.fire({
                title: '<strong>Facebook Share Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/facebooksharewidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });
       
    });