import menu from "./menu.json";
console.log(menu);
import menuItemTemplate from "./menu-item.hbs";
const menuList = document.querySelector(".menu-list");
const item = menuItemTemplate(menu);
menuList.insertAdjacentHTML("afterbegin", item);