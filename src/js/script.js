/* 
  MENU BURGER
*/

document.querySelector(".menu__button").addEventListener("click", function( event ) {
  document.querySelector(".menu__nav").classList.toggle('menu--show');

 document.querySelector(".menu__button").classList.toggle('menu__button--show');
});

