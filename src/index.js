import "./styles/index.scss";

import { fadeIn, fadeOut } from "./scripts/helper";

document.addEventListener("DOMContentLoaded", () => {
  // Search Functions
  const searchTrigger = document.getElementById("search-trigger");
  const searchContainer = document.getElementById("search-container");
  if (searchTrigger) {
    searchTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      fadeIn(searchContainer);
      document.body.classList.add("disable-scroll");
    });
    document.getElementById("search-close").addEventListener("click", () => {
      fadeOut(searchContainer);
      document.body.classList.remove("disable-scroll");
    });
  }
  //   Menu Trigger Functions
  const menuTrigger = document.getElementById("menu-trigger");

  const hideMenu = (menu) => {
    menu.classList.remove("primary-menu--slide");
    document.body.classList.remove("disable-scroll");
    setTimeout(() => {
      menu.classList.remove("primary-menu--show");
    }, 500);
  };

  if (menuTrigger) {
    const primaryMenu = document.getElementById("primary-menu");

    menuTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      primaryMenu.classList.add("primary-menu--show", "primary-menu--slide");
      document.body.classList.add("disable-scroll");
      // Listen for close options
      document
        .getElementById("primary-menu-close")
        .addEventListener("click", () => {
          hideMenu(primaryMenu);
        });
    });

    document
      .getElementById("primary-menu-close-wrapper")
      .addEventListener("click", () => {
        hideMenu(primaryMenu);
      });
  }

  const menuItemsWithChildren = document.querySelectorAll(
    ".primary-menu__item--has-children"
  );
  const subMenus = document.querySelectorAll(".primary-menu__sub-menu");

  menuItemsWithChildren.forEach((item, index) => {
    item.addEventListener("click", () => {
      item.classList.toggle("open");
      // Note - Do something with this so it slides down nicely in the future
      subMenus[index].classList.toggle("primary-menu__sub-menu--open");
    });
  });
}); //End DOMContentLoaded
