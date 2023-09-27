const burgerBtn = document.querySelector(".js-burger-btn");
const navigation = document.querySelector(".js-navigation");
const navigationList = document.querySelector(".navigation__list");
const navigationClose = document.querySelector(".js-navigation-close");

burgerBtn.addEventListener('click',() => {
	navigation.style.right = "0"
})

navigationClose.addEventListener('click',() => {
	navigation.style.right = ""
})

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});