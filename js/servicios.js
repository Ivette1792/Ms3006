window.addEventListener('scroll', function() {
    var barra = document.querySelector('.barra1');
    var container = document.querySelector('.servicios');
    var containerPos = container.offsetTop;
  
    if (window.pageYOffset >= containerPos) {
      barra.classList.add('fixed');
    } else {
      barra.classList.remove('fixed');
    }
  });
  