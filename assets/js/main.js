const navbarToggleButton = document.querySelector(".navbar-toggler");
const navbarToggleIcon = document.querySelector(".navbar-toggler-icon");
const iconClose = document.querySelector(".close");
let toggle = false;

// gestion du boutton de la navbar
iconClose.style.display = "none";

navbarToggleButton.addEventListener("click", swipeIcone);

function swipeIcone() {
  toggle = !toggle;
  if (toggle) {
    iconClose.style.display = "block";
    navbarToggleIcon.style.display = "none";
  } else {
    iconClose.style.display = "none";
    navbarToggleIcon.style.display = "block";
  }
}

// gestion de l'affichage de la navbar

let prevScrollPos = window.pageYOffset;

function fixedNav() {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.querySelector(".navbar");


  if (currentScrollPos < prevScrollPos) {
    navbar.classList.add("fixed-top");
    navbar.classList.add("navbar-spawn");
  } else {
    navbar.classList.remove("fixed-top");
    navbar.classList.remove("navbar-spawn");
  }

  prevScrollPos = currentScrollPos;
}

window.addEventListener("scroll", fixedNav);
