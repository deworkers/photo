$(document).ready(function() {

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
                slidesPerView: 4,
                spaceBetween: 15,
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
        spaceBetween: 0,
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
                slidesPerView: 4,
                spaceBetween: 15,
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
        spaceBetween: 0,
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
            720: {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
            },
            1024: {
                    slidesPerView: 1,
            },
            1920: {
                    slidesPerView: 1,
            }
        },
        pagination: '.swiper-pagination'
    });



    var personalOne = new Swiper ('.personal-more', {
        // Optional parameters
        loop: false,
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: 1,
        hashnav: true,
        hashnavWatchState: true,
        nextButton: '.personal-next',
        prevButton: '.personal-prev',
        paginationType: 'fraction',
        pagination: '.personal-counter'
    });

    $('.personal-one').on('click', function(event) {
        event.preventDefault();
        $('.personal-slider').fadeIn();
        personalOne.update();
        thisId = $(this).data('id')-1;
        personalOne.slideTo(thisId, 300, function(){
            //
        });
    });
});