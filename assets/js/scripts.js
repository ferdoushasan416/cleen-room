
$('.menu-trigger').on('click', function () {
    $(this).toggleClass('active');

    if ($('.hamburger-menu').hasClass('isOpen')) {
        $('.hamburger-menu').removeClass('isOpen');
        $('.menu-overlay').removeClass('active');
    } else {
        $('.hamburger-menu').addClass('isOpen');
        $('.menu-overlay').addClass('active');
    }
});

$('.menu-overlay').on('click', function () {
    $('.hamburger-menu').removeClass('isOpen');
    $('.menu-overlay').removeClass('active');
    $('.menu-trigger').removeClass('active');
});



$('.our-slider-active').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
  centerMode: true,
  centerPadding: '275px',
  dots: true,
  autoplaySpeed: 2000,
    responsive: [
         
      {
        breakpoint: 1400,
        settings: {
         centerPadding: '150px',
        }
      },  
      {
        breakpoint: 992,
        settings: {
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            centerPadding: '50px',
        }
      }
    ]
});
