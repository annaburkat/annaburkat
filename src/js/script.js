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
