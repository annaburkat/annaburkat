// Anna
//includes
$(function(){
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

//homepage
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



// Carla slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("js-mythbusted-slide");
    var dots = document.getElementsByClassName("js-mythbusted__dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" mythbusted-slider__dot--active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " mythbusted-slider__dot--active";
  }
