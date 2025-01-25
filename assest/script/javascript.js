
$(document).ready(function(){
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
      });
      $('.cardslider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
      $('.slidercenter').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    });
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

// Select the navbar
// const navbar = document.querySelector('.navbar-header');

// window.addEventListener('scroll', () => {
//   if (window.scrollY >= window.innerHeight) {
//     navbar.classList.add('show'); 
//     navbar.style.position = 'fixed';
//     navbar.style.top = '0';
//     navbar.style.left = '0';
//     navbar.style.width = '100%';
//     navbar.style.minHeight = '90px'; 
//     navbar.style.zIndex = '1000'; 
//   } else {
//     navbar.classList.remove('show'); 
//     navbar.style.position = 'relative';
//   }
// });

