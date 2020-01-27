//scrollspy offset

//sticky navbar
$(document).ready(function() {
	// grab the initial top offset of the navigation 
		var stickyNavTop = $('.sticky-nav').offset().top;
		
		// our function that decides weather the navigation bar should have "fixed" css position or not.
		var stickyNav = function(){
	    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
	         
	    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
	    // otherwise change it back to relative
	    if (scrollTop +97 > stickyNavTop) { 
	        $('.sticky-nav').addClass('sticky');
	    } else {
	        $('.sticky-nav').removeClass('sticky'); 
	    }
	};

	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});
});


//scroll animate
$(document).ready(function() {
	//home
	$("#home-nav").click(function(){
	    function scrollToAnchor(aid){
		    var aTag = $("[name='"+ aid +"']");
		    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	scrollToAnchor('landing-section');
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
