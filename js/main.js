$(document).ready(function () {
    var foodMenu = $('.food-inner-menu');
    var drinksMenu = $('.drinks-inner-menu');
    var closeBtn=$('.close-btn');

    //page image parallax
    $('.page').parallax({
        imageSrc: './img/bg1.jpg',
        iosFix: true,
        androidFix: true
    });
    //some logic for slide down drinks and food menu
    if ($(document).width() < 768) {
        $('.food-inner').on('click', function () {
            if (foodMenu.is(':hidden')) {
                foodMenu.append('<div class="close-btn"><i class="fa fa-close"></i><p>свернуть</p></div>').slideDown();
            } else {
                foodMenu.slideUp(function () {
                    closeBtn.remove();
                });
            }
        });
        $('.drinks-inner').on('click', function () {
            if (drinksMenu.is(':hidden')) {
                drinksMenu.append('<div class="close-btn"><i class="fa fa-close"></i><p>свернуть</p></div>').slideDown();
            } else {
                drinksMenu.slideUp(function () {
                    closeBtn.remove();
                });
            }
        });
    } else {
        $('.food-inner').on('click', function () {
            if (foodMenu.is(':hidden')) {
                foodMenu.append('<div class="close-btn"><i class="fa fa-close"></i><p>свернуть</p></div>').insertBefore('#contacts').slideDown();
            } else {
                foodMenu.slideUp(function () {
                    closeBtn.remove();
                });
            }
        });
        $('.drinks-inner').on('click', function () {
            if (drinksMenu.is(':hidden')) {
                drinksMenu.append('<div class="close-btn"><i class="fa fa-close"></i><p>свернуть</p></div>').insertBefore('#contacts').slideDown();
            } else {
                drinksMenu.slideUp(function () {
                    closeBtn.remove();
                });
            }
        });
    }
        //close button menus click
    $(document).on('click', '.close-btn', function () {
        var parElem = $(this).parent();
        $(parElem).slideUp();
        $(this).remove();
    });
    //end of logic
});