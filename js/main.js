$(document).ready(function () {
    //some logic for slide down food menu

    if($(document).width()<992){
        $('.food-inner').on('click', function () {
            if($('.food-inner-menu').is(':hidden')){
                $('.food-inner-menu').slideDown();
            }else{
                $('.food-inner-menu').slideUp();
            }
        });
        $('.drinks-inner').on('click', function () {
            if($('.drinks-inner-menu').is(':hidden')){
                $('.drinks-inner-menu').slideDown();
            }else{
                $('.drinks-inner-menu').slideUp();
            }
        });
    }else{
        $('.food-inner').on('click', function () {
            if($('.food-inner-menu').is(':hidden')){
                $('.food-inner-menu').insertBefore('#contacts').slideDown();
            }else{
                $('.food-inner-menu').insertBefore('#contacts').slideUp();
            }
        });
        $('.drinks-inner').on('click', function () {
            if($('.drinks-inner-menu').is(':hidden')){
                $('.drinks-inner-menu').insertBefore('#contacts').slideDown();
            }else{
                $('.drinks-inner-menu').insertBefore('#contacts').slideUp();
            }
        });
    }
    $('.fa-close').on('click', function () {
        var parElem=$(this).parent();
        $(parElem).slideUp();
    });
});