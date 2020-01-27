$(document).ready(function(){

    $("#snaps").hide();
    $("#media").hide();
    $("#soundcloud").hide();
    $("#about").hide();
});

function events(){
    $("#snaps").hide();
    $("#media").hide();
    $("#soundcloud").hide();
    $("#about").hide();
    $("#events").show();
}

function snaps(){
    $("#events").hide();
    $("#media").hide();
    $("#soundcloud").hide();
    $("#about").hide();
    $("#snaps").show();
}

function media(){
    $("#events").hide();
    $("#snaps").hide();
    $("#soundcloud").hide();
    $("#about").hide();
    $("#media").show();
}

function soundcloud(){
    $("#events").hide();
    $("#snaps").hide();
    $("#media").hide();
    $("#about").hide();
    $("#soundcloud").show();
}

function about(){
    $("#events").hide();
    $("#snaps").hide();
    $("#media").hide();
    $("#soundcloud").hide();
    $("#about").show();
}