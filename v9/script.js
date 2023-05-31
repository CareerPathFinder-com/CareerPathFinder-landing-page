// Mostrar la sección "Inicio" inicialmente
document.getElementById('inicio').classList.add('active');

// Cambiar la categoría y actualizar el contenido del cuerpo al hacer clic en los enlaces del menú
document.getElementById('inicio').addEventListener('click', function() {
  document.getElementById('sobre-nosotros').classList.remove('active');
  document.getElementById('blog').classList.remove('active');
  document.getElementById('carousel-container').style.display = 'block';
  document.getElementById('body-text').innerHTML = 'Encuentra mayores oportunidades<br><span>Ingresa ahora</span>';
});

document.getElementById('sobre-nosotros').addEventListener('click', function() {
  document.getElementById('inicio').classList.remove('active');
  document.getElementById('blog').classList.remove('active');
  document.getElementById('carousel-container').style.display = 'none';
  document.getElementById('body-text').innerHTML = 'Esta es una prueba de nosotros';
});

document.getElementById('blog').addEventListener('click', function() {
  document.getElementById('inicio').classList.remove('active');
  document.getElementById('sobre-nosotros').classList.remove('active');
  document.getElementById('carousel-container').style.display = 'none';
  document.getElementById('body-text').innerHTML = 'Esta es una noticia del blog';
});

