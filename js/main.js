$(document).ready(function () {

    $('.overlay').css({'height': $(document).height()+'px'});

    $('.page').parallax({
        imageSrc: './img/bg1.jpg',
        iosFix: true,
        androidFix: true
    });
    //some logic for slide down food menu

    if($(document).width()<768){
        $('.food-inner').on('click', function () {
            if($('.food-inner-menu').is(':hidden')){
                $('.food-inner-menu').append('<div class="close-btn"><i class="fa fa-close"></i><p>свернуть</p></div>').slideDown();
            }else{
                $('.food-inner-menu').slideUp(function () {
                    $('.close-btn').remove();
                });
            }
        });
        $('.drinks-inner').on('click', function () {
            if($('.drinks-inner-menu').is(':hidden')){
                $('.drinks-inner-menu').append('<div class="close-btn"><i class="fa fa-close"></i><p>свернуть</p></div>').slideDown();
            }else{
                $('.drinks-inner-menu').slideUp(function () {
                    $('.close-btn').remove();
                });
            }
        });
    }else{
        $('.food-inner').on('click', function () {
            if($('.food-inner-menu').is(':hidden')){
                $('.food-inner-menu').append('<div class="close-btn"><i class="fa fa-close"></i><p>свернуть</p></div>').insertBefore('#contacts').slideDown();
            }else{
                $('.food-inner-menu').slideUp(function () {
                    $('.close-btn').remove();
                });
            }
        });
        $('.drinks-inner').on('click', function () {
            if($('.drinks-inner-menu').is(':hidden')){
                $('.drinks-inner-menu').append('<div class="close-btn"><i class="fa fa-close"></i><p>свернуть</p></div>').insertBefore('#contacts').slideDown();
            }else{
                $('.drinks-inner-menu').slideUp(function(){
                    $('.close-btn').remove();
                });
            }
        });
    }

    $(document).on('click', '.close-btn', function () {
        var parElem=$(this).parent();
        $(parElem).slideUp();
        $(this).remove();
    });
});