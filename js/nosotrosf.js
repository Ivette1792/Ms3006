// Obtener todos los elementos <span> dentro de la sección
var spans = document.querySelectorAll('.textos span');

// Función para reiniciar las animaciones
function restartAnimations() {
  // Iterar sobre los elementos <span>
for (var i = 0; i < spans.length; i++) {
    // Eliminar la clase que desencadena la animación
    spans[i].classList.remove('fade-in');
    // Añadir un retraso a cada elemento para que aparezcan gradualmente
    spans[i].style.animationDelay = (i * 0.1) + 's';
    // Añadir la clase que desencadena la animación para reiniciarla
    void spans[i].offsetWidth; // Reiniciar la animación
    spans[i].classList.add('fade-in');
}
}

// Reiniciar las animaciones cuando la sección se vuelva a visualizar en la ventana
window.addEventListener('scroll', function() {
var section = document.querySelector('.textos');
var sectionTop = section.offsetTop;
var sectionBottom = sectionTop + section.offsetHeight;
var windowTop = window.scrollY;
var windowBottom = windowTop + window.innerHeight;

if (windowTop >= sectionTop && windowBottom <= sectionBottom) {
    restartAnimations();
}
});


/*año carrusel*/ 
const slider = document.querySelector('.slider');
const years = Array.from({ length: 24 }, (_, index) => 00 + index); // Array de años del 2000 al 2023

// Generar la lista de años
years.forEach((year) => {
  const listItem = document.createElement('li');
  listItem.textContent = year.toString().slice(-2); // Obtener los últimos dos números del año
  listItem.setAttribute('data-year', year); // Guardar el año completo en un atributo de datos
  slider.appendChild(listItem);
});



/**/ 
window.addEventListener('scroll', function() {
  var barra = document.querySelector('.barra1');
  var container = document.querySelector('.container2');
  var containerPos = container.offsetTop;

  if (window.pageYOffset >= containerPos) {
    barra.classList.add('fixed');
  } else {
    barra.classList.remove('fixed');
  }
});











/*carruselprueba*/ 

