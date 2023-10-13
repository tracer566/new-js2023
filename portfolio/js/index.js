const burger = document.querySelector('.header__contacts-burger');
const contacts = document.querySelector('.contacts');

burger.addEventListener('click', () => {
  contacts.classList.toggle('open')
})

const swiper = new Swiper(".swiper", {
  // активирует стрелки
  navigation: {
    nextEl: '.portfolio__arrow_left',
    prevEl: '.portfolio__arrow_right',
    disabledClass: 'portfolio__arrow_disabled'
  },
  // слайды идут по кругу при нажатии
  // loop: true

  // экран
  breakpoints: {
    480: {
      grid: {
        fill: 'rows',
        rows: 2
      }
    },
    768: {
      slidesPerView: 2,
      grid: {
        fill: 'rows',
        rows: 2
      }
    }
  }
})