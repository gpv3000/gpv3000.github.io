const menuOpen = document.getElementById("menu-mobile"),
      menuClose = document.getElementById("close"),
      menuMain = document.getElementById("main-menu");
      
menuOpen.addEventListener("click", () => {
    menuMain.classList.add("menu-open");
});
menuClose.addEventListener("click", () => {
    menuMain.classList.remove("menu-open");
})
