const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[slideIndex].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

// Mostrar siguiente slide al hacer clic en el botón siguiente
document.querySelector('.next-btn').addEventListener('click', nextSlide);

// Mostrar slide anterior al hacer clic en el botón anterior
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Cambiar el texto del carrusel y del cuerpo al hacer clic en los enlaces del menú
document.querySelector('a[href="#inicio"]').addEventListener('click', function() {
  document.getElementById('body-text').innerHTML = 'Encuentra mayores oportunidades en tamaño <span style="font-size: 12px; color: #346568;">12px</span><br>Ingresa ahora con tamaño <span style="font-size: 74px; color: #f1f1f1;">74px</span>';
  document.getElementById('carousel-container').style.display = 'flex';
  document.getElementById('body-text-container').style.display = 'block';
});

document.querySelector('a[href="#sobre-nosotros"]').addEventListener('click', function() {
  document.getElementById('carousel-container').style.display = 'none';
  document.getElementById('body-text').textContent = 'Esta es una prueba de nosotros';
  document.getElementById('body-text-container').style.display = 'block';
});

document.querySelector('a[href="#blog"]').addEventListener('click', function() {
  document.getElementById('carousel-container').style.display = 'none';
  document.getElementById('body-text').textContent = 'Esta es una noticia del blog';
  document.getElementById('body-text-container').style.display = 'block';
});
