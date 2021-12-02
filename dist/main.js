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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ0o7QUFDQTtBQUNNO0FBQ3BDLHFEQUFRO0FBQ1IsaURBQVE7O0FBRVI7QUFDQSwyQ0FBMkMsNkNBQVE7QUFDbkQsMkNBQTJDLDZDQUFRO0FBQ25ELDJDQUEyQyxnREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xuICB1bC5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIHVsLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgdWwuY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50Q29udGFpbmVyXCIpO1xuXG4gIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcbiAgdWwuY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB1bC5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIHVsLmNoaWxkTm9kZXNbMl0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudENvbnRhaW5lclwiKTtcbiAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWVDb250YWluZXJcIik7XG4gIGNvbnN0IG1haW5JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIG1haW5JbWFnZS5zcmMgPSBcIi4uL3NyYy90ZXl2YXQtbWFpbi1wYWdlLmpwZ1wiO1xuICBtYWluSW1hZ2UuY2xhc3NMaXN0LmFkZChcImhvbWUtaW1nXCIpO1xuICBoMi50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBXYW1pbiBSZXN0YXVyYW50LCBSZXN0YXVyYW50IGZvciBBbGwgUGVvcGxlXCI7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiaG9tZS10ZXh0XCIpO1xuICBkaXYudGV4dENvbnRlbnQgPVxuICAgIFwiTG9jYXRlZCBpbiBMaXl1ZSBIYXJib3IsIE93bmVkIGJ5IENoZWYgTWFvLCB0aGlzIGlzIHRoZSBwbGFjZSB0byB2aXNpdC4gQSBmYW1vdXMgcmVzdGF1cmFudCBrbm93biBpbiBDaGljaHUgUm9jay4gU29tZSBzYXkgdGhlIGdvYWwgb2YgdGhpcyByZXN0YXVyZW50IGlzIHRvIGtlZXAgZXZlcnlvbmUgb24gZWFydGggd2VsbCBmZWRkLCB3aGlsZSBvdGhlcnMgYmVsaWV2ZSB0aGF0IGl0IHN0cml2ZXMgdG8gdW5pZnkgYWxsIHRoZSByZWdpb25hbCBjdWlzaW5lcyBvZiB0aGUgd29ybGQuIEVpdGhlciB3YXksIHdpdGggaXRzIHVuaXF1ZSBkaXNoZXMsIFdhbm1pbiBSZXN0YXVyYW50IGlzIHN1cmVseSBhIHBsYWNlIHdvcnRoIHZpc2l0aW5nLiBJZiB5b3UgcmVhbGx1IGRvbid0IGhhdmUgdGltZSwgd2h5IG5vdCBncmFiIHNvbWUgdGFrb3V0P1wiO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xuICBob21lQ29udGFpbmVyLmFwcGVuZChtYWluSW1hZ2UsIGgyLCBkaXYpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xuICB1bC5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIHVsLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgdWwuY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRDb250YWluZXJcIik7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbXNcIik7XG5cbiAgY29uc3QgbWVudUl0ZW1GYWN0b3J5ID0gKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiwgaW1nKSA9PiB7XG4gICAgcmV0dXJuIHsgbmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBpbWcgfTtcbiAgfTtcblxuICBjb25zdCBqdWV5dW5DaGlsaUNoaWNrZW4gPSBtZW51SXRlbUZhY3RvcnkoXG4gICAgXCJKdWV5dW4gQ2hpbGkgQ2hpY2tlblwiLFxuICAgIDI1MDAsXG4gICAgXCJDb2xkIGNoaWNrZW4gbWl4ZWQgaW4gZHJlc3NpbmdzLiBUaGUgZmluZXNzZSB0ZWNobmlxdWUgdXNlZCBpbiBtaXhpbmcgdGhlIGRpc2ggcmV0YWluZWQgdGhlIGZyZXNobmVzcyBvZiB0aGUgZGVsaWdodGZ1bCBqdWljZSBjb250YWluZWQgd2l0aGluIHRoZSBjaGlja2VuLiBUaGUgZ2xvd2luZyBnb2xkIGNoaWNrZW4gc2tpbiBoaWRlcyBhIG1pbGRseSBob3QgZmxhdm9yIHVuZGVybmVhdGguXCIsXG4gICAgXCIuLi9zcmMvanVleXVuY2hpbGljaGlja2VuLnBuZ1wiXG4gICk7XG5cbiAgY29uc3QgamFkZVBhcmNlbHMgPSBtZW51SXRlbUZhY3RvcnkoXG4gICAgXCJKYWRlIFBhcmNlbHNcIixcbiAgICA1MDAwLFxuICAgIFwiQW4gZXhxdWlzaXRlLWxvb2tpbmcgZGlzaC4gVGhlIGhhbSdzIHN3ZWV0bmVzcyBpcyBsb2NrZWQgaW5zaWRlIHRoZSBmcmVzaCB2ZWdldGFibGVzLCBkcml6emxlZCB3aXRoIGEgc3BpY3kgYnJvdGguIERlbGljaW91cyBpcyBhbiB1bmRlcnN0YXRlbWVudC5cIixcbiAgICBcIi4uL3NyYy9qYWRlcGFyY2Vscy5wbmdcIlxuICApO1xuXG4gIGNvbnN0IGNoaWNrZW5NdXNocm9vbVNrZXdlciA9IG1lbnVJdGVtRmFjdG9yeShcbiAgICBcIkNoaWNrZW4gTXVzaHJvb20gU2tld2VyXCIsXG4gICAgNDUwLFxuICAgIFwiQSBza2V3ZXIgb2YgbXVzaHJvb21zIGFuZCBwb3VsdHJ5LiBGcmVzaCBwb3VsdHJ5IGlzIGNvbXBsaW1lbnRlZCBieSBmcmFncmFudCBtdXNocm9vbXMuIERvbid0IGJlIHBpY2t5LCBjaG93IGRvd24hXCIsXG4gICAgXCIuLi9zcmMvY2hpY2tlbm11c2hyb29tc2tld2VyLnBuZ1wiXG4gICk7XG4gIGNvbnN0IEZpc2hlcm1hbnNUb2FzdCA9IG1lbnVJdGVtRmFjdG9yeShcbiAgICBcIkZpc2hlcm1hbidzIFRvYXN0XCIsXG4gICAgMTA1MCxcbiAgICBcIkEgc2tld2VyIG9mIG11c2hyb29tcyBhbmQgcG91bHRyeS4gRnJlc2ggcG91bHRyeSBpcyBjb21wbGltZW50ZWQgYnkgZnJhZ3JhbnQgbXVzaHJvb21zLiBEb24ndCBiZSBwaWNreSwgY2hvdyBkb3duIVwiLFxuICAgIFwiLi4vc3JjL2Zpc2hlcm1hbnN0b2FzdC5wbmdcIlxuICApO1xuICBjb25zdCBtZW51QXJyYXkgPSBbXG4gICAganVleXVuQ2hpbGlDaGlja2VuLFxuICAgIGphZGVQYXJjZWxzLFxuICAgIGNoaWNrZW5NdXNocm9vbVNrZXdlcixcbiAgICBGaXNoZXJtYW5zVG9hc3QsXG4gIF07XG5cbiAgZnVuY3Rpb24gYWRkTWVudUl0ZW1zKGFycmF5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgbWVudUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIG1lbnVJbWFnZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gICAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51LXRpdGxlXCIpO1xuICAgICAgY29uc3QgbWVudURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWVudURlc2MuY2xhc3NMaXN0LmFkZChcIm1lbnUtZGVzY1wiKTtcbiAgICAgIGNvbnN0IG1lbnVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtZW51UHJpY2UuY2xhc3NMaXN0LmFkZChcIm1lbnUtcHJpY2VcIik7XG4gICAgICBjb25zdCBtb3JhSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIG1vcmFJbWcuc3JjID0gXCIuLi9zcmMvbW9yYS5wbmdcIjtcbiAgICAgIG1vcmFJbWcuY2xhc3NMaXN0LmFkZChcIm1vcmEtaW1nXCIpO1xuICAgICAgbWVudUltYWdlLnNyYyA9IG1lbnVBcnJheVtpXS5pbWc7XG4gICAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBtZW51QXJyYXlbaV0ubmFtZTtcbiAgICAgIG1lbnVEZXNjLnRleHRDb250ZW50ID0gbWVudUFycmF5W2ldLmRlc2NyaXB0aW9uO1xuICAgICAgbWVudVByaWNlLnRleHRDb250ZW50ID0gbWVudUFycmF5W2ldLnByaWNlO1xuICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICAgIG1lbnVQcmljZS5hcHBlbmQobW9yYUltZyk7XG4gICAgICBtZW51SXRlbS5hcHBlbmQobWVudUltYWdlLCBtZW51VGl0bGUsIG1lbnVEZXNjLCBtZW51UHJpY2UpO1xuICAgICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICB9XG4gIH1cbiAgYWRkTWVudUl0ZW1zKG1lbnVBcnJheSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICBmdW5jdGlvbiBhZGRMaShudW0pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgIGxpLmlkID0gXCJsaVwiICsgaTtcbiAgICB9XG4gIH1cblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGgxLnRleHRDb250ZW50ID0gXCJXYW5taW4gUmVzdGF1cmFudFwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgYWRkTGkoMyk7XG5cbiAgdWwuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICB1bC5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIHVsLmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvbnRhaW5lclwiKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gXCIuL3BhZ2VMb2FkXCI7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5wYWdlTG9hZCgpO1xubG9hZEhvbWUoKTtcblxuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG51bC5jaGlsZE5vZGVzWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkSG9tZSk7XG51bC5jaGlsZE5vZGVzWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkTWVudSk7XG51bC5jaGlsZE5vZGVzWzJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkQ29udGFjdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=