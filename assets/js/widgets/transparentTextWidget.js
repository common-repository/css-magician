jQuery(document).ready(
    function ($) {


        addWidgetButton('backgroundText', 'vmutc-create-addbackgroundText', 'fas fa-text-width', 'Background Text','pro');

        $(document).on('click', '#vmutc-create-addbackgroundText', function () {
            Swal.fire({
                title: '<strong>Transparent Text Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/transparenttextwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });      

    });