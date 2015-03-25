$(document).ready(function(){
	
	//change navbar color after scrolling
	var navDiv = $(".navbar-default");

   $(window).scroll(function () {
       if ($(window).scrollTop() / $(document).height() > 0.15) {
       	navDiv.addClass("active");	
       }
       else{
       	navDiv.removeClass("active");
       }
     });
	
	//sets scrolling from link, add active to clicked link
	$(".nav-link").on('click', function(e){
		var thisId = $(this).attr("id").toString();
		
		if ( thisId != "bg-1"){
			$("li").removeClass("active");
			$(this).parent("li").addClass("active");
		}
		else
			$("li").removeClass("active");
		
		
		var navTo = $(this).attr('id').toString();
		e.preventDefault();
		$('html, body').animate({
		    scrollTop: $("#" + navTo + "-elem").offset().top
		}, 1000);
	});


	//scroll to map
	$("#map").on("click", function(e){
		$('html, body').animate({
		    scrollTop: $("#map-canvas").offset().top
		}, 1000);
	});


});