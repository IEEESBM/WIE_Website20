$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
          $(".navbar-dark").css("background" , "#F0D1F0");
        }
  
        else{
            // $(".navbar-dark").css("background" , "#333");
            $(".navbar-dark").css("background", "none");  	
        }
    })
})