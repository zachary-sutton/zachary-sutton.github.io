$(document).ready(function() {

    //about scroll animate
    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if (scroll >= 400) {

            $("#about").addClass("animated pulse");
        } 

        else {
        }
    });

    //skills scroll animate
   /* $(window).scroll(function() {

        var scrollSkills = $(window).scrollTop();

        if (scrollSkills >= 1700) {

            $(".skills").addClass("animated bounce");
        } 

        else {
        }
    });*/
    
    //about icons animation
    //responsive
    $("#responsive").mouseover(function(){
       $("#responsive").addClass("animated jello hover-color");
    });

    $("#responsive").mouseout(function(){
       $("#responsive").removeClass("animated jello hover-color");
    });

    //fast
    $("#fast").mouseover(function(){
       $("#fast").addClass("animated tada hover-color");
    });

    $("#fast").mouseout(function(){
       $("#fast").removeClass("animated tada hover-color");
    });

    //intuitive
    $("#intuitive").mouseover(function(){
       $("#intuitive").addClass("animated rubberBand hover-color");
    });

    $("#intuitive").mouseout(function(){
       $("#intuitive").removeClass("animated rubberBand hover-color");
    });

    //love
    $("#love").mouseover(function(){
       $("#love").addClass("animated heartBeat hover-color");
    });

    $("#love").mouseout(function(){
       $("#love").removeClass("animated heartBeat hover-color");
    });

    //skills icons animate
    //html5
    $("#html-skill").mouseover(function(){
       $("#html-skill").addClass("animated bounce");
    });

    $("#html-skill").mouseout(function(){
       $("#html-skill").removeClass("animated bounce");
    });

    //css3
    $("#css-skill").mouseover(function(){
       $("#css-skill").addClass("animated bounce");
    });

    $("#css-skill").mouseout(function(){
       $("#css-skill").removeClass("animated bounce");
    });

    //boostrap
    $("#bootstrap-skill").mouseover(function(){
       $("#bootstrap-skill").addClass("animated bounce");
    });

    $("#bootstrap-skill").mouseout(function(){
       $("#bootstrap-skill").removeClass("animated bounce");
    });

    //js
    $("#js-skill").mouseover(function(){
       $("#js-skill").addClass("animated bounce");
    });

    $("#js-skill").mouseout(function(){
       $("#js-skill").removeClass("animated bounce");
    });

    //sql
    $("#sql-skill").mouseover(function(){
       $("#sql-skill").addClass("animated bounce");
    });

    $("#sql-skill").mouseout(function(){
       $("#sql-skill").removeClass("animated bounce");
    });

    //php
    $("#php-skill").mouseover(function(){
       $("#php-skill").addClass("animated bounce");
    });

    $("#php-skill").mouseout(function(){
       $("#php-skill").removeClass("animated bounce");
    });

    //react
    $("#react-skill").mouseover(function(){
       $("#react-skill").addClass("animated bounce");
    });

    $("#react-skill").mouseout(function(){
       $("#react-skill").removeClass("animated bounce");
    });

    //adobe
    $("#adobe-skill").mouseover(function(){
       $("#adobe-skill").addClass("animated bounce");
    });

    $("#adobe-skill").mouseout(function(){
       $("#adobe-skill").removeClass("animated bounce");
    });
});
