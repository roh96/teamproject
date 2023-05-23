const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const mainSlide = document.querySelector(".main-slide");
var slidesCount = 0;

setTimeout(() => {
  slidesCount = mainSlide.querySelectorAll("div").length;
}, 400);

let activeSlideIndex = 0;

// sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  // const height = container.clientHeight;
  const width = mainSlide.clientWidth;
  // 3=>5개 개수 변경시 count 다시 체크해주는 역할
  slidesCount = mainSlide.querySelectorAll("div").length;
  mainSlide.style.transform = `translateX(-${
    (activeSlideIndex * width) / slidesCount
  }px)`;
}

setInterval(() => {
  // mainSlide.style.transform = translateY(-${activeSlideIndex * height}px);
  changeSlide("up");
}, 3000);
