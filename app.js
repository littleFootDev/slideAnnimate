const btnRight = document.querySelector(".btn-next");
const btnLeft = document.querySelector(".btn-prev");
const container = document.querySelector(".container");
const allSlides = Array.from(document.querySelector(".slide"));
const indexIndic = document.querySelector(".counter span:nth-child(1");

let index = 0;

function aninRight() {
  const TLRIGHT = gsap.timeline();

  TLRIGHT.set(indexIndic, { innerText: index + 1 }).to(allSlides[index], {
    duration: 0.6,
    x: 0,
  });
}
function aninLeft() {
  const TLLEFT = gsap.timeline();

  TLLEFT.set(indexIndic, { innerText: index }).to(allSlides[index], {
    duration: 0.6,
    x: "-100%",
  });
}

const negation = gsap.to(container, {
  paused: true,
  keyframes: [
    { duration: 0.1, x: -4 },
    { duration: 0.1, x: 4 },
    { duration: 0.1, x: -4 },
    { duration: 0.1, x: -0 },
  ],
});

function handleDirection(direction) {
  if (direction === "next") {
    if (index === 2) {
      negation.seek(0);
      negation.play();
      return;
    }
    index++;
    aninRight();
  } else if (direction === "next") {
    if (index === 0) {
      negation.seek(0);
      negation.play();
      return;
    }
    aninLeft();
    index--;
  }
}

btnRight.addEventListener("click", () => {
  handleDirection("next");
});

btnRight.addEventListener("click", () => {
  handleDirection("prev");
});