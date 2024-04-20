$(function () {

    $('#masonry').slick({
        slidesToShow: 3,
        rows: 2,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: false,
        variableWidth: true,
        adaptiveHeight: true,
        waitForAnimate: false,
        speed: 1000,
        easing: 'ease',
        responsive: [{
                breakpoint: 994,
                settings: {
                    rows: 3,
                },
            },
            {
                breakpoint: 609,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                    dots: true,
                    fade: true,
                    variableWidth: false,
                },
            }
        ],
    });


    $('#testimonial__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 0,
        arrows: false,
        swipeToSlide: false,
        touchMove: false,
        draggable: false,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '#testimonials__items',
        autoplay: false,
        speed: 1000,
        easing: 'ease',
        waitForAnimate: false,
        responsive: [{
                breakpoint: 993,
                settings: {
                    swipe: true,
                    touchMove: true,
                }
            },
            {
                breakpoint: 609,
                settings: {
                    dots: true,
                    pauseOnDotsHover: true,
                    adaptiveHeight: true,
                    arrows: false,
                }
            }
        ]
    });

    $('#testimonials__items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 0,
        infinite: true,
        prevArrow: $('#testimonial__prev'),
        nextArrow: $('#testimonial__next'),
        asNavFor: '#testimonial__slider',
        focusOnSelect: true,
        variableWidth: false,
        adaptiveHeight: true,
        autoplay: false,
        speed: 1000,
        easing: 'ease',
        touchThreshold: 10,
        waitForAnimate: false,
        responsive: [{
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 609,
                settings: {
                    arrows: false,
                    asNavFor: false,
                    autoplay: false,
                }
            },
        ]
    });
});
