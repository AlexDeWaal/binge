$(function () {
    $("#btn_login").on("click", function () {
        window.location.href = 'pages/homepage.html';
    });
    
    	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
    
});

var pxlCount = 0;
$(window).on('scroll', function () {
    pxlCount = $(document).scrollTop()/50;
  	$('p.pxlCount > span').text(pxlCount);
    $("#bgImage").css({"-webkit-filter": "blur("+pxlCount+"px)","-moz-filter": "blur("+pxlCount+"px)","filter": "blur("+pxlCount+"px)" }); 
    
});