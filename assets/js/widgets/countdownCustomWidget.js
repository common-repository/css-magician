jQuery(document).ready(
    function ($) {
        addWidgetButton('countdowncustom', 'vmutc-create-addCountdownCustom', 'fas fa-sort-numeric-down-alt', 'Customized CountDown','pro');
        $(document).on('click', '#vmutc-create-addCountdownCustom', function () {
            Swal.fire({
                title: '<strong>Customized Coundown Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/customizedcountdownwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });
      
        }
    );