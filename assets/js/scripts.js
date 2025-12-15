
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
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
});
		