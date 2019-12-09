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

});

// ----------- buttons ----------- //

$(document).ready(function() {
    $('#changeColor5').click(function(){
        $('#step5').toggleClass("step_cont_done");
        $('#stepbar5').toggleClass("stepbar__step__done");
    });  
    $('#changeColor4').click(function(){
        $('#step4').toggleClass("step_cont_done");
        $('#stepbar4').toggleClass("stepbar__step__done");
    }); 
    $('#changeColor3').click(function(){
        $('#step3').toggleClass("step_cont_done");
        $('#stepbar3').toggleClass("stepbar__step__done");
    });  
    $('#changeColor2').click(function(){
        $('#step2').toggleClass("step_cont_done");
        $('#stepbar2').toggleClass("stepbar__step__done");
    });
    $('#changeColor1').click(function(){
        $('#step1').toggleClass("step_cont_done");
        $('#stepbar1').toggleClass("stepbar__step__done");    
    });
    
    
    
    $('#ingreBtn').click(function(){
            $('#ingreCont').toggleClass("ingre__container__up");
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

/*
var valor = true

function FbuttonDone5() {
  var five = document.getElementById('changeColor5');
  valor?five.innerText = "ENJOY!!":five.innerText = "Done!";
  valor=!valor
}
function FbuttonDone4() {
  var four = document.getElementById('changeColor4');
  valor?four.innerText = "Still trying":four.innerText = "Done!";
  valor=!valor
}
function FbuttonDone3() {
  var three = document.getElementById('changeColor3');
  valor?three.innerText = "Still trying":three.innerText = "Done!";
  valor=!valor
}
/*function FbuttonDone2() {
  var two = document.getElementById('changeColor2');
  valor?two.innerText = "Still trying":two.innerText = "Done!";
  valor=!valor
}


function FbuttonDone1() {
  var one = document.getElementById('changeColor1');
  valor?one.innerText = "Still trying":one.innerText = "Done!";
  valor=!valor
}*/

/* -------  stepbar -----------*/

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 790) {
    $('#stepbar').fadeIn();
    $('#stepbar').css({'display':'block'})
      
  } else {
    $('#stepbar').fadeOut();
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 790) {
    $('#ingreBtnBr').fadeIn();
    $('#ingreBtnBr').css({'display':'block'})
      
  } else {
    $('#ingreBtnBr').fadeOut();
  }
});

/*$(document).scroll(function() {
  var z = $(this).scrollTop();
  if (z > 800) {
    $('#ingreCont').addClass("ingre__container_fix");
    $('#ingreCont').removeClass("ingre__container");
  } else {
    $('#ingreCont').addClass("ingre__container")
    $('#ingreCont').removeClass("ingre__container_fix");
  }
});


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.ingredientsSection').fadeIn();
  } else {
    //$('.ingredientsSection').fadeOut();
    $('.ingredientsSection').attr("style", "display:none");
  }
});*/