$(function () {
	$(window).scroll(function() {
	    $('.service-block-1').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.service-block-2').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.service-block-3').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInDown");
	        }
	    });
	});
		$(window).scroll(function() {
	    $('.service-2').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInRight");
	        }
	    });
		});
		$(window).scroll(function() {
	    $('.service-3').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInLeft");
	        }
	    });
		});
		$(window).scroll(function() {
	    $('.box.left').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInLeft");
	        }
	    });
		});
		$(window).scroll(function() {
	    $('.box.blue').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__zoomIn");
	        }
	    });
		});
		$(window).scroll(function() {
	    $('.box.red').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInRight");
	        }
	    });
		});
	$(window).scroll(function() {
	    $('.container-image').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__zoomIn");
	        }
	    });
	});
		$(window).scroll(function() {
	    $('.vizit').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__flash");
	        }
	    });
		});
			$(window).scroll(function() {
	    $('.form').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInLeft");
	        }
	    });
			});
			$(window).scroll(function() {
	    $('.contact-bg').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInRight");
	        }
	    });
			});
	$(window).scroll(function() {
	    $('.up').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInUp");
	        }
	    });
	});
	})