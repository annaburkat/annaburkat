const myFunction = () => {
  $('.navbar').toggleClass("responsive");
}

$(function () {
  $(document).scroll(function () {
    var navbar = $(".js-navbar");
    navbar.toggleClass('navbar--scrolled', $(this).scrollTop() > navbar.height());
  });
});
