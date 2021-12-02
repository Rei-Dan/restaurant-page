export default function loadMenu() {
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
