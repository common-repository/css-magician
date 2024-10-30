jQuery(document).ready(
    function ($) {
        addWidgetButton('flyingCharacters', 'vmutc-create-addflyingCharacters', 'fas fa-text-width', 'Flying Characters','pro');
        $(document).on('click', '#vmutc-create-addflyingCharacters', function () {
            Swal.fire({
                title: '<strong>Flying Caracters Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/flyingcaracterswidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });
      
    });