export default function loadContact() {
  const ul = document.querySelector("ul");
  ul.childNodes[0].classList.add("hidden");
  ul.childNodes[1].classList.add("hidden");
  ul.childNodes[2].classList.remove("hidden");
  const contentContainer = document.querySelector(".contentContainer");

  contentContainer.innerHTML = "";
  const contactHeader = document.createElement("div");
  contactHeader.classList.add("contact-header");
  contactHeader.textContent = "Contact our Chefs!";
  const restaurantImg = document.createElement("img");
  restaurantImg.classList.add("restaurant-img");
  restaurantImg.src = "../src/wanmin-restaurant.png";
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  contentContainer.append(contactHeader, contactContainer);
  const contactBox = document.createElement("div");
  contactBox.classList.add("contact-info");
  contactContainer.append(contactBox);
  const descContactText = document.createElement("div");
  descContactText.textContent =
    "Our renowned owner, chef Mao and his daughter, Xianling, winner of this years Moonchase Festival Cooking competition, will gladly take your order or answer any of your food related questions! ";
  descContactText.classList.add("contact-text");
  contactBox.append(restaurantImg, descContactText);
}
