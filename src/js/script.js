/* DECLARATION DE VARIABLES */

// Récupération de toutes les ancres :
let links = document.querySelectorAll("a[href^='#']");
let menuButton = document.getElementById("menu__button");



/* 
*  BURGER MENU
*/
// Ouverture/Fermeture via le bouton Menu
  menuButton.addEventListener("click", function() {
  let menuNav = document.querySelector(".menu__nav").classList.toggle('is-open');
  menuButton.classList.toggle('is-clicked');
});

// Fermeture après click sur un lien
  for (let index = 0; index < links.length; index++) {
    let link = links[index];
    link.addEventListener("click", function() {
      document.querySelector(".menu__nav").classList.toggle('is-open');
    })
  }

/* 
* SMOOTH SCROLLING NAVIGATION
*/

// Durée du scroll :
var duration = 1200;

for (let i = 0; i < links.length; i++)
  links[i].addEventListener("click", function(event) {
  var start = new Date;
  var from  = window.pageYOffset; // position Y départ dans la page
  var to = document.getElementById(this.hash.substring(1)).offsetTop;
  event.preventDefault();
  var scroll = function() {
    var progress = Math.min(1, (new Date - start) / duration);
    window.scrollTo(0, (to - from) * Math.pow(progress, 2) + from);  
    (progress < 1) && window.requestAnimationFrame(scroll);
  }
  scroll();
}, false);

