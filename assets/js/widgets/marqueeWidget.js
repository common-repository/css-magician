jQuery(document).ready(
    function ($) {

        addWidgetButton('marquee', 'vmutc-create-addMarquee', 'fas fa-text-width', 'Scrolling Text','pro');

        $(document).on('click', '#vmutc-create-addMarquee', function () {
            Swal.fire({
                title: '<strong>Marquee Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/marqueewidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });

       

    });