 $(function () {

     $('.countup').counterUp({
         delay: 10,
         time: 2000
     });
     $('.slick_slide').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrow:true,
         nextArrow:'.right_arrow',
         prevArrow:'.left_arrow'
     });

 });

 //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });


 //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    
    var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');
    
    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
        });
        
        var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');
        
        subMenuToggler.on('click', function() {
            $(this).parent().parent().children('.sub-menu').slideToggle();
            return false
        });
        
    }




var scroll = new SmoothScroll('a[href*="#"]',{
  speed: 300,
                              
});


//	back-to-top
$(window).on('scroll', function(event) {
   if($(this).scrollTop() > 800){
       $('.back-to-top').fadeIn(200)
   } else{
       $('.back-to-top').fadeOut(200)
   }
});


//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
    
    
    
});


