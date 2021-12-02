export default function pageLoad() {
  const content = document.getElementById("content");
  const contentContainer = document.createElement("div");
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  function addLi(num) {
    for (let i = 0; i < num; i++) {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.id = "li" + i;
    }
  }

  content.appendChild(header);
  h1.textContent = "Wanmin Restaurant";
  header.appendChild(h1);
  content.appendChild(nav);
  nav.appendChild(ul);

  addLi(3);

  ul.childNodes[0].textContent = "Home";
  ul.childNodes[1].textContent = "Menu";
  ul.childNodes[2].textContent = "Contact";
  content.appendChild(contentContainer);
  contentContainer.classList.add("contentContainer");
}
