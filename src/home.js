export default function loadHome() {
  const ul = document.querySelector("ul");
  ul.childNodes[0].classList.remove("hidden");
  ul.childNodes[1].classList.add("hidden");
  ul.childNodes[2].classList.add("hidden");
  const contentContainer = document.querySelector(".contentContainer");
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("homeContainer");
  const mainImage = document.createElement("img");
  const h2 = document.createElement("h2");
  const div = document.createElement("div");
  contentContainer.innerHTML = "";
  mainImage.src = "../src/teyvat-main-page.jpg";
  mainImage.classList.add("home-img");
  h2.textContent = "Welcome to Wamin Restaurant, Restaurant for All People";
  div.classList.add("home-text");
  div.textContent =
    "Located in Liyue Harbor, Owned by Chef Mao, this is the place to visit. A famous restaurant known in Chichu Rock. Some say the goal of this restaurent is to keep everyone on earth well fedd, while others believe that it strives to unify all the regional cuisines of the world. Either way, with its unique dishes, Wanmin Restaurant is surely a place worth visiting. If you reallu don't have time, why not grab some takout?";
  contentContainer.appendChild(homeContainer);
  homeContainer.append(mainImage, h2, div);
}
