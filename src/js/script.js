/* DECLARATION DE VARIABLES */

// Récupération de toutes les ancres :
let links = document.querySelectorAll(".menu__nav a");
let menuButton = document.getElementById("menu__button");
// let desktop = window.matchMedia("(min-width: 1120px)");
let projects = document.querySelectorAll(".project");

/* 
* MENU DESKTOP
Project pages -> background's element = $papyrus
*/

if (document.querySelector(".project")) {
  for (let index = 0; index < projects.length; index++) {
    let project = projects[index];
    project.style.backgroundColor = "#FFF9F2";
  }
}

// To verify if
// if (document.querySelector(".project")) {
//   let timer = setInterval(() => {
//     console.log("Timer");
//     document.querySelector(".menu__nav").style.backgroundColor = "$papyrus";
//     document.querySelector(".socials").style.backgroundColor = "$papyrus";
//   }, 2000);
// }

/*
 *  BURGER MENU
 */

// Ouverture/Fermeture via le bouton Menu
menuButton.addEventListener("click", function() {
  let menuNav = document
    .querySelector(".menu__nav")
    .classList.toggle("is-open");
  menuButton.classList.toggle("is-clicked");

  if (document.querySelector(".project")) {
    document.querySelector(".menu__nav").style.backgroundColor = "#222222";
    document.querySelector(".socials").style.backgroundColor = "#222222";
  }
});

// Fermeture après click sur un lien
for (let index = 0; index < links.length; index++) {
  let link = links[index];
  link.addEventListener("click", function() {
    document.querySelector(".menu__nav").classList.toggle("is-open");
  });
}

/*
 * SMOOTH SCROLLING NAVIGATION
 */

// Durée du scroll :
var duration = 1200;

for (let i = 0; i < links.length; i++)
  links[i].addEventListener(
    "click",
    function(event) {
      var start = new Date();
      var from = window.pageYOffset; // position Y départ dans la page
      var to = document.getElementById(this.hash.substring(1)).offsetTop;
      event.preventDefault();
      var scroll = function() {
        var progress = Math.min(1, (new Date() - start) / duration);
        window.scrollTo(0, (to - from) * Math.pow(progress, 2) + from);
        progress < 1 && window.requestAnimationFrame(scroll);
      };
      scroll();
    },
    false
  );

// /*
//  * GOLDENLINES
//  */

// // Get the id of the <path> element and the length of <path>
if (document.querySelector(".index")) {
  class Lines {
    constructor(name) {
      this.name = name;
      this.name_getElement = document.getElementById(this.name);
      this.totalLength = this.name_getElement.getTotalLength();

      this.name_getElement.style.strokeDasharray =
        this.totalLength + " " + this.totalLength;

      this.name_getElement.style.strokeDashoffset = this.totalLength;
    }
    scroll_percentage(scrollPercentage) {
      this.drawLength = this.totalLength * scrollPercentage;
      this.name_getElement.style.strokeDashoffset =
        this.totalLength - this.drawLength;

      console.log(
        (this.name_getElement.style.strokeDashoffset =
          this.totalLength - this.drawLength)
      );
    }
  }

  let path1 = new Lines("path1");
  let path2 = new Lines("path2");
  let path3 = new Lines("path3");

  ///////////////
  // var path1 = document.getElementById("path1");
  // var path2 = document.getElementById("path2");
  // var path3 = document.getElementById("path3");

  // // Get the total length of each lines
  // var pathLength1 = path1.getTotalLength();
  // var pathLength2 = path2.getTotalLength();
  // var pathLength3 = path3.getTotalLength();

  // // Make very long dashes (the length of the path itself)
  // path1.style.strokeDasharray = pathLength1 + " " + pathLength1;
  // path2.style.strokeDasharray = pathLength2 + " " + pathLength2;
  // path3.style.strokeDasharray = pathLength3 + " " + pathLength3;

  // // Offset the dashes so the it appears hidden entirely
  // path1.style.strokeDashoffset = pathLength1;
  // path2.style.strokeDashoffset = pathLength2;
  // path3.style.strokeDashoffset = pathLength3;

  // When the page scrolls...
  window.addEventListener("scroll", function(e) {
    // What % down is it?
    var scrollPercentage =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    path1.scroll_percentage(scrollPercentage);
    path2.scroll_percentage(scrollPercentage);
    path3.scroll_percentage(scrollPercentage);

    // Length to offset the dashes
    // var drawLength1 = pathLength1 * scrollPercentage;
    // var drawLength2 = pathLength2 * scrollPercentage;
    // var drawLength3 = pathLength3 * scrollPercentage;

    // // Draw in reverse
    // path1.style.strokeDashoffset = pathLength1 - drawLength1;
    // path2.style.strokeDashoffset = pathLength2 - drawLength2;
    // path3.style.strokeDashoffset = pathLength3 - drawLength3;
  });
}
