jQuery(document).ready(
    function ($) {
        addWidgetButton('flipbox', 'vmutc-create-addFlipbox', 'fas fa-sync-alt', 'Flipbox','pro');
        $(document).on('click', '#vmutc-create-addFlipbox', function () {
            Swal.fire({
                title: '<strong>FlipBox Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/flipboxwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });
      
    });