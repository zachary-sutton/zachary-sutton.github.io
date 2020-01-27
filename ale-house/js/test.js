$(document).ready(function() {
	//home
	$("#home-nav").click(function(){

        alert("hello");

	    function scrollToAnchor(aid){
		    var aTag = $("[id='"+ aid +"']");
		    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	scrollToAnchor('home');
	});

	//about
	$("#about-nav").click(function(){
	    function scrollToAnchor(aid){
		    var aTag = $("[name='"+ aid +"']");
		    $('html,body').animate({scrollTop: aTag.offset().top -100},'slow');
	}

	scrollToAnchor('about-section');
	});

	//skills
	$("#skills-nav").click(function(){
	    function scrollToAnchor(aid){
		    var aTag = $("[name='"+ aid +"']");
		    $('html,body').animate({scrollTop: aTag.offset().top -70},'slow');
	}

	scrollToAnchor('skills-section');
	});

	//projects
	$("#projects-nav").click(function(){
	    function scrollToAnchor(aid){
		    var aTag = $("[name='"+ aid +"']");
		    $('html,body').animate({scrollTop: aTag.offset().top -90},'slow');
	}

	scrollToAnchor('projects-section');
	});

	//contact
	$("#contact-nav").click(function(){
	    function scrollToAnchor(aid){
		    var aTag = $("[name='"+ aid +"']");
		    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	scrollToAnchor('contact-section');
	});
});
