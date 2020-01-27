$( document ).ready(function() {
    //music card slide
	$("#music-card").mouseover(function(){
		$("#music-info").slideDown("slow");
	});

	$("#music-card").mouseleave(function(){
		$("#music-info").slideUp("slow");
	});

    //food card slide
	$("#food-card").mouseover(function(){
		$("#food-info").slideDown("slow");
	});

	$("#food-card").mouseleave(function(){
		$("#food-info").slideUp("slow");
	});

	//games card slide
	$("#games-card").mouseover(function(){
		$("#games-info").slideDown("slow");
	});

	$("#games-card").mouseleave(function(){
		$("#games-info").slideUp("slow");
	});

	//wifi card slide
	$("#wifi-card").mouseover(function(){
		$("#wifi-info").slideDown("slow");
	});

	$("#wifi-card").mouseleave(function(){
		$("#wifi-info").slideUp("slow");
	});	

	//comedy card slide
	$("#comedy-card").mouseover(function(){
		$("#comedy-info").slideDown("slow");
	});

	$("#comedy-card").mouseleave(function(){
		$("#comedy-info").slideUp("slow");
	});	

	//parking card slide
	$("#parking-card").mouseover(function(){
		$("#parking-info").slideDown("slow");
	});

	$("#parking-card").mouseleave(function(){
		$("#parking-info").slideUp("slow");
	});	
});