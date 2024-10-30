jQuery(document).ready(
    function ($) {

        addWidgetButton('productcard', 'vmutc-create-addProductCard', 'far fa-address-card', 'Product Card','pro');

        $(document).on('click', '#vmutc-create-addProductCard', function () {
            Swal.fire({
                title: '<strong>Product Card Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/productcardwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });

     

    });