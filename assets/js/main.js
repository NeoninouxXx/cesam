const navbarToggleButton = document.querySelector(".navbar-toggler");
const navbarToggleIcon = document.querySelector(".navbar-toggler-icon");
const iconClose = document.querySelector(".close");
let toggle = false;


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
