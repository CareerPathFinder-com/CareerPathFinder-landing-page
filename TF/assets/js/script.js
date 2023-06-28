$(document).ready(function() {
  // Cargar el contenido inicial del navbar
  $("#navbarContainer").load("navbar.html");

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
        container.fadeIn(500, function() {
          container.removeClass("animate__animated animate__fadeOut");
          animateContainer();
        });
      });
    });
  }

  // Cargar contenido en el contenedor al hacer clic en los enlaces del navbar
  $("ul.navbar-nav").on("click", "a", function(e) {
    e.preventDefault();
    const page = $(this).attr("href");
    loadContent(page);
  });

  $("#footerContainer").load("footer.html");
});
