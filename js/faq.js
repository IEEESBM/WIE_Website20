$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
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

    if(bg == "rgba(0, 0, 0, 0)" && scroll <= 300) {
        document.getElementById('navcolormobile').style.background = "rgb(240, 209, 240)"
    }
    else if (bg == "rgb(240, 209, 240)" && scroll <= 300) {
        document.getElementById('navcolormobile').style.background = "rgba(0, 0, 0, 0)"
    }
}

    
document.addEventListener("DOMContentLoaded", function(event) { 


var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

});
 
