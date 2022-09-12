const closeIcone = document.querySelector(".bi-x-lg");
const openIcone = document.querySelector(".navbar-toggler-icon");
closeIcone.style.display = "none";

closeIcone.addEventListener("click", () => {
  closeIcone.style.display = "none";
  openIcone.style.display = "block";
});

openIcone.addEventListener("click", () => {
  closeIcone.style.display = "block";
  openIcone.style.display = "none";
});
