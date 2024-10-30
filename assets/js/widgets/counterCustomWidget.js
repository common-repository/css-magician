jQuery(document).ready(
    function ($) {
        addWidgetButton('countercustom', 'vmutc-create-addCounterCustom', 'fas fa-sort-numeric-down-alt', 'Customized Counter','pro');
        $(document).on('click', '#vmutc-create-addCounterCustom', function () {
            Swal.fire({
                title: '<strong>Customized Counter Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/customizedcounterwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });
       
        }
 );