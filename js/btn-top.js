let goToTopBtn = document.getElementById("goToTopBtn");

window.addEventListener("scroll", function () {
  goToTopBtn.classList.toggle("show-go-to-top", window.scrollY > 250);
});
