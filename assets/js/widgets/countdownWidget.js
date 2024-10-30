jQuery(document).ready(
    function ($) {
        addWidgetButton('countdown', 'vmutc-create-addCountdown', 'fas fa-sort-numeric-down-alt', 'Simple CountDown','pro');
        $(document).on('click', '#vmutc-create-addCountdown', function () {
            Swal.fire({
                title: '<strong>Simple Coundown Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/simplecountdownwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });
     
        }
    );