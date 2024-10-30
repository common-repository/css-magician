jQuery(document).ready(
    function ($) {
        addWidgetButton('circularMenu', 'vmutc-create-addCircularMenu', 'far fa-futbol', 'Circular Menu','pro');
     
       
        $(document).on('click', '#vmutc-create-addCircularMenu', function () {
            Swal.fire({
                title: '<strong>Circular Menu Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/circularmenuwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });
      
        }
    );