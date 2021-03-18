const btnSlider = document.querySelector("#slider");
const menuSlider = document.querySelector(".menuSlider");

btnSlider.addEventListener("click", function () {
  menuSlider.classList.toggle("popx");
  menuSlider.classList.toggle("hidden");
});
