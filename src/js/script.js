/* DECLARATION DE VARIABLES */

let links = document.querySelectorAll(".menu__nav a"); // Récupération de toutes les ancres
let scroll = document.getElementById("scroll");
let backToTop = document.getElementById("top");
let menuButton = document.getElementById("menu__button");
let projects = document.querySelectorAll(".project");

/*
 * MENU DESKTOP -> Project pages -> $papyrus
 */

if (document.querySelector(".project")) {
  for (let index = 0; index < projects.length; index++) {
    let project = projects[index];
    project.style.backgroundColor = "#FFF9F2";
  }
}

/*
 * BURGER MENU
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
 * DETECTION DE WAYPOINT
 */

var sections = [
  "booking",
  "moschino",
  "strit",
  "about",
  "description",
  "skills"
];

if (document.querySelector(".index")) {
  sections.forEach(function(section) {
    var element = document.getElementById(section);

    var waypoint = new Waypoint({
      element: element,
      handler: function(direction) {
        element.classList.toggle("is-reached");
      },
      offset: "60%"
    });
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

// backToTop
backToTop.addEventListener(
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

/*
 * GOLDENLINES
 */

if (document.querySelector(".index")) {
  // only on the index.html
  class Lines {
    constructor(name) {
      this.name = name;
      this.name_getElement = document.getElementById(this.name); // Get the id of the <path> element and the length of <path>
      this.totalLength = this.name_getElement.getTotalLength(); // Get the total length of each lines

      this.name_getElement.style.strokeDasharray =
        this.totalLength + " " + this.totalLength; // Make very long dashes (the length of the path itself)

      this.name_getElement.style.strokeDashoffset = this.totalLength; // Offset the dashes so the it appears hidden entirely
    }
    scroll_percentage(scrollPercentage) {
      this.drawLength = this.totalLength * scrollPercentage; // Length to offset the dashes
      this.name_getElement.style.strokeDashoffset =
        this.totalLength - this.drawLength; // Draw in reverse
    }
  }

  let path1 = new Lines("path1");
  let path2 = new Lines("path2");
  let path3 = new Lines("path3");

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
  });
}
