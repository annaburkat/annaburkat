$(window).scroll(function() {
  var y = $(window).scrollTop();
  var steps = $('#steps').offset();
  steps = steps.top;

  if ($(document).width() > 960) {

    if (y >= steps - 100) {
      // steps bar button fade in:
      $('#stepbar').fadeIn();
      $('#stepbar').css({
        'display': 'block'
      });

      // ingre desktop button fade in:
      $('#ingreBtnBr').fadeIn();
      $('#ingreBtnBr').css({
        'display': 'block'
      });

    } else {
      $('#stepbar').fadeOut();
      $('#ingreBtnBr').fadeOut();
    }
  }
});
