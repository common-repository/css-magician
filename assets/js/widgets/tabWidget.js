jQuery(document).ready(
    function ($) {

        addWidgetButton('tab', 'vmutc-create-addTab', 'far fa-folder', 'Tab','pro');

        $(document).on('click', '#vmutc-create-addTab', function () {
            Swal.fire({
                title: '<strong>Tab Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/tabwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });

     
    });