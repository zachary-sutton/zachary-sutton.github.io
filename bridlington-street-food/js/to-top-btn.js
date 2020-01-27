$( document ).ready(function() {

	$(".to-top-btn").hide();

	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 1) {
			$('.to-top-btn').fadeIn(1000);
		} else {
			$('.to-top-btn').fadeOut();
		}
	});

});