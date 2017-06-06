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

    /*календарь*/
    $( ".date input" ).datepicker( $.datepicker.regional[ "ru" ] );

    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
        'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
        'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    var mainSlider = new Swiper ('.slider-box', {
        loop: true,
        effect: 'coverflow',
        coverflow: {
          rotate: 90,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows : false
        },
        slidesPerView: 1, 
        paginationClickable: true,
        spaceBetween: 10,
        nextButton: '.slider-next',
        prevButton: '.slider-prev',
        pagination: '.swiper-pagination'
    });


    var servicesSlider = new Swiper ('.services-one', {
        // Optional parameters
        loop: false,
        breakpoints: {
            360: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            760: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
            },
            1380: {
                slidesPerView: 5, 
            },
            1920: {
                slidesPerView: 7,
            }
        },
        paginationClickable: true,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });       

    var servicesSliderRow = new Swiper ('.services-one-row', {
        loop: false,
        slidesPerColumn: 2,
        breakpoints: {
            360: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            760: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
            },
            1380: {
                slidesPerView: 5, 
            },
            1920: {
                slidesPerView: 7,
            }
        },
        paginationClickable: true,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    }); 

    var personalSlider = new Swiper ('.personal-inn', {
        // Optional parameters
        loop: false,
        breakpoints: {
            360: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            760: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
            },
            1380: {
                slidesPerView: 5, 
            },
            1920: {
                slidesPerView: 7,
            }
        },
        paginationClickable: true,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: '.swiper-pagination'
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


    var newsSlider = new Swiper ('.news-one-gall', {
        // Optional parameters
        loop: false,
        paginationClickable: true,
        centeredSlides: true,
        nextButton: '.button-next',
        prevButton: '.button-prev',
        breakpoints: {
            760: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1920: {
                slidesPerView: 'auto',
                spaceBetween: 10,
            }
        }
    });

    var cardSlider = new Swiper ('.card-photo', {
        // Optional parameters
        loop: false,
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: 1,
        breakpoints: {
            760: {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
            },
            1920: {
                    slidesPerView: 1,
            }
        },
        pagination: '.swiper-pagination'
    });


    $(window).resize(function() {
        if ( $(window).width() > 720 ) {
            $('.swiper-slide').css('width','auto')
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