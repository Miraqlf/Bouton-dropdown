const dropdown = document.querySelector(".dropdown");
const blockLinks = document.querySelector(".block-links");
const Btndrop = document.querySelector(".btn-top");
const item = document.querySelectorAll(".dropdown li");

let ToggleIndex;

Btndrop.addEventListener("click", toggleDropDown);

function toggleDropDown() {
  if (!ToggleIndex) {
    blockLinks.style.height = `${blockLinks.scrollHeight}px`;
    ToggleIndex = true;
    return;
  }
  blockLinks.style.height = 0;
  ToggleIndex = false;
}

item.forEach((li) => li.addEventListener("click", toggleDropDown));
