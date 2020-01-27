//scroll animate
$(document).ready(function() {

	//about
	$(".to-top-btn").click(function(){
	    function scrollToAnchor(aid){
		    var aTag = $("[name='"+ aid +"']");
		    $('html,body').animate({scrollTop: aTag.offset().top -50},'slow');
	}

	scrollToAnchor('nav-section');
	});	

	//about
	$("#about-nav").click(function(){
	    function scrollToAnchor(aid){
		    var aTag = $("[name='"+ aid +"']");
		    $('html,body').animate({scrollTop: aTag.offset().top -50},'slow');
	}

	scrollToAnchor('about-section');
	});

	//cuisines
	$("#cuisines-nav").click(function(){
	    function scrollToAnchor(aid){
		    var aTag = $("[name='"+ aid +"']");
		    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	scrollToAnchor('cuisines-section');
	});

	//menu
	$("#menu-nav").click(function(){
	    function scrollToAnchor(aid){
		    var aTag = $("[name='"+ aid +"']");
		    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	scrollToAnchor('menu-section');
	});

	//reviews
	$("#reviews-nav").click(function(){
	    function scrollToAnchor(aid){
		    var aTag = $("[name='"+ aid +"']");
		    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	scrollToAnchor('reviews-section');
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
