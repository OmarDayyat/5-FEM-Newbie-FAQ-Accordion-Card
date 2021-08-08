const arrow = document.querySelector(".arrow");
const dropDown = document.querySelector(".drop-down");
const hea = document.querySelector(".dropDown-question");
const para = document.querySelector(".para");




dropDown.addEventListener('click', () => {
  arrow.classList.toggle("show");
  hea.classList.toggle("shown");
  para.classList.toggle("hide");

  if (para.style.display === "none") {
    para.style.display = "block"
  }
})