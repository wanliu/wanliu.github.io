var resizeVideoBackground = function() {
	var $bgvid = $('#bgvid'), 
		b = 1.7776203966005666;
		bodyWidth = $('body').width();

	$bgvid.width(bodyWidth)
		.height(bodyWidth / b)
}

resizeVideoBackground();
$(window).resize(resizeVideoBackground);