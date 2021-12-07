/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {
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


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome() {
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


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
  const ul = document.querySelector("ul");
  ul.childNodes[0].classList.add("hidden");
  ul.childNodes[1].classList.remove("hidden");
  ul.childNodes[2].classList.add("hidden");

  const contentContainer = document.querySelector(".contentContainer");
  const menuItems = document.createElement("div");
  contentContainer.innerHTML = "";
  contentContainer.appendChild(menuItems);
  menuItems.classList.add("menu-items");

  const menuItemFactory = (name, price, description, img) => {
    return { name, price, description, img };
  };

  const jueyunChiliChicken = menuItemFactory(
    "Jueyun Chili Chicken",
    2500,
    "Cold chicken mixed in dressings. The finesse technique used in mixing the dish retained the freshness of the delightful juice contained within the chicken. The glowing gold chicken skin hides a mildly hot flavor underneath.",
    "../src/jueyunchilichicken.png"
  );

  const jadeParcels = menuItemFactory(
    "Jade Parcels",
    5000,
    "An exquisite-looking dish. The ham's sweetness is locked inside the fresh vegetables, drizzled with a spicy broth. Delicious is an understatement.",
    "../src/jadeparcels.png"
  );

  const chickenMushroomSkewer = menuItemFactory(
    "Chicken Mushroom Skewer",
    450,
    "A skewer of mushrooms and poultry. Fresh poultry is complimented by fragrant mushrooms. Don't be picky, chow down!",
    "../src/chickenmushroomskewer.png"
  );
  const FishermansToast = menuItemFactory(
    "Fisherman's Toast",
    1050,
    "A skewer of mushrooms and poultry. Fresh poultry is complimented by fragrant mushrooms. Don't be picky, chow down!",
    "../src/fishermanstoast.png"
  );
  const menuArray = [
    jueyunChiliChicken,
    jadeParcels,
    chickenMushroomSkewer,
    FishermansToast,
  ];

  function addMenuItems(array) {
    for (let i = 0; i < array.length; i++) {
      const menuItem = document.createElement("div");
      const menuImage = document.createElement("img");
      menuImage.classList.add("menu-img");
      const menuTitle = document.createElement("div");
      menuTitle.classList.add("menu-title");
      const menuDesc = document.createElement("div");
      menuDesc.classList.add("menu-desc");
      const menuPrice = document.createElement("div");
      menuPrice.classList.add("menu-price");
      const moraImg = document.createElement("img");
      moraImg.src = "../src/mora.png";
      moraImg.classList.add("mora-img");
      menuImage.src = menuArray[i].img;
      menuTitle.textContent = menuArray[i].name;
      menuDesc.textContent = menuArray[i].description;
      menuPrice.textContent = menuArray[i].price;
      menuItem.classList.add("menu-item");
      menuPrice.append(moraImg);
      menuItem.append(menuImage, menuTitle, menuDesc, menuPrice);
      menuItems.appendChild(menuItem);
    }
  }
  addMenuItems(menuArray);
}


/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
function pageLoad() {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();

const ul = document.querySelector("ul");
ul.childNodes[0].addEventListener("click", _home__WEBPACK_IMPORTED_MODULE_1__["default"]);
ul.childNodes[1].addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_2__["default"]);
ul.childNodes[2].addEventListener("click", _contact__WEBPACK_IMPORTED_MODULE_3__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDN0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDSjtBQUNBO0FBQ007QUFDcEMscURBQVE7QUFDUixpREFBUTs7QUFFUjtBQUNBLDJDQUEyQyw2Q0FBUTtBQUNuRCwyQ0FBMkMsNkNBQVE7QUFDbkQsMkNBQTJDLGdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG4gIHVsLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgdWwuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB1bC5jaGlsZE5vZGVzWzJdLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRDb250YWluZXJcIik7XG5cbiAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1oZWFkZXJcIik7XG4gIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3Qgb3VyIENoZWZzIVwiO1xuICBjb25zdCByZXN0YXVyYW50SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgcmVzdGF1cmFudEltZy5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudC1pbWdcIik7XG4gIHJlc3RhdXJhbnRJbWcuc3JjID0gXCIuLi9zcmMvd2FubWluLXJlc3RhdXJhbnQucG5nXCI7XG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGFjdEhlYWRlciwgY29udGFjdENvbnRhaW5lcik7XG4gIGNvbnN0IGNvbnRhY3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0Qm94LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWluZm9cIik7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kKGNvbnRhY3RCb3gpO1xuICBjb25zdCBkZXNjQ29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjQ29udGFjdFRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiT3VyIHJlbm93bmVkIG93bmVyLCBjaGVmIE1hbyBhbmQgaGlzIGRhdWdodGVyLCBYaWFubGluZywgd2lubmVyIG9mIHRoaXMgeWVhcnMgTW9vbmNoYXNlIEZlc3RpdmFsIENvb2tpbmcgY29tcGV0aXRpb24sIHdpbGwgZ2xhZGx5IHRha2UgeW91ciBvcmRlciBvciBhbnN3ZXIgYW55IG9mIHlvdXIgZm9vZCByZWxhdGVkIHF1ZXN0aW9ucyEgXCI7XG4gIGRlc2NDb250YWN0VGV4dC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC10ZXh0XCIpO1xuICBjb250YWN0Qm94LmFwcGVuZChyZXN0YXVyYW50SW1nLCBkZXNjQ29udGFjdFRleHQpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xuICB1bC5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIHVsLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgdWwuY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50Q29udGFpbmVyXCIpO1xuICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZUNvbnRhaW5lclwiKTtcbiAgY29uc3QgbWFpbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgbWFpbkltYWdlLnNyYyA9IFwiLi4vc3JjL3RleXZhdC1tYWluLXBhZ2UuanBnXCI7XG4gIG1haW5JbWFnZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1pbWdcIik7XG4gIGgyLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIFdhbWluIFJlc3RhdXJhbnQsIFJlc3RhdXJhbnQgZm9yIEFsbCBQZW9wbGVcIjtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJob21lLXRleHRcIik7XG4gIGRpdi50ZXh0Q29udGVudCA9XG4gICAgXCJMb2NhdGVkIGluIExpeXVlIEhhcmJvciwgT3duZWQgYnkgQ2hlZiBNYW8sIHRoaXMgaXMgdGhlIHBsYWNlIHRvIHZpc2l0LiBBIGZhbW91cyByZXN0YXVyYW50IGtub3duIGluIENoaWNodSBSb2NrLiBTb21lIHNheSB0aGUgZ29hbCBvZiB0aGlzIHJlc3RhdXJlbnQgaXMgdG8ga2VlcCBldmVyeW9uZSBvbiBlYXJ0aCB3ZWxsIGZlZGQsIHdoaWxlIG90aGVycyBiZWxpZXZlIHRoYXQgaXQgc3RyaXZlcyB0byB1bmlmeSBhbGwgdGhlIHJlZ2lvbmFsIGN1aXNpbmVzIG9mIHRoZSB3b3JsZC4gRWl0aGVyIHdheSwgd2l0aCBpdHMgdW5pcXVlIGRpc2hlcywgV2FubWluIFJlc3RhdXJhbnQgaXMgc3VyZWx5IGEgcGxhY2Ugd29ydGggdmlzaXRpbmcuIElmIHlvdSByZWFsbHUgZG9uJ3QgaGF2ZSB0aW1lLCB3aHkgbm90IGdyYWIgc29tZSB0YWtvdXQ/XCI7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kKG1haW5JbWFnZSwgaDIsIGRpdik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG4gIHVsLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgdWwuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB1bC5jaGlsZE5vZGVzWzJdLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudENvbnRhaW5lclwiKTtcbiAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtcyk7XG4gIG1lbnVJdGVtcy5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtc1wiKTtcblxuICBjb25zdCBtZW51SXRlbUZhY3RvcnkgPSAobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBpbWcpID0+IHtcbiAgICByZXR1cm4geyBuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIGltZyB9O1xuICB9O1xuXG4gIGNvbnN0IGp1ZXl1bkNoaWxpQ2hpY2tlbiA9IG1lbnVJdGVtRmFjdG9yeShcbiAgICBcIkp1ZXl1biBDaGlsaSBDaGlja2VuXCIsXG4gICAgMjUwMCxcbiAgICBcIkNvbGQgY2hpY2tlbiBtaXhlZCBpbiBkcmVzc2luZ3MuIFRoZSBmaW5lc3NlIHRlY2huaXF1ZSB1c2VkIGluIG1peGluZyB0aGUgZGlzaCByZXRhaW5lZCB0aGUgZnJlc2huZXNzIG9mIHRoZSBkZWxpZ2h0ZnVsIGp1aWNlIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGNoaWNrZW4uIFRoZSBnbG93aW5nIGdvbGQgY2hpY2tlbiBza2luIGhpZGVzIGEgbWlsZGx5IGhvdCBmbGF2b3IgdW5kZXJuZWF0aC5cIixcbiAgICBcIi4uL3NyYy9qdWV5dW5jaGlsaWNoaWNrZW4ucG5nXCJcbiAgKTtcblxuICBjb25zdCBqYWRlUGFyY2VscyA9IG1lbnVJdGVtRmFjdG9yeShcbiAgICBcIkphZGUgUGFyY2Vsc1wiLFxuICAgIDUwMDAsXG4gICAgXCJBbiBleHF1aXNpdGUtbG9va2luZyBkaXNoLiBUaGUgaGFtJ3Mgc3dlZXRuZXNzIGlzIGxvY2tlZCBpbnNpZGUgdGhlIGZyZXNoIHZlZ2V0YWJsZXMsIGRyaXp6bGVkIHdpdGggYSBzcGljeSBicm90aC4gRGVsaWNpb3VzIGlzIGFuIHVuZGVyc3RhdGVtZW50LlwiLFxuICAgIFwiLi4vc3JjL2phZGVwYXJjZWxzLnBuZ1wiXG4gICk7XG5cbiAgY29uc3QgY2hpY2tlbk11c2hyb29tU2tld2VyID0gbWVudUl0ZW1GYWN0b3J5KFxuICAgIFwiQ2hpY2tlbiBNdXNocm9vbSBTa2V3ZXJcIixcbiAgICA0NTAsXG4gICAgXCJBIHNrZXdlciBvZiBtdXNocm9vbXMgYW5kIHBvdWx0cnkuIEZyZXNoIHBvdWx0cnkgaXMgY29tcGxpbWVudGVkIGJ5IGZyYWdyYW50IG11c2hyb29tcy4gRG9uJ3QgYmUgcGlja3ksIGNob3cgZG93biFcIixcbiAgICBcIi4uL3NyYy9jaGlja2VubXVzaHJvb21za2V3ZXIucG5nXCJcbiAgKTtcbiAgY29uc3QgRmlzaGVybWFuc1RvYXN0ID0gbWVudUl0ZW1GYWN0b3J5KFxuICAgIFwiRmlzaGVybWFuJ3MgVG9hc3RcIixcbiAgICAxMDUwLFxuICAgIFwiQSBza2V3ZXIgb2YgbXVzaHJvb21zIGFuZCBwb3VsdHJ5LiBGcmVzaCBwb3VsdHJ5IGlzIGNvbXBsaW1lbnRlZCBieSBmcmFncmFudCBtdXNocm9vbXMuIERvbid0IGJlIHBpY2t5LCBjaG93IGRvd24hXCIsXG4gICAgXCIuLi9zcmMvZmlzaGVybWFuc3RvYXN0LnBuZ1wiXG4gICk7XG4gIGNvbnN0IG1lbnVBcnJheSA9IFtcbiAgICBqdWV5dW5DaGlsaUNoaWNrZW4sXG4gICAgamFkZVBhcmNlbHMsXG4gICAgY2hpY2tlbk11c2hyb29tU2tld2VyLFxuICAgIEZpc2hlcm1hbnNUb2FzdCxcbiAgXTtcblxuICBmdW5jdGlvbiBhZGRNZW51SXRlbXMoYXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBtZW51SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgbWVudUltYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnUtdGl0bGVcIik7XG4gICAgICBjb25zdCBtZW51RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtZW51RGVzYy5jbGFzc0xpc3QuYWRkKFwibWVudS1kZXNjXCIpO1xuICAgICAgY29uc3QgbWVudVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG1lbnVQcmljZS5jbGFzc0xpc3QuYWRkKFwibWVudS1wcmljZVwiKTtcbiAgICAgIGNvbnN0IG1vcmFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgbW9yYUltZy5zcmMgPSBcIi4uL3NyYy9tb3JhLnBuZ1wiO1xuICAgICAgbW9yYUltZy5jbGFzc0xpc3QuYWRkKFwibW9yYS1pbWdcIik7XG4gICAgICBtZW51SW1hZ2Uuc3JjID0gbWVudUFycmF5W2ldLmltZztcbiAgICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IG1lbnVBcnJheVtpXS5uYW1lO1xuICAgICAgbWVudURlc2MudGV4dENvbnRlbnQgPSBtZW51QXJyYXlbaV0uZGVzY3JpcHRpb247XG4gICAgICBtZW51UHJpY2UudGV4dENvbnRlbnQgPSBtZW51QXJyYXlbaV0ucHJpY2U7XG4gICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgICAgbWVudVByaWNlLmFwcGVuZChtb3JhSW1nKTtcbiAgICAgIG1lbnVJdGVtLmFwcGVuZChtZW51SW1hZ2UsIG1lbnVUaXRsZSwgbWVudURlc2MsIG1lbnVQcmljZSk7XG4gICAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgIH1cbiAgfVxuICBhZGRNZW51SXRlbXMobWVudUFycmF5KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIGZ1bmN0aW9uIGFkZExpKG51bSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgbGkuaWQgPSBcImxpXCIgKyBpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgaDEudGV4dENvbnRlbnQgPSBcIldhbm1pbiBSZXN0YXVyYW50XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcbiAgbmF2LmFwcGVuZENoaWxkKHVsKTtcblxuICBhZGRMaSgzKTtcblxuICB1bC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIHVsLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgdWwuY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29udGFpbmVyXCIpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4vcGFnZUxvYWRcIjtcbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbnBhZ2VMb2FkKCk7XG5sb2FkSG9tZSgpO1xuXG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcbnVsLmNoaWxkTm9kZXNbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRIb21lKTtcbnVsLmNoaWxkTm9kZXNbMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRNZW51KTtcbnVsLmNoaWxkTm9kZXNbMl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRDb250YWN0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==