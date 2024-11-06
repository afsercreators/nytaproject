const navButton = document.querySelector(".mobile-button");
const mobileView = document.getElementById("mobile-view");
const navClose = document.getElementById("nav-close-icon");

navButton.addEventListener("click", openNav);
navClose.addEventListener("click", closeNav);

function openNav() {
  mobileView.style.display = "block";
}
function closeNav() {
  mobileView.style.display = "none";
}
