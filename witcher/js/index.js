// импорт функции из файла
import burgerMenu from "./burger.js";
import tabs from "./tabs.js";
import renderTabs from "./renderTabs.js";

// вызов функции и передача объекта
burgerMenu({
  // selectorBurger:'.mobile-menu', //можно передать такие
  // activeBurger: 'open_menu', //можно передать такие
  selectorMenu: '.navigation__list',
  openMenuSelector: 'navigation__list_active'
});

tabs({
  selectorTabsButton: '.tabs__btn',
  activeClassButton: 'tabs__btn_active',
  selectorTabsElement: '.tabs__item',
  activeClassTab: 'tabs__item_active',
  callback: renderTabs,
});

renderTabs()

// деструктуризация
// const men = {
//   name: 'Джек',
//   age: 145,
//   car: 'Лада'
// };

// 1 вариант,создание переменных
// const foo = (obj) => {
// const {name,age,car} = obj
// 	return `Его зовут ${name},его возраст ${age} и у него машина красная ${car}`
// }

// 2 вариант,сразу в принимаемых параметрах функции
// const foo = ({ name, age, car }) => {

//   return `Его зовут ${name},его возраст ${age} и у него машина красная ${car}`
// };

// const result = foo(men);
// console.log(result);