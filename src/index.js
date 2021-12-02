import pageLoad from "./pageLoad";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
pageLoad();
loadHome();

const ul = document.querySelector("ul");
ul.childNodes[0].addEventListener("click", loadHome);
ul.childNodes[1].addEventListener("click", loadMenu);
ul.childNodes[2].addEventListener("click", loadContact);
