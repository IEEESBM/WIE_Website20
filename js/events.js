$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
          $(".navbar-dark").css("background" , "linear-gradient(135deg, #4A0C59 4.2%, #CB42B5 100%)");
        }
  
        else{
            // $(".navbar-dark").css("background" , "#333");
            $(".navbar-dark").css("background", "none");  	
        }
    })
})

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});