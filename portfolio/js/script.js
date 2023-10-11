const burger = document.querySelector('.header__contacts-burger');
const contacts = document.querySelector('.contacts');

burger.addEventListener('click', () => {
  contacts.classList.toggle('open')
})