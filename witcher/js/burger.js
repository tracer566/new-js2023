const burgerMenu = (param) => {
  // создаются константы из объекта param,который в index.js передал,названия в скобках {}
  const {
    selectorBurger = ".burger",//по умолчанию
    activeBurger = "burger_active",//по умолчанию
    selectorMenu,
    openMenuSelector } = param

  const burger = document.querySelector(selectorBurger);
  const menu = document.querySelector(selectorMenu);

  burger.addEventListener('click', () => {
    burger.classList.toggle(activeBurger)
    menu.classList.toggle(openMenuSelector)
  })


};

export default burgerMenu;
