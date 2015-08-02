( function( $ ) {
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
    //FadeIn all sections
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      // Resize sections
		      adjustWindow();
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
		}, 800);
	});

	function adjustWindow(){
	    winH = $window.height();
	    if(winH <= 550) {
			winH = 550;
		}
	    $slide.height(winH);
	}
} )( jQuery );

$(document).ready(function() {
	$("#introduction").typed({
	strings: ["Hi, my name is Nicole.</br> I would love to take part in the Girl in Tech Mentoring Programme.</br> Keep scrolling down to find out more about me."],
	// typing speed
	typeSpeed: 10,
	// time before typing starts
	startDelay: 10,
	// backspacing speed
	backSpeed: 20,
	// time before backspacing
	backDelay: 20,
	// loop
	loop: false,
	// false = infinite
	loopCount: false,
	// show cursor
	showCursor: true,
	// character for cursor
	cursorChar: "|",
	// attribute to type (null == text)
	attr: null,
	// either html or text
	contentType: 'html',
	// call when done callback function
	callback: function() {},
	// starting callback function before each string
	preStringTyped: function() {},
	//callback for every typed string
	onStringTyped: function() {},
	// callback for reset
	resetCallback: function() {}


	});
});
