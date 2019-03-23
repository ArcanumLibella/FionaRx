/* 
  MENU BURGER
*/

let menuButton = document.getElementById("menu__button");menuButton.addEventListener("click", function() {
  let menuNav = document.querySelector(".menu__nav").classList.toggle('is-open');
  menuButton.classList.toggle('is-clicked');
});





// document.getElementById("menu__button").addEventListener("click", function( event ) {
//   document.querySelector(".menu__nav").classList.toggle('menu__nav--show');

//  document.getElementById("menu__button").classList.toggle('menu__button--show');
// });