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
    });  
    $('#changeColor4').click(function(){
        $('#step4').toggleClass("step_cont_done");
    }); 
    $('#changeColor3').click(function(){
        $('#step3').toggleClass("step_cont_done");
    });  
    $('#changeColor2').click(function(){
        $('#step2').toggleClass("step_cont_done");
    });
    $('#changeColor1').click(function(){
        $('#step1').toggleClass("step_cont_done");
        
    });
});    

var valor = true
function FbuttonDone5() {
  var uno = document.getElementById('changeColor5');
  valor?uno.innerText = "ENJOY!!":uno.innerText = "Done!";
  valor=!valor
}
function FbuttonDone4() {
  var uno = document.getElementById('changeColor4');
  valor?uno.innerText = "Still trying":uno.innerText = "Done!";
  valor=!valor
}
function FbuttonDone3() {
  var uno = document.getElementById('changeColor3');
  valor?uno.innerText = "Still trying":uno.innerText = "Done!";
  valor=!valor
}
function FbuttonDone2() {
  var uno = document.getElementById('changeColor2');
  valor?uno.innerText = "Still trying":uno.innerText = "Done!";
  valor=!valor
}
function FbuttonDone1() {
  var uno = document.getElementById('changeColor1');
  valor?uno.innerText = "Still trying":uno.innerText = "Done!";
  valor=!valor
}