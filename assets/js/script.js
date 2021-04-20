/* Author: 

*/

$(document).ready(function(){
    $('.hamburger').click(function () {
		$('.hamburger').toggleClass('active');
		$('.menu-right').toggleClass('active');
		$('.menu-left').toggleClass('active');
    })

    $('.banner-slider').slick({
		autoplay: false,
		autoplaySpeed: 2000,
    });
    
    $(".footer-btn").click(function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});



















