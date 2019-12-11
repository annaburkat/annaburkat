// Anna includes
$(function() {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

// Anna homepage
const myFunction = () => {
  $('.navbar').toggleClass("responsive");
}

// Anna navigation
$(function() {
  $(document).scroll(function() {
    var navbar = $(".js-navbar");
    navbar.toggleClass('navbar--scrolled', $(this).scrollTop() > navbar.height());
  });
});

// Anna slider
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
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" mythbusted-slider__dot--active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " mythbusted-slider__dot--active";
}

//Conor - Google maps
function initMap() {
  console.log('map');
  var location = {
    lat: 53.3276096,
    lng: -6.2765313
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  })
}


//Conor calculator
function computeBMI() {
  // inputs
  var height = Number(document.getElementById("height").value);
  var heightunits = document.getElementById("heightunits").value;
  var weight = Number(document.getElementById("weight").value);
  var weightunits = document.getElementById("weightunits").value;


  //Convert to metric
  if (heightunits === "inches") height /= 0.393700787;
  if (weightunits === "lb") weight /= 2.20462;

  //Perform calculation

  // var BMI = weight /Math.pow(height, 2)*10000;
  var BMI = Math.round(weight / Math.pow(height, 2) * 10000);

  //Display result of calculation
  document.getElementById("output").innerText = Math.round(BMI * 100) / 100;

  var output = Math.round(BMI * 100) / 100
  if (output < 18.5)
    document.getElementById("remark").innerText = "You are Underweight, we recommend a higher calorie count";
  else if (output >= 18.5 && output <= 25)
    document.getElementById("remark").innerText = "You are Normal weight";
  else if (output >= 25 && output <= 30)
    document.getElementById("remark").innerText = "You are considered Obese, we recommend higher calorie restrictions and more exercise";
  else if (output > 30)
    document.getElementById("remark").innerText = "You are considered Overweight, we recommend calorie restrictions and more exercise";
  // document.getElementById("answer").value = output;
}
