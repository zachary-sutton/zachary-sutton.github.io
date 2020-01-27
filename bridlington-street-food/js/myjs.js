	//tool tip jQuery
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


$(document).ready(function(){

	$(".menu-btn").click(function(){

		$("i.arrow-toggle").toggleClass("fa-chevron-down");
		$("i.arrow-toggle").toggleClass("fa-chevron-up");
		$(this).toggleClass("menu-btn-active");
	});

	});
