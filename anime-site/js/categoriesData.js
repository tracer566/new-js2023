// код почти тот же что и в файле mainData,но аккуратней
const categoriesData = () => {
  // создает меню в шапке
  const renderGanreListMenu = (ganres) => {
    const dropdownBlock = document.querySelector('.header__menu .dropdown');
    dropdownBlock.innerHTML = '';

    ganres.forEach((ganreCategory) => {
      dropdownBlock.insertAdjacentHTML('beforeend', `
<li><a target="_blank" href="./categories.html?ganre=${ganreCategory}">${ganreCategory}</a></li>
`)
    });

  };
  // функция создает 6 секций с заголовками и карточками по жанрам
  const renderAnimeList = (arrayAnimes, ganres) => {
    const cardsWrapper = document.querySelector('.product-page .js-content');
    // очищаю главный блок всех карточек
    cardsWrapper.innerHTML = '';

    // перебираю жанры,для создания секций с карточками
    ganres.forEach((itemGanre) => {
      const cardsMainBlock = document.createElement('div');
      cardsMainBlock.classList.add('mb-5');

      const cardsList = document.createElement('div');
      cardsList.classList.add('row');
      // метод includes,проверит в каждом элементе массива,тег жанра и в фильтр соберутся нужные
      const cardsDataList = arrayAnimes.filter(dataItem => dataItem.tags.includes(itemGanre)
      );

      cardsMainBlock.insertAdjacentHTML('beforeend', `
        <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-8">
        <div class="section-title">
        <h4>${itemGanre}</h4>
        </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
        <div class="btn__all">
        <a href="./categories.html?ganre=${itemGanre}" target="_blank" class="primary-btn">Смотреть все <span class="arrow_right"></span></a>
        </div>
        </div>
        </div>
        `);

      cardsDataList.forEach((itemCard) => {
        const ul = document.createElement('ul');
        itemCard.tags.forEach((tag) => {
          ul.insertAdjacentHTML('beforeend', `
        <li>${tag}</li>
        `);
        });

        cardsList.insertAdjacentHTML('beforeend', `
        <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="product__item">
        <a target="_blank" href="anime-details.html?itemId=${itemCard.id}">
        <div class="product__item__pic set-bg" data-setbg="${itemCard.image}">
        <div class="ep">${itemCard.rating} / 10</div>
        <div class="view"><i class="fa fa-eye"></i>${itemCard.views}</div>
        </div>
        </a>
        <div class="product__item__text">
        ${ul.outerHTML}
        <h5><a target="_blank" href="anime-details.html?itemId=${itemCard.id}">${itemCard.title}
        </div></a></h5>
        </div>
        </div>
        </div>
        `);
      });

      cardsMainBlock.append(cardsList);

      cardsWrapper.append(cardsMainBlock)

      cardsWrapper.querySelectorAll('.set-bg').forEach((elem, index, array) => {
        const src = elem.dataset.setbg

        elem.style.backgroundImage = `url(${src})`

      });


    });

  };

  const renderTopAnime = (topAnime) => {
    const cardWrapper = document.querySelector('.filter__gallery');
    cardWrapper.innerHTML = '';

    topAnime.forEach((item) => {
      cardWrapper.insertAdjacentHTML('beforeend', `
<div class="product__sidebar__view__item set-bg mix"
data-setbg="${item.image}">
<div class="ep">${item.rating} / 10</div>
<div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
<h5><a href="anime-details.html">${item.title}</a></h5>
</div>
`)

    });

    cardWrapper.querySelectorAll('.set-bg').forEach((elem, index, array) => {
      const src = elem.dataset.setbg

      elem.style.backgroundImage = `url(${src})`

    });

  };

  // получение данных из базы,это 1-ое действие после вызова $mainData
  const data = fetch('./db.json')
    .then(responce => responce.json()).then(data => {
      const ganres = new Set();
      data.anime.forEach((elem) => {
        ganres.add(elem.ganre);
      });

      // создаю класс для передачи параметра,URLSearchParams-название не меняется
      const ganreParams = new URLSearchParams(window.location.search).get('ganre');
      // вернет название жанр строкой из параметров поисковой строки
      console.log('ganreParams: ', ganreParams);

      // посмотреть текст параметра
      // console.log(window.location.search);

      renderTopAnime(data.anime.sort((a, b) => b.views - a.views).splice(0, 5));
      if (ganreParams) {
        renderAnimeList(data.anime, [ganreParams]);
      } else {
        renderAnimeList(data.anime, ganres);
      };
      renderGanreListMenu(ganres);



    });

};

categoriesData();