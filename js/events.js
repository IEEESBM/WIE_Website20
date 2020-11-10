$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $(".navbar-dark").css("background" , "#F0D1F0");
            $(".navlogo").css("height" , "50");
            $(".navlogo").css("width" , "50");
            $(".navbar-brand").css("margin-top" , "auto");
            $(".navbar-nav").css("margin-top" , "auto");
            $(".navbar-toggler").css("margin-top" , "0px");
        }

        else{
            // $(".navbar-dark").css("background" , "#333");
            $(".navbar-dark").css("background", "none"); 
            $(".navlogo").css("height" , "90");
            $(".navlogo").css("width" , "90");
            $(".navbar-brand").css("margin-top" , "-8px");
            $(".navbar-nav").css("margin-top" , "-32px");
            $(".navbar-toggler").css("margin-top" , "-32px");
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

