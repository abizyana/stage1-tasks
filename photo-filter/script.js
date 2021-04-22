const inputs = document.querySelectorAll(".filters label");

inputs.forEach((input) => input.addEventListener("input", handleUpdate));

function handleUpdate() {
  let input = this.querySelector("input");
  this.querySelector("output").value = input.value;

  let suffix = input.dataset.sizing || "";
  document.documentElement.style.setProperty(
    "--" + input.getAttribute("name"),
    input.value + suffix
  );
}

const resetBtn = document.querySelector(".btn-reset");
resetBtn.addEventListener("click", reset);

function reset() {
  inputs.forEach(
    (input) =>
      (input.querySelector("input").value = input
        .querySelector("input")
        .getAttribute("value"))
  );
  inputs.forEach(
    (input) =>
      (input.querySelector("output").value = input
        .querySelector("input")
        .getAttribute("value"))
  );
  document.documentElement.style.setProperty("--blur", "0px");
  document.documentElement.style.setProperty("--invert", "0%");
  document.documentElement.style.setProperty("--sepia", "0%");
  document.documentElement.style.setProperty("--saturate", "100%");
  document.documentElement.style.setProperty("--hue", "0deg");
}

let baseUrl = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${checkDayTime()}/`;
const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
];

let img = document.querySelector("img");
let nextImageBtn = document.querySelector(".btn-next");
nextImageBtn.addEventListener("click", nextImage);

let i = 0;
function nextImage() {
  const loadedImage = new Image();
  index = i % images.length;
  loadedImage.src = baseUrl + images[index];

  loadedImage.onload = () => {
    img.setAttribute("src", baseUrl + images[index]);
  };
  i++;
}

function checkDayTime() {
  let currentDate = new Date();
  let dayTime = "day";
  if (currentDate.getHours() >= 6 && currentDate.getHours() < 12) {
    dayTime = "morning";
  } else if (currentDate.getHours() >= 12 && currentDate.getHours() < 18) {
    dayTime = "day";
  } else if (currentDate.getHours() >= 18 && currentDate.getHours() < 24) {
    dayTime = "evening";
  } else if (currentDate.getHours() >= 0 && currentDate.getHours() < 6) {
    dayTime = "night";
  }

  return dayTime;
}

let fullScreen = document.querySelector(".fullscreen");
fullScreen.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.body.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
