$(document).ready(function() {  

  /* Scroll on buttons */

 	$('.jss--scroll-to-mood').click(function (e) {
       $('html, body').animate({scrollTop: $('.js--section-mood').offset().top},1000);
       e.stopPropagation(); 
    }); 
    
    $('.jss--scroll-to-Testimonials').click(function (e) {
       $('html, body').animate({scrollTop: $('.js--section-Testimonials').offset().top},1000);
       e.stopPropagation(); 
    }); 
    
    $('.jss--scroll-to-Get-started').click(function (e) {
       $('html, body').animate({scrollTop: $('.js--section-Get-started').offset().top},1000);
       e.stopPropagation(); 
    }); 

    $('.jss--scroll-to-offer').click(function (e) {
       $('html, body').animate({scrollTop: $('.js--section-offer').offset().top},1000);
       e.stopPropagation(); 
    }); 

    $('.jss--scroll-to-form').click(function (e) {
       $('html, body').animate({scrollTop: $('.js--section-form').offset().top},1000);
       e.stopPropagation(); 
    }); 

    $('.jss--scroll-to-Girlfriend').click(function (e) {
       $('html, body').animate({scrollTop: $('.js--section-Girlfriend').offset().top},1000);
       e.stopPropagation(); 
    }); 

/*Animations on scroll*/
	
	// var $dipper = $('.dipper');

	// $dipper.waypoint(function () {
	// 	$dipper.addClass('js-dipper-animate');
	// }, {offset:'50%'});


    // $('.jswp1').waypoint (function(direction) {
    //    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    // }, {
    //     offset:'50%'
    // }); 

  /* Animate pictures */

  $("#cf_onclick").click(function() {
  $("#cf2 img.top").toggleClass("transparent");
});
});