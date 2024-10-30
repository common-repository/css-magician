jQuery(document).ready(
    function ($) {
        //	var counterUp = window.counterUp["default"]; // import counterUp 
        addWidgetButton('counterup', 'vmutc-create-addCounterUp', 'fas fa-sort-numeric-down-alt', 'Counter Up','pro');
        $(document).on('click', '#vmutc-create-addCounterUp', function () {
            Swal.fire({
                title: '<strong>Counter Up Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/counterupwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });     
    
    });