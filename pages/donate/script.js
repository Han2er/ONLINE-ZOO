const circleBtn = document.querySelectorAll(".circle-btn");

circleBtn.forEach((circle) =>
  circle.addEventListener("click", (e) => {
    circleBtn.forEach((cr) => cr.classList.remove("active-btn"));
    e.currentTarget.classList.add("active-btn");
  })
);

// amount max restriction
const amount = document.getElementById("amount");
amount.addEventListener("input", (e) => {
  if (e.target.value > 9999) e.target.value = "9999";
  else if (e.target.value < 0) e.target.value = 0;

  switch (e.target.value) {
    case "5000":
      circleBtn.forEach((cr) => cr.classList.remove("active-btn"));
      circleBtn[0].classList.add("active-btn");
      break;
    case "2000":
      circleBtn.forEach((cr) => cr.classList.remove("active-btn"));
      circleBtn[1].classList.add("active-btn");
      break;
    case "1000":
      circleBtn.forEach((cr) => cr.classList.remove("active-btn"));
      circleBtn[2].classList.add("active-btn");
      break;
    case "500":
      circleBtn.forEach((cr) => cr.classList.remove("active-btn"));
      circleBtn[3].classList.add("active-btn");
      break;
    case "250":
      circleBtn.forEach((cr) => cr.classList.remove("active-btn"));
      circleBtn[4].classList.add("active-btn");
      break;
    case "100":
      circleBtn.forEach((cr) => cr.classList.remove("active-btn"));
      circleBtn[5].classList.add("active-btn");
      break;
    case "50":
      circleBtn.forEach((cr) => cr.classList.remove("active-btn"));
      circleBtn[6].classList.add("active-btn");
      break;
    case "25":
      circleBtn.forEach((cr) => cr.classList.remove("active-btn"));
      circleBtn[7].classList.add("active-btn");
      break;

    default:
      break;
  }
});
