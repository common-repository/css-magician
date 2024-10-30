jQuery(document).ready(
    function ($) {      

        addWidgetButton('svg', 'vmutc-create-addsvg', 'fas fa-bezier-curve', 'SVG','pro');

        $(document).on('click', '#vmutc-create-addsvg', function () {
            Swal.fire({
                title: '<strong>SVG Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/svgwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });

      
    });