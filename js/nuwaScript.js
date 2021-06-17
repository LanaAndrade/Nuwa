//carrossel
function carrossel(){
  var slides = document.querySelectorAll('.slide');
  var btns = document.querySelectorAll('.btn');
  let currentSlide = 1;

// Navegação manual
  var manualNav = function(manual){
    slides.forEach((slide) => {
      slide.classList.remove('active');

      btns.forEach((btn) => {
        btn.classList.remove('active');
      });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
  }

  btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
  });
  // Navegação automática
  var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
      setTimeout(function(){
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove('active');
        });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if(slides.length == i){
        i = 0;
      }
      if(i >= slides.length){
        return;
      }
      repeater();
    }, 10000);
    }
    repeater();
  }
  repeat();
}

//Animação rolagem
window.addEventListener("scroll", function(){
const header = document.querySelector("header");
header.classList.toggle('sticky', window.scrollY > 0);
});

//Modo escuro
document.querySelector('#btnMenuTemaEscuro').addEventListener('click', () => {
  document.body.classList.toggle('escuro')
})

//animação títulos
window.addEventListener("scroll", reveal);

function reveal(){
  var revelar = document.querySelectorAll(".revelar");

  for(var i = 0; i < revelar.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = revelar[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      revelar[i].classList.add("ativo");
    }
  }
}
