$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 50) { 
        $(".navbar-light").css("background-color", "transparent","color","white"); 
      } else {
        $(".navbar-light").css("background-color", "rgba(255, 174, 0, 0.89)"); 

      }
    });
  });