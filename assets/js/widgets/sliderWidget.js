jQuery(document).ready(
    function ($) {


        addWidgetButton('slider', 'vmutc-create-addswiperSlider', 'far fa-images', 'Slider','pro');

        $(document).on('click', '#vmutc-create-addswiperSlider', function () {
            Swal.fire({
                title: '<strong>Slider Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/sliderwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });     


    });