// Attempt to register event handlers, exit if expected dom elements are missing.
var registerEventHandlers = function () {

    // Elements.
    const navMenu = document.getElementById("nav-menu");
    const toggleNavButton = document.getElementById("toggle-nav-button");
    const mainContent = document.getElementById("main-content");
    const navMenuLinks = document.getElementsByClassName("nav-menu-link");
    const footer = document.getElementById("footer");
  
    // Short circuiting null check on all the elements.
    if (
      navMenu == null ||
      toggleNavButton == null ||
      mainContent == null ||
      footer == null ||
      navMenuLinks.length == 0
    ) {
      return;
    }
  
    // Nav menu function definitions.
    function openNav() {
      navMenu.classList.remove("-translate-x-[248px]");
      toggleNavButton.classList.add("translate-x-[248px]");
      mainContent.classList.add("md:ml-[300px]", "xl:ml-0");
      footer.classList.add("md:ml-[300px]", "xl:ml-0");
    }
  
    function closeNav() {
      navMenu.classList.add("-translate-x-[248px]");
      toggleNavButton.classList.remove("translate-x-[248px]");
      mainContent.classList.remove("md:ml-[300px]", "xl:ml-0");
      footer.classList.remove("md:ml-[300px]", "xl:ml-0");
    }
  
    function showNav() {
      navMenu.classList.remove("opacity-0");
    }
  
    function hideNav() {
      navMenu.classList.add("opacity-0");
    }
  
    function toggleNav() {
      console.log("toggle nav");
      if (toggleNavButton.classList.contains("translate-x-[248px]")) {
        closeNav();
        setTimeout(hideNav, 100);
      } else {
        showNav();
        openNav();
      }
    }
  
    // Register event handlers to hide/show nav menu.
    toggleNavButton.addEventListener("click", (event) => {
      toggleNav();
    });
  
    Array.prototype.forEach.call(navMenuLinks, function (link) {
      link.addEventListener("click", (event) => {
        toggleNav();
      });
    });
  
    mainContent.addEventListener("click", (event) => {
      closeNav();
      hideNav();
    });
  
    footer.addEventListener("click", (event) => {
      closeNav();
      hideNav();
    });
  };
  
  export { registerEventHandlers };
  