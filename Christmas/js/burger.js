const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {

burger.classList.toggle('burger_active');
navigation.classList.toggle('navigation_active')

// if(navigation.classList.contains('navigation_active')){
// 	navigation.classList.remove('navigation_active')
// } else {
// 	navigation.classList.add('navigation_active')
// }



})