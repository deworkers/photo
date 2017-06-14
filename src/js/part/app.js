$(document).ready(function() {
    

    var scrollTo = function(pos) {
        var pos;
        $('html,body').animate({scrollTop:pos}, 1000);
        return false;
    }

    $('.j-scroll-to').click(function(event) {
        event.preventDefault(); 
        var div = $(this).attr('href');
        var toPos = $(div).offset().top;
        scrollTo(toPos);
    });

    /*Модальные окна*/
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal'); 
    var close = $('.modal__close'); 
    var modal = $('.modal'); 

    // для открытия модалки нужна ссылка вида <a href="#name"></a> и класс "open_modal"
    // будет открыта модалка с id="name"
    open_modal.click( function(event){
        modal.fadeOut(200);
        event.preventDefault(); 
        var div = $(this).attr('href'); 
        overlay.fadeIn(400);
        $(div).fadeIn(400);
        $('html, body').addClass('j-noScroll');
        baseBoxHeight = $('.mobile-menu__right').height();
    });

    close.click(function() {
        modal.fadeOut(200);
        overlay.fadeOut(200);
        $('html, body').removeClass('j-noScroll');
    });

    overlay.click(function(event) {
        if ( $( event.target ).attr('id') == 'overlay' ) {
            $(this).fadeOut(200);
            modal.fadeOut(200);
            $('html, body').removeClass('j-noScroll');
        }
    });

    /*селект*/
    $('.select').click(function(e) {
        if ( !$(this).hasClass('j-open') ) {
            e.stopPropagation();
            $(this).addClass('j-open');
            $('.select-list').hide();
            $('.select').not(this).removeClass('j-open');
            $(this).find('.select-list').slideDown(200);
        } else {
            $(this).find('.select-list').slideUp(200);
            $(this).removeClass('j-open');
        }
    });


    // подстановка значения по умолчанию
    $('.select').each(function() {
        var val = $(this).find('.select-default').text();
        $(this).find('.select-default').addClass('selected');
        console.log(val);
        $(this).find('input').val(val);
    })

    $('body').click(function() {
        $('.select-list').slideUp(200);
        $('.select').removeClass('j-open');
    });

    $('.select-list__one').click(function(e) {
        e.stopPropagation();
        var val = $(this).text();
        $('.select').removeClass('j-open');
        $(this).parents('.select').find('input').val(val);
        $(this).parents('.select').find('.select-list').slideUp(200);
        $(this).parents('.select-list').find('.select-list__one').removeClass('selected');
        $(this).addClass('selected');
    });

    

    $('.mobile-menu-open').on('click', function() {
        overlay.fadeIn(100);
        $('.mobile-menu').show();
        setTimeout(function() {
            $('.mobile-menu').css('right','0');
        }, 100);
        $('html, body').addClass('j-noScroll');
    });

    $('.menu-one ul, .mobile-menu-one ul').each(function() {
        $(this).find('li').each(function() {
            if ( $(this).children('ul').length > 0 ) {
                $(this).addClass('j-submenu');
            }
        });
    });

    $('.mobile-menu-one').each(function() {
        if ( $(this).children('ul').length > 0 ) {
                $(this).addClass('j-submenu');
        }
    });


    $('.j-submenu a').on('click', function() {
        $(this).next('ul').show().addClass('j-open');
    });

    $('.mobile-menu__close').on('click', function() {
        $('.mobile-menu').css('right','-100%');
        $('.j-open').hide().removeClass('j-open');
        overlay.fadeOut(200);
        $('html, body').removeClass('j-noScroll');
    });

    $('.mobile-menu .j-submenu > ul').each(function() {
        var title = $(this).prev().text();
        var html = '<div class="mobile-submenu-top"><div class="mobile-menu-back"></div>'+title+'</div><div class="mobile-menu__close"></div>'
        $(this).prepend(html);
        $('.mobile-menu__close').on('click', function() {
            $('.mobile-menu').css('right','-100%');
            $('.j-open').hide().removeClass('j-open');
            overlay.fadeOut(200);
            $('html, body').removeClass('j-noScroll');
        });
    });

    $('.mobile-menu-back').on('click', function() {
        $(this).parent().parent('.j-open').hide();
    });

    $('.services-item-bottom__title').hyphenate();




    $(window).resize(function() {
        if ( $(window).width() > 720 ) {
            $('.swiper-slide').not('.main-slider-one,.services-item').css('width','auto')
        }

        if ( $(window).width() < 1024 && $(window).width() > 720 ) {
            $('.card-photo img').css('width','100%')
        }

        if ( $(window).width() < 720 ) {
            $('.results-list-inn').each(function() {

                if ( $(this).find('a').hasClass('services-item') ) {
                    $(this).parents('.results-list').css('marginTop','60px');
                    $(this).find('.results-more').css('marginTop','20px');
                }

                if ( $(this).find('a').hasClass('product-item') ) {
                    $(this).parents('.results-list').css('marginTop','100px');
                    $(this).find('.results-more').css('marginTop','-10px');
                }
            });
        } else {
            $('.results-list').css('marginTop','100px');
            $('.results-more').css('marginTop','0px');
        }

    })

    $('.product-item').each(function() {
        $(this).wrap('<div class="product-item-wrap"></div>')
    });

    if ( $(window).width() < 1024 ) {
        $('.side').on('click',function(event) {
            if ( !$(this).hasClass('opened') ) {
                $(this).addClass('opened');
            }
        });
        $('.side-title').on('click',function(event) {
            event.stopPropagation();
            $('.side').toggleClass('opened');
        });

    }


});