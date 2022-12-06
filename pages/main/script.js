// declarations
const cards = document.querySelectorAll(".testimonials-cards");
const progress = document.getElementById("progress");
const testimonials = document.querySelector("testimonials");

// pop-up
cards.forEach((el) => {
  el.addEventListener("click", (e) => {
    // console.log(e.currentTarget);

    drawModal(el);
  });
});

function drawModal(elementNode) {
  // cross X
  const line1 = document.createElement("div");
  const line2 = document.createElement("div");
  line1.style.width = line2.style.width = "19px";
  line1.style.height = line2.style.height = "2px";
  line1.style.borderRadius = line2.style.borderRadius = "2px";
  line1.style.background = line2.style.background = "rgb(254, 210, 144)";
  line1.style.transform = "rotate(45deg)";
  line2.style.transform = "rotate(-45deg)";
  line1.style.position = line2.style.position = "absolute";

  const crossBox = document.createElement("div");
  crossBox.style.position = "absolute";
  crossBox.style.top = "20px";
  crossBox.style.right = "30px";
  crossBox.style.cursor = "pointer";

  crossBox.appendChild(line1);
  crossBox.appendChild(line2);

  crossBox.addEventListener("click", (e) => {
    document.body.removeChild(background);
  });
  /////
  const modal = document.createElement("div");
  modal.className = "modal";
  const cloneEl = elementNode.cloneNode(true);
  cloneEl.style.transform = "unset";
  modal.appendChild(cloneEl);

  const modalContainer = document.createElement("div");
  modalContainer.className = "modal-container";
  modalContainer.style.position = "relative";
  modalContainer.style.padding = "20px 36px 17px 17px";
  modalContainer.appendChild(modal);
  modalContainer.appendChild(crossBox);
  modalContainer.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  const background = document.createElement("div");
  background.className = "background";
  background.appendChild(modalContainer);

  background.addEventListener("click", (e) => {
    document.body.removeChild(background);
    e.stopPropagation();
  });

  document.body.appendChild(background);
}

// add random testimonials comments
const clonedTestimonCard = cards[0].cloneNode(true);
console.log(clonedTestimonCard);
console.log(clonedTestimonCard.firstChild);

progress.addEventListener("input", (e) => {
  // console.log(e.target.value);

  cards.forEach((el) => {
    el.style.transform = `translateX(-${parseInt(
      (267.5 + 30) * e.target.value
    )}px)`;
  });
});

// Burger menu

const burger = document.getElementById("burger-wrapper");
const burgerMenu = document.getElementById("menu");
const burgerLine = document.querySelectorAll(".line");

burger.addEventListener("click", (e) => {
  burgerMenu.classList.toggle("show-menu");
  burgerLine.forEach((line) => line.classList.toggle("black"));
  burgerLine.forEach((line) => line.classList.toggle("close-btn"));
});
