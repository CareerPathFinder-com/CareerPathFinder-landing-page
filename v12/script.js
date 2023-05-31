// Variables para el carrusel
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Cambiar de imagen automáticamente cada 5 segundos
const slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Cambiar la categoría y actualizar el contenido del cuerpo al hacer clic en los enlaces del menú
document.getElementById('inicio').addEventListener('click', function() {
  document.getElementById('sobre-nosotros').classList.remove('active');
  document.getElementById('blog').classList.remove('active');
  document.getElementById('carousel-container').style.display = 'block';
  document.getElementById('body-text').style.display = 'block';
  document.getElementById('body-text').innerHTML = '<span style="font-size: 36px; color: #346568;">Encuentra mayores oportunidades</span><br><span style="font-size: 74px; color: #f1f1f1;">Ingresa ahora</span>';
  document.getElementById('start-button').style.display = 'block';
});

document.getElementById('sobre-nosotros').addEventListener('click', function() {
  document.getElementById('inicio').classList.remove('active');
  document.getElementById('blog').classList.remove('active');
  document.getElementById('carousel-container').style.display = 'none';
  document.getElementById('body-text').style.display = 'block';
  document.getElementById('body-text').innerHTML = '<span style="font-size: 12px; color: #346568;">Esta es una prueba de nosotros</span>';
  document.getElementById('start-button').style.display = 'none';
});

document.getElementById('blog').addEventListener('click', function() {
  document.getElementById('inicio').classList.remove('active');
  document.getElementById('sobre-nosotros').classList.remove('active');
  document.getElementById('carousel-container').style.display = 'none';
  document.getElementById('body-text').style.display = 'block';
  document.getElementById('body-text').innerHTML = '<span style="font-size: 12px; color: #346568;">Esta es una noticia del blog</span>';
  document.getElementById('start-button').style.display = 'none';
});
