const detailAnimeData = () => {
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
  const renderAnimeDetail = (arrayAnimes, itemId) => {
    const animeClick = arrayAnimes.find(anime => {
      // console.log('animefind: ', anime);
      return anime.id === itemId;
    });

    console.log('animeClick : ', animeClick);
  };

  // получение данных из базы,это 1-ое действие после вызова $mainData
  const data = fetch('./db.json')
    .then(responce => responce.json()).then(data => {
      const ganres = new Set();
      data.anime.forEach((elem) => {
        ganres.add(elem.ganre);
      });

      // создаю класс для передачи параметра,URLSearchParams-название не меняется
      const idParams = new URLSearchParams(window.location.search).get('itemId');
      console.log('idParams: ', idParams);
      // вернет название жанр строкой из параметров поисковой строки

      // посмотреть текст параметра
      // console.log(window.location.search);

      if (idParams) {
        renderAnimeDetail(data.anime, +idParams);
      } else {
        const text = document.querySelector('.anime__details__content').innerHTML = '<h1 style="color:#fff;text-align:center;font-size:20px;">Аниме не найдено</h1>';

      };
      renderGanreListMenu(ganres);



    });

};

detailAnimeData();