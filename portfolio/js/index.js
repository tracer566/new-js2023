// const burger = document.querySelector('.header__contacts-burger');
// const contacts = document.querySelector('.header__contacts');

// burger.addEventListener('click', () => {
//   contacts.classList.toggle('open')
// })

// page__overlay
// page__overlay_modal
// modal__close

// бургер
$('.header__contacts-burger').click(function () {
  $('.header__contacts').slideToggle()
})

// модалка
$('.present__order-btn').click(function () {
  // $('.page__overlay').removeClass('page__overlay_modal')
  $('.page__overlay_modal').fadeIn(400).css('display', 'flex')
})

$('.modal__close').click(function () {
  // $('.page__overlay').addClass('page__overlay_modal')
  $('.page__overlay_modal').fadeOut(400)
})

// делегирование
$('.page__overlay').click((event) => {
  // if (event.target.classList.contains('page__overlay')) {
  //   $('.page__overlay_modal').fadeOut(400)
  // }

  if ($(event.target).hasClass('page__overlay')) {
    $('.page__overlay_modal').fadeOut(400)
  }
})

// слайдер
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

$(document).ready(function () {
  $('.card:odd').css('background-color', '#b1eccb')
  // $('.card:even').css('border-bottom', '1px solid rgba(0,0,0,0.2)')
})