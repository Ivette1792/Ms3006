// Función para verificar si el elemento es visible en la ventana

/*efecto barra */
window.addEventListener("scroll", function () {
  let barra = document.querySelector(".barra");
  let wp = document.querySelector(".wpp");
  let flecha = document.querySelector(".flecha");
  let contentSection = document.querySelector(".nosotrodivboostrap");
  let contentSectionTop = contentSection.offsetTop;

  if (window.scrollY >= contentSectionTop) {
    barra.classList.add("fixed");
    wp.classList.add("fixed");
    flecha.classList.add("fixed");
  } else {
    barra.classList.remove("fixed");
    wp.classList.remove("fixed");
    flecha.classList.remove("fixed");
  }
});

function isVisible(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight;
}

// Función para restablecer la animación cuando el elemento es visible
function resetAnimation() {
  var nosotrosElement = document.getElementById("nosotros");
  if (isVisible(nosotrosElement)) {
    nosotrosElement.style.animation = "aparecer 1s ease-in-out forwards";
  }
}

// Evento load para activar la animación al cargar la página
window.addEventListener("load", resetAnimation);

// Evento scroll para activar la animación al desplazarse
window.addEventListener("scroll", resetAnimation);

/*efecto lienas*/

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateLine() {
  var lineaHorizontal = document.getElementById("linea-horizontal");
  if (isInViewport(lineaHorizontal)) {
    lineaHorizontal.classList.add("show");
  }
}

window.addEventListener("scroll", animateLine);

/*linea 2*/

function animateLine2() {
  var lineaHorizontal2 = document.getElementById("linea-horizontal2");
  if (isInViewport(lineaHorizontal2)) {
    lineaHorizontal2.classList.add("show");
  }
}

window.addEventListener("scroll", animateLine2);

/**/ /*liena3 */

function animateLine3() {
  var lineaHorizontal3 = document.getElementById("linea-horizontal3");
  if (isInViewport(lineaHorizontal3)) {
    lineaHorizontal3.classList.add("show");
  }
}

window.addEventListener("scroll", animateLine3);

/**liena4 */

function animateLine4() {
  var lineaHorizontal4 = document.getElementById("linea-horizontal4");
  if (isInViewport(lineaHorizontal4)) {
    lineaHorizontal4.classList.add("show");
  }
}

window.addEventListener("scroll", animateLine4);

/**liena5 */

function animateLine5() {
  var lineaHorizontal5 = document.getElementById("linea-horizontal5");
  if (isInViewport(lineaHorizontal5)) {
    lineaHorizontal5.classList.add("show");
  }
}

window.addEventListener("scroll", animateLine5);

/*carrusel*/
//Obtener el contenedor del carrusel
var carrusel = document.querySelector(".contenedor-imagenes2");

//Obtener todas las imágenes dentro del carrusel
var imagenes = carrusel.querySelectorAll("img");

//Configurar la duración y el índice inicial
var duracion = 5000;
var indice = 0;

//Función para deslizar el carrusel automáticamente
function deslizarCarrusel() {
  //Ocultar la imagen actual
  imagenes[indice].style.display = "none";

  //Incrementar el índice
  indice++;

  //Comprobar si el índice ha alcanzado el final del arreglo de imágenes
  if (indice >= imagenes.length) {
    indice = 0;
  }

  //Mostrar la siguiente imagen
  imagenes[indice].style.display = "block";

  //Configurar el próximo deslizamiento después de la duración especificada
  setTimeout(deslizarCarrusel, duracion);
}

//Iniciar el deslizamiento automático del carrusel
deslizarCarrusel();

/*estrellas*/

const stars = document.querySelectorAll(".star");

function showStars() {
  stars.forEach((star, index) => {
    setTimeout(() => {
      star.style.opacity = "1";
    }, (index + 1) * 1000);
  });
}

showStars();

document.addEventListener("DOMContentLoaded", function () {
  var somosImg = document.getElementById("somos");
  var estrellas = document.getElementsByClassName("estrellas");

  window.addEventListener("scroll", function () {
    var position = somosImg.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (position < screenHeight) {
      somosImg.style.opacity = "1";

      for (var i = 0; i < estrellas.length; i++) {
        estrellas[i].style.opacity = "1";
        estrellas[i].classList.add("appear-animation");
      }
    }
  });
});

//*slitestesitmoniosasdd*/ */

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.querySelector(".testimonial-slider");
  var slides = document.querySelectorAll(".testimonial-slide");
  var prevBtn = document.querySelector(".prev");
  var nextBtn = document.querySelector(".next");
  var currentIndex = 0;

  function updateSlides() {
    slider.style.transform = "translateX(-" + currentIndex * 100 + "%)";
    slides.forEach(function (slide, index) {
      slide.classList.remove("active");
      if (index === currentIndex) {
        slide.classList.add("active");
      }
    });
  }

  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
  });

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  });
});
