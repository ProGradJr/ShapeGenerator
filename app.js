let button = document.getElementById("button");
var numberInTheShape = 1;
var oldValue = 0;

button.onclick = () => {
  let n = document.getElementById("number").value;
  const circle = document.getElementById("circle");
  const square = document.getElementById("square");
  const rect = document.getElementById("rectangle");
  const $box = document.getElementById("box");
  let j;
  // console.log(choice)
  n = Number(oldValue) + Number(n);
  // console.log(n);
  for (let j = numberInTheShape; j <= n; j++) {
    var box = document.createElement("div");
    box.innerHTML += numberInTheShape;
    if (square.checked) {
      box.classList.add("square");
      $box.appendChild(box);
    } else if (circle.checked) {
      box.classList.add("circle");
      $box.appendChild(box);
    } else if (rect.checked) {
      box.classList.add("rectangle");
      $box.appendChild(box);
    } else {
      document.write("invalid Input");
    }
    numberInTheShape++;
    oldValue = document.getElementById("box").lastElementChild.innerHTML;
  }
};
