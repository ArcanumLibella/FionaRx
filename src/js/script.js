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

/* 
* GOLDENLINES
*/

// Get the id of the <path> element and the length of <path>
var path1 = document.getElementById("path1");
var path2 = document.getElementById("path2");
var path3 = document.getElementById("path3");

// Get the total length of each lines
var pathLength1 = path1.getTotalLength();
var pathLength2 = path2.getTotalLength();
var pathLength3 = path3.getTotalLength();

// Make very long dashes (the length of the path itself)
path1.style.strokeDasharray = pathLength1 + ' ' + pathLength1;
path2.style.strokeDasharray = pathLength2 + ' ' + pathLength2;
path3.style.strokeDasharray = pathLength3 + ' ' + pathLength3;

// Offset the dashes so the it appears hidden entirely
path1.style.strokeDashoffset = pathLength1;
path2.style.strokeDashoffset = pathLength2;
path3.style.strokeDashoffset = pathLength3;

// When the page scrolls...
window.addEventListener("scroll", function(e) {
 
  // What % down is it? 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
  // Length to offset the dashes
  var drawLength1 = (pathLength1 * scrollPercentage);
  var drawLength2 = (pathLength2 * scrollPercentage);
  var drawLength3 = (pathLength3 * scrollPercentage);

  
  // Draw in reverse
  path1.style.strokeDashoffset = pathLength1 - drawLength1;
  path2.style.strokeDashoffset = pathLength2 - drawLength2;
  path3.style.strokeDashoffset = pathLength3 - drawLength3;

});