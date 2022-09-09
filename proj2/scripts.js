const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const pink = document.querySelector(".pink");
const orange = document.querySelector(".orange");

const center = document.getElementsByClassName("center");

const getBGColor = (SelectedElement) => {
  return window.getComputedStyle(SelectedElement).backgroundColor;
};

var color = getBGColor(red);

// red.addEventListener("mouseenter", () => {
//   center[0].style.background = color;
// });

const changecolor = (element, color) => {
  return element.addEventListener("mouseenter", () => {
    center[0].style.background = color;
  });
};

changecolor(red, getBGColor(red));
changecolor(cyan, getBGColor(cyan));
changecolor(pink, getBGColor(pink));
changecolor(orange, getBGColor(orange));
changecolor(violet, getBGColor(violet));

window.addEventListener("mousemove", () => {
  let mousex = event.clientX;
  let mousey = event.clientY;
  //   console.log([mousex, mousey]);
  console.log(center[0].style);
  center[0].style.top = mousex;
  center[0].style.bottom = mousey;
  console.log(center[0].style.positionX);
  console.log(center[0].style.positionY);
  //   center[0].style.top = mousex;
  //   center[0].style.left = mousey;
});
