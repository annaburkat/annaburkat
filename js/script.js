$(document).ready(function() {
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


  $('.go_up').click(function() {
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.go_up').slideDown(300);
    } else {
      $('.go_up').slideUp(300);
    }
  });

    $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.goIngre').slideDown(300);
    } else {
      $('.goIngre').slideUp(300);
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
    $('html, body').animate({
      scrollTop: destino.offset().top -50
    }, 500);
    return false;
  });

  $('.stepbar__link').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({
      scrollTop: destino.offset().top -150
    }, 500);
    return false;
  });

  $('.ingredients__buttonBr').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({
      scrollTop: destino.offset().top -200
    }, 500);
    return false;
  });

});

// ----------- buttons ----------- //

$(document).ready(function() {
    $('#changeColor5').click(function(){
        $('#step5').toggleClass("step__done");
        $('#stepbar5').toggleClass("stepbar__step--done");
    });
    $('#changeColor4').click(function(){
        $('#step4').toggleClass("step__done");
        $('#stepbar4').toggleClass("stepbar__step--done");
    });
    $('#changeColor3').click(function(){
        $('#step3').toggleClass("step__done");
        $('#stepbar3').toggleClass("stepbar__step--done");
    });
    $('#changeColor2').click(function(){
        $('#step2').toggleClass("step__done");
        $('#stepbar2').toggleClass("stepbar__step--done");
    });
    $('#changeColor1').click(function(){
        $('#step1').toggleClass("step__done");
        $('#stepbar1').toggleClass("stepbar__step--done");
    });

    $('#ingreBtn').click(function(){
        $('#ingreCont').toggleClass("ingre--mobile");
     });

    $('#changeColor1').click(function(){
		var $this = $(this);
		$this.toggleClass('done');
		if($this.hasClass('done')){
			$this.text('Still on it...');
		} else {
			$this.text('Done!');
		}
	});

      $('#changeColor2').click(function(){
		var $this = $(this);
		$this.toggleClass('done');
		if($this.hasClass('done')){
			$this.text('Still on it...');
		} else {
			$this.text('Done!');
		}
	});

      $('#changeColor3').click(function(){
		var $this = $(this);
		$this.toggleClass('done');
		if($this.hasClass('done')){
			$this.text('Still on it...');
		} else {
			$this.text('Done!');
		}
	});

      $('#changeColor4').click(function(){
		var $this = $(this);
		$this.toggleClass('done');
		if($this.hasClass('done')){
			$this.text('Still on it...');
		} else {
			$this.text('Done!');
		}
	});

      $('#changeColor5').click(function(){
		var $this = $(this);
		$this.toggleClass('done');
		if($this.hasClass('done')){
			$this.text('Enjoy!');
		} else {
			$this.text('Done!');
		}
	});



});



/* -------  Recepie scroll  desktop <-----------*/

/*$(document).scroll(function() {
  var y = $(this).scrollTop();
    if ($(document).width()>960){ console.log('nono')
          if (y > 790) {
              // steps bar button fade in:
            $('#stepbar').fadeIn();
            $('#stepbar').css({'display':'block'})

              // ingre desktop button fade in:
            $('#ingreBtnBr').fadeIn();
            $('#ingreBtnBr').css({'display':'block'})

          } else {
            $('#stepbar').fadeOut();
            $('#ingreBtnBr').fadeOut();
          }
    }
});
*/
/*
$(window).scroll(function() {
    var y = $(window).scrollTop();
    var steps = $('#steps').offset();
    steps = steps.top;
    
    if ($(document).width()>960){ 
                                 
          if (y >= steps - 100) {
              // steps bar button fade in:
            $('#stepbar').fadeIn();
            $('#stepbar').css({'display':'block'});

              // ingre desktop button fade in:
            $('#ingreBtnBr').fadeIn();
            $('#ingreBtnBr').css({'display':'block'});

          } else {
            $('#stepbar').fadeOut();
            $('#ingreBtnBr').fadeOut();
          }
    }
});
*/
$(window).scroll(function() {
    var y = $(window).scrollTop();
    var steps = $('#steps').offset();
    steps = steps.top;
    
    if ($(document).width()>960){ 
                                 
          if (y >= steps - 100) {
              // steps bar button fade in:
            $('#stepbar').fadeIn();
            $('#stepbar').css({'display':'block'});

              // ingre desktop button fade in:
            $('#ingreBtnBr').fadeIn();
            $('#ingreBtnBr').css({'display':'block'});

          } else {
            $('#stepbar').fadeOut();
            $('#ingreBtnBr').fadeOut();
          }
    }
});

//Display: none for button when it`s arrive to footer:
/* 
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
       $('#ingreBtnBr').css({'display':'none'});
   }
});*/

