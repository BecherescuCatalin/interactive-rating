const btn = document.querySelector(".btn");
const main = document.querySelectorAll(".main");
const boxes = document.querySelectorAll(".box");
const rate = document.querySelector(".rate");
btn.addEventListener("click", function () {
  main[0].classList.add("hidden");
  main[1].classList.remove("hidden");
});
boxes.forEach((box) =>
  box.addEventListener("click", function () {
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i] != box) {
        boxes[i].classList.remove("selected");
      } else {
        boxes[i].classList.add("selected");
      }
    }

    const id = parseInt(box.getAttribute("id")) + 1;
    rate.innerHTML = `You selected ${id} out of 5`;
  })
);
