const arrow = document.querySelectorAll(".arrow");
const dropDown = document.querySelectorAll(".drop-down");
const header = document.querySelectorAll('h4');
const para = document.querySelectorAll("p");


console.log(dropDown)
console.log(para);

function displayBlock(elementPara, elementArrow) {
  elementPara.style.display = "block";
  elementArrow.style.transform = "rotate(180deg)";
}

function displayNone(elementPara, elementArrow) {
  elementPara.style.display = "none";
  elementArrow.style.transform = "rotate(0deg)";
}

for (let i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener('click', () => {
    if (para[i].style.display == "" || para[i].style.display == "none") {
      displayBlock(para[i], arrow[i])
    }
    else {
      displayNone(para[i], arrow[i]);
    }

  })
}



