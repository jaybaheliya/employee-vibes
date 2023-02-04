$('.heroSlide-fade').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
});

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.features-slide').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    speed: 6000,
    cssEase: 'linear',
    autoplaySpeed: 0,
    pauseOnHover: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.features-slide-rtl').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    rtl: true,
    speed: 6000,
    cssEase: 'linear',
    autoplaySpeed: 0,
    pauseOnHover: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
