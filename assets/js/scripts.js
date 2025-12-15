//    $(document).ready(function() {
//         // Your jQuery code goes here
//         $('.menu-trigger').on(click,function() {
//             $('.hamburger-menu').addClass('isOpen');
//         });
        
//     });

$('.menu-overlay').on('click', function () {
    $('.hamburger-menu').removeClass('isOpen');
    $('.menu-overlay').removeClass('active');
    $('.menu-trigger').removeClass('active');
});