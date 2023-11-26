// блокировка скролла
const disabledScroll = () => {
  // ширина окна с прокруткой
  // console.log(window.innerWidth);
  //ширина окна без прокрутки
  // console.log(docment.body.offsetWidth);
  // widthScrollBar ширина скроллбара на всех браузерах
  const widthScrollBar = window.innerWidth - document.body.offsetWidth;

  // фиксит если кнопка далеко,scrollPosition-придуманное свойство
  //window.scrollY показывает число,на сколько проскролил вниз
  document.body.scrollPosition = window.scrollY;
  console.dir(document.body);

  // для работы на телефонах
  document.body.style.cssText = `
  overflow:hidden;
  position:fixed;
  top:-${document.body.scrollPosition}px;
  left:0;
  height:100vh;
  width:100vw;
  padding-right:${widthScrollBar}px;
  `;
};
const enabledScroll = () => {
  const widthScrollBar = window.innerWidth - document.body.offsetWidth;
  // document.body.style.overflow = '';
  document.body.style.cssText = `
  position:relative;
  `;
  // фиксит баг,когда при закрытии скачет наверх
  window.scroll({ top: document.body.scrollPosition })
};
// блокировка скролла



{//модалка
  const modalOverlay = document.querySelector('.page__overlay_modal');
  const modalOpenBtn = document.querySelector('.present__order-btn');
  const modalClose = document.querySelector('.modal__close');

  const handlerModal = (openTrigger, closeTrigger, modal, selectorTrigger, speedKey = 'medium') => {
    //свойства для setInterval
    // const speed = {
    //   slow: 25,
    //   medium: 15,
    //   fast: 5
    // };

    // переменная для анимации
    let opacity = 0;
    //свойства для requestAnimationFrame
    const speed = {
      slow: 0.01,
      medium: 0.05,
      fast: 0.10,
      default: 0.05
    };

    const openModal = () => {
      disabledScroll();
      modal.style.opacity = opacity;
      modal.classList.add(selectorTrigger);

      // анимация на setInterval
      // const timer = setInterval(() => {
      //   opacity += 0.05;
      //   modal.style.opacity = opacity;
      //   if (opacity >= 1) clearInterval(timer);
      // }, speed[speedKey])

      // анимация на requestAnimationFrame
      const animationModal = () => {
        opacity += speed[speedKey];
        modal.style.opacity = opacity;
        if (opacity < 1) requestAnimationFrame(animationModal);
      };

      requestAnimationFrame(animationModal);
    };

    const closeModal = () => {
      enabledScroll();
      // анимация,перенес classList внутрь,иначе код запустит его до того как opacity станет < 0
      // анимация на setInterval
      // const timer = setInterval(() => {
      //   opacity -= 0.05;
      //   modal.style.opacity = opacity;
      //   if (opacity <= 0) {
      //     clearInterval(timer);
      //     modal.classList.remove(selectorTrigger);
      //   }
      // }, speed[speedKey]);

      // анимация на requestAnimationFrame
      const animationModal = () => {
        opacity -= speed[speedKey];
        modal.style.opacity = opacity;
        if (opacity > 0) {
          requestAnimationFrame(animationModal)
        } else {
          modal.classList.remove(selectorTrigger);
        };
      };
      requestAnimationFrame(animationModal);
      // modal.classList.remove(selectorTrigger);
    };

    openTrigger.addEventListener('click', openModal);
    closeTrigger.addEventListener('click', closeModal);

    // делегирование
    modal.addEventListener('click', (event) => {
      console.log('event.target.classList.contains(modal)', event.target.classList.contains('modal'));
      if (event.target == modal) {
        console.log('Равен модал(оверлей)-закрываем окно');
        closeModal();
      } else {
        console.log('неравен модал');
      }

    });

  };

  // передача параметров
  handlerModal(
    modalOpenBtn,
    modalClose,
    modalOverlay,
    'page__overlay_modal_open',
    'medium');

  // modalOpenBtn.onclick = function () {
  //   // modalOverlay.style.display = "flex";
  //   modalOverlay.classList.add('page__overlay_modal_open')
  // };

  // modalClose.onclick = function () {
  //   // modalOverlay.style.display = "none";
  //   modalOverlay.classList.remove('page__overlay_modal_open')
  // };
}

{//бургер
  const burger = document.querySelector('.header__contacts-burger');
  // header__contacts_open
  const headerContacts = document.querySelector('.header__contacts');

  const handlerBurger = (openBtn, menu, openSelector) => {
    openBtn.addEventListener('click', () => {
      console.dir(menu);
      if (menu.classList.contains(openSelector)) {
        menu.style.height = '';
        menu.classList.remove(openSelector);
      } else {
        // scrollHeight достает нужную высоту из css
        //нужен height:auto в css или конкретное значение
        menu.style.height = menu.scrollHeight + 'px';
        menu.classList.add(openSelector);

      };

      // menu.classList.toggle(openSelector);
    });

  };

  handlerBurger(burger, headerContacts, 'header__contacts_open');
}