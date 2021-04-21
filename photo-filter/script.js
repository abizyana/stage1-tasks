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
