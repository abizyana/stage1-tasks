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

let fullScreen = document.querySelector(".fullscreen");
fullScreen.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.body.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
