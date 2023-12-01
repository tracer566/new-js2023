// блокировка скролла
const disabledScroll = () => {
  // ширина окна с прокруткой
  // console.log(window.innerWidth);
  //ширина окна без прокрутки
  // console.log(docment.body.offsetWidth);
  // widthScrollBar ширина скроллбара на всех браузерах
  const widthScrollBar = window.innerWidth - document.body.offsetWidth;
  // documentElement почти то же что и html
  // console.log(document.documentElement);

  // только для этого проекта,убирает баг цвета на больших экранах
  document.documentElement.style.cssText = `
  height:100vh;
  position:relative
  `;
  // только для этого проекта

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
  // только для этого проекта
  document.documentElement.style.cssText = ``
  // только для этого проекта

  const widthScrollBar = window.innerWidth - document.body.offsetWidth;
  // document.body.style.overflow = '';
  document.body.style.cssText = `
  position:relative;
  `;
  // фиксит баг,когда при закрытии скачет наверх
  window.scroll({ top: document.body.scrollPosition })
};
// блокировка скролла



{ //модалка
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
          enabledScroll();
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

{ //бургер
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

{ //галерея работ
  const portfolioList = document.querySelector('.portfolio__list');
  const pageOverlay = document.createElement('div');
  pageOverlay.classList.add('page__overlay')

  portfolioList.addEventListener('click', (e) => {
    // closest всплывает и возращает нужный элемент
    // console.log(e.target.closest('.card'));
    const card = e.target.closest('.card');
    if (card) {
      // console.log(e.target.closest('.card'))
      // console.log(card.dataset);
      // console.log(card.dataset.fullImage);
      // console.log(card.dataset.fullImage + '.jpg');

      const cardTitle = card.querySelector('.card__client')
      const picture = document.createElement('picture');
      picture.style.cssText = `
      position:absolute;
      top:20px;
      left:50%;
      transform:translateX(-50%);
      max-width:800px;
      width:95%;
      
      `;

      picture.innerHTML = `
      <source srcset="${card.dataset.fullImage}.avif" type="image/avif">
      <source srcset="${card.dataset.fullImage}.webp" type="image/webp">
      <img src="${card.dataset.fullImage}.jpg" alt="${cardTitle.textContent}">
        `;


      pageOverlay.append(picture);

      /* сложнее */
      // const picture = document.createElement('picture');
      // picture.style.cssText = `
      // position:absolute;
      // top:20px;
      // left:50%;
      // transform:translateX(-50%);
      // max-width:800px;
      // width:95%;

      // `;
      // const source = document.createElement('source');
      // const source2 = document.createElement('source');
      // const img = document.createElement('img');
      // source.type = "image/avif";
      // source.srcset = card.dataset.fullImage + '.avif';
      // source2.type = "image/webp";
      // source2.srcset = card.dataset.fullImage + '.webp';
      // img.src = card.dataset.fullImage + '.jpg';

      // picture.prepend(source, source2, img);
      // pageOverlay.append(picture);


      /*простой вариант*/
      // const img = document.createElement('img');
      // img.src = card.dataset.fullImage + '.jpg';
      // img.style.cssText = `
      // position:absolute;
      // top:20px;
      // left:50%;
      // transform:translateX(-50%);
      // max-width:580px;
      // width:100%;
      // `;
      // pageOverlay.append(img);

      document.body.append(pageOverlay);
      disabledScroll();
    };
  });

  pageOverlay.addEventListener('click', (e) => {
    pageOverlay.remove();
    pageOverlay.textContent = '';
    enabledScroll();

  });

}

{ //рендер карточек

  const btnAddCard = document.querySelector('.portfolio__add');
  const portfolioList = document.querySelector('.portfolio__list');
  const COUNT_CARD = 2;

  const getData = () => {
    // GET запрос,можно return с fetch убрать но тогда следующий then нужен
    return fetch('db.json')
      .then(responce => {
        // console.log('responce: ', responce);
        if (responce.ok === true) {
          return responce.json();
        } else {
          // throw 'Данные из базы не получены.' + 'Статус ошибки: ' + responce.status;
          throw `Данные из базы не получены.Статус ошибки: ${responce.status}`;
        }
      })
      // .then(data => {
      //   return data;
      // })
      .catch(error => console.error('from catch error:', error));
  };

  // создание хранилища для записи данных из getData(),без async будет promise
  const createStore = async () => {
    const data = await getData();//массив с данными или promise без await
    console.log('from createStore data: ', data);
    return {
      data,
      counter: 0,
      count: COUNT_CARD,
      get length() {
        return this.data.length;
      },
      get cardData() {
        // slice(0, 0+2),count:COUNT_CARD == 2,изменяю только counter
        const renderData = this.data.slice(this.counter, this.counter + this.count);
        // this.counter += this.count;
        this.counter += renderData.length;
        return renderData;
      }
    };
  };

  const renderCard = data => {
    const cards = data.map((item) => {
      const { image, preview, client, year, type } = item

      const li = document.createElement('li');
      li.classList.add('portfolio__item');
      li.innerHTML = `
      <article class="card" tabindex="0" role="button" aria-label="открыть макет" data-full-image="${image}">
        <picture class="card__picture">
        <source srcset="${preview}.avif" type="image/avif">
        <source srcset="${preview}.webp" type="image/webp">
        <img src="${preview}.jpg" alt="${client}" width="166" height="103">
        </picture>

        <p class="card__data">
        <span class="card__client">Клиент: ${client}</span>
        <time class="card__date" datetime="${year}">год: ${year}</time>
        </p>

        <h3 class="card__title">${type}</h3>
        </article>
      `;
      return li;
    });

    portfolioList.append(...cards);


  };

  // инициализация карточек
  const initPortfolio = async () => {
    const store = await createStore();
    // отрисует первые две карточки
    renderCard(store.cardData);
    btnAddCard.addEventListener('click', () => {
      // console.log(store.cardData);
      // console.log(store.counter, store.length);
      renderCard(store.cardData);
      if (store.length === store.counter) {
        btnAddCard.remove();
      }
    });

  };

  initPortfolio();

};





