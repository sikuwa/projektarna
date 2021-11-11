//requires jQuery
$(window).scroll(function(){
  var threshold = 200; // number of pixels before bottom of page that you want to start fading
  var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
	if( op <= 0 ){
		$("#thing-to-hide").hide();
	} else {
		$("#thing-to-hide").show();
	}
	$("#thing-to-hide").css("opacity", op ); 
});

/*
TODO:
Get working on iOS Safari. Does not fade out completely
*/