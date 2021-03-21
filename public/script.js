const btnSlider = document.querySelector("#button");
const menuSlider = document.querySelector(".menuSlider");

btnSlider.addEventListener("click", function () {
  menuSlider.classList.toggle("popx");
  menuSlider.classList.toggle("hidden");
});
