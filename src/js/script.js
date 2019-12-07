const myFunction = () => {
  $('.navbar').toggleClass("responsive");
}

$(function() {
  $(document).scroll(function() {
    var navbar = $(".js-navbar");
    navbar.toggleClass('navbar--scrolled', $(this).scrollTop() > navbar.height());
  });
});

let x = -1;
setInterval(function() {
  let images = ['breakfast.jpg', 'breakfast-dark.jpg', 'soup.jpg', 'shake.jpg', 'watermelon.jpg'];
  x = (x === images.length - 1) ? 0 : x + 1;
  let new_image = '/images/' + images[x];
  $('.js-intro__image').attr('src', new_image);
}, 4000);

// ==========| Alex Scrip |========== //

// ---------- | links animation | ----------  //

$(document).ready(function(){
 
	$('.go_up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.go_up').slideDown(300);
		} else {
			$('.go_up').slideUp(300);
		}
	});
 

  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 500);
    return false;
  });
});



// ---------- | list done | ----------  //




 /* (function () {
            var previousScroll = 0;

            $(window).scroll(function(){
                var currentScroll = $(this).scrollTop();
                
                if (currentScroll > previousScroll){
                    $('.grow_bar').css('width','+=10px')
                } else {
                    $('.grow_bar').css('width','-=10px')
                }
                previousScroll = currentScroll;
                
            });
            
            var lastScrollTop = 0;
                $(window).scroll(function(event){
                   var st = $(this).scrollTop();
                   if (st > lastScrollTop){
                       // downscroll code
                   } else {
                      // upscroll code
                   }
                   lastScrollTop = st;
                });
         }()); */