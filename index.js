document.addEventListener("DOMContentLoaded", () => {
    // const menuBtn = document.getElementById("hamburger");
    const menuBtn = document.getElementById("menu-icon");

    const sideMenu = document.getElementById("side-menu");
    const topbar = document.getElementById("bar1");
    const midbar = document.getElementById("bar3");
    const btmbar = document.getElementById("bar4");

    const toggleDropdown = function () {
      sideMenu.classList.toggle("show");
      menuBtn.classList.toggle("hide-menu")
      topbar.classList.toggle("top-close");
      midbar.classList.toggle("mid-close");
      btmbar.classList.toggle("btm-close");
    };

    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleDropdown();
    });

    document.documentElement.addEventListener("click", function () {
      if (sideMenu.classList.contains("show")) {
        toggleDropdown();
      }
    });

  })
