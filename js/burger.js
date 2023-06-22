const menu = $(".menu");
const menuBurger = $(".menu-burger");
const menuBurgerInner = $(".menu-burger-inner");

menuBurger.click(function () {
  menuBurger.toggleClass("hide");
  menuBurgerInner.toggleClass("rotate");
  menu.toggle();
});
