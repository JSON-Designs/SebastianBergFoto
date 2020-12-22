var btnContainer = document.getElementsByClassName("link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btnContainer.length; i++) {
  btnContainer[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
window.ondragstart = function () {
  return false;
};

const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("contextmenu", (event) => event.preventDefault());
}

var IsOpen = false;
var navbar = document.getElementById("navbar-mobile");
var navbarBackground = document.getElementById("nav-background");
var WindowClickable = false;

function open_nav() {
  navbar.style.left = "-1rem";
  navbarBackground.style.left = "-1rem";
  IsOpen = true;
  WindowClickable = true;
}

function close_nav() {
  navbar.style.left = "-20rem";
  navbarBackground.style.left = "-20rem";
  IsOpen = false;
  WindowClickable = false;
}

var btn = document.getElementById("nav-button");

btn.addEventListener(
  "click",
  function () {
    if (IsOpen) {
      close_nav();
    } else {
      open_nav();
    }
  },
  false
);

window.addEventListener(
  "click",
  function () {
    if (WindowClickable) {
      close_nav();
    } else {
      close_nav();
    }
  },
  true
);
