jQuery(document).ready(
    function ($) {
        addWidgetButton('counter', 'vmutc-create-addCounter', 'fas fa-tachometer-alt', 'SVG Counter','pro');
        $(document).on('click', '#vmutc-create-addCounter', function () {
            Swal.fire({
                title: '<strong>SVG Counter Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/svgcounterwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });
      
    });