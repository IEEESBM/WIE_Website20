$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
          $(".navbar-dark").css("background" , "#F0D1F0");
        }
  
        else{
            // $(".navbar-dark").css("background" , "#333");
            $(".navbar-dark").css("background", "none");  	
        }
    })
})


function navMobile() {
    var divCSS = window.getComputedStyle(document.getElementById('navcolormobile'));
    var bg = divCSS.getPropertyValue('background-color');
    var scroll = $(window).scrollTop();

    if(bg == "rgba(0, 0, 0, 0)" && scroll <= 200) {
        document.getElementById('navcolormobile').style.background = "rgb(240, 209, 240)"
    }
    else if (bg == "rgb(240, 209, 240)" && scroll <= 200) {
        document.getElementById('navcolormobile').style.background = "rgba(0, 0, 0, 0)"
    }
}



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