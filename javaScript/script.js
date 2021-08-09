const arrow = document.querySelectorAll(".arrow");
const dropDown = document.querySelectorAll(".drop-down");
const hea = document.querySelectorAll('h4');
const para = document.querySelectorAll("p");

console.log(dropDown)


var i;
var len = dropDown.length;

for (i = 0; i < len; i++) {
  dropDown[i].addEventListener('click', function () {
    arrow[i].classList.toggle('show');

  })
}



