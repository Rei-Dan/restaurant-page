export default function loadContact() {
  const ul = document.querySelector("ul");
  ul.childNodes[0].classList.add("hidden");
  ul.childNodes[1].classList.add("hidden");
  ul.childNodes[2].classList.remove("hidden");
  const contentContainer = document.querySelector(".contentContainer");

  contentContainer.innerHTML = "";
}
