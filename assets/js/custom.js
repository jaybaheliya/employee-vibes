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

$('.textFade').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
    // fade: true,
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

// $('.features-slide').slick({
//     infinite: true,
//     slidesToShow: 3,
//     arrows: false,
//     autoplay: true,
//     speed: 6000,
//     cssEase: 'linear',
//     autoplaySpeed: 0,
//     pauseOnHover: true,
//     // autoplaySpeed: 3000,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//             }
//         }
//     ]
// });

// $('.features-slide-rtl').slick({
//     infinite: true,
//     slidesToShow: 3,
//     arrows: false,
//     autoplay: true,
//     rtl: true,
//     speed: 6000,
//     cssEase: 'linear',
//     autoplaySpeed: 0,
//     pauseOnHover: true,
//     // autoplaySpeed: 3000,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//             }
//         }
//     ]
// });



var i = 0,
    j = document.querySelectorAll(".partner-item").length;

function blink(i) {
    new Promise(function (resolve, reject) {
        x = setTimeout(function () {
            document.querySelectorAll(".partner-item")[i].classList.add("filterRemoved");
            resolve("added");
        }, 800)
    }).then(function (a) {
        new Promise(function (res, rej) {
            setTimeout(function () {
                clearInterval(x);
                document.querySelectorAll(".partner-item")[i].classList.remove("filterRemoved");
                res("deleted");
            }, 800)
        }).then(function (a) {
            i++;
            if (i < j) {
                blink(i);
            } else {
                i = 0;
                blink(i);
            }
        });

    });
}
blink(i);
