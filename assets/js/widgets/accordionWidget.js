(function ($) {
    $(document).ready(
        function () {
            addWidgetButton('accordion', 'vmutc-create-addAccordion', 'fas fa-align-justify', 'Accordion','pro');

            $(document).on('click', '#vmutc-create-addAccordion', function () {

                Swal.fire({
                    title: '<strong>Accordion Widget</strong>',
                    icon: 'info',
                    html:
                      'Only available with the Premium version !',
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                    '<a href="//demo-css-magician-wp.presta-magician.com/accordionwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
                  });
              
            });
      
        });

})(jQuery);