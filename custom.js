$(document).ready(function() {
  const container = $("#contentContainer");

  function animateContainer() {
    container.addClass("animate__animated animate__bounceIn");
    setTimeout(function() {
      container.removeClass("animate__animated animate__bounceIn");
    }, 1000);
  }

  function loadContent(page) {
    container.fadeOut(500, function() {
      container.addClass("animate__animated animate__fadeOut");
      container.load(page, function() {
        container.removeClass("animate__animated animate__fadeOut");
        animateContainer();
        container.fadeIn(500);
      });
    });
  }

  $("nav a.nav-link").on("click", function(e) {
    e.preventDefault();
    const page = $(this).attr("href");
    loadContent(page);
  });

  animateContainer();
});
