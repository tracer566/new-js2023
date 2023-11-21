const detailAnimeData = () => {
  let preloder = document.querySelector('.preloder');

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
  // функция создает страницу аниме из базы 
  const renderAnimeDetail = (arrayAnimes, itemId) => {
    const animeBlock = document.querySelector('.anime__details__pic');
    const animeView = document.querySelector('.view');
    const animeTitle = document.querySelector('.anime__details__title h3');
    const animeSubtitle = document.querySelector('.anime__details__title span');
    const animeText = document.querySelector('.anime__details__text p');
    const animeWidget = document.querySelectorAll('.anime__details__widget ul li');
    const breadcrumb = document.querySelector('.breadcrumb__links span');

    // // поиск аниме из базы
    const animeClick = arrayAnimes.find(anime => {
      // console.log('animefind: ', anime);
      return anime.id === itemId;
    });

    breadcrumb.textContent = animeClick.ganre
    // создание страницы по данным из базы
    if (animeClick) {
      animeBlock.dataset.setbg = animeClick.image;
      animeView.innerHTML = '';
      animeView.insertAdjacentHTML('afterbegin', `
      <i class="fa fa-eye"></i> ${animeClick.views}
      `);
      animeTitle.textContent = animeClick.title;
      animeSubtitle.textContent = animeClick["original-title"];
      animeText.textContent = animeClick.description;
      animeWidget[0].insertAdjacentHTML('afterbegin', `
      <span>Дата выхода:</span> ${animeClick.date}
      `);
      animeWidget[1].insertAdjacentHTML('afterbegin', `
      <span>Рейтинг:</span> ${animeClick.rating}
      `)
      animeWidget[2].insertAdjacentHTML('afterbegin', `
      <span>Жанр:</span> ${animeClick.tags.join(', ')}
      `)

      document.querySelectorAll('.set-bg').forEach(elem => {
        elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
      });
      // отключаю прелоадер
      setTimeout(() => {
        preloder.classList.remove('active')
      }, 500)
      // отключаю прелоадер

    } else {
      alert('Аниме отсутствует')
    };
  };

  // добавил active в html
  // preloder.classList.add('active');
  // получение данных из базы,это 1-ое действие после вызова $mainData
  const data = fetch('./db.json')
    .then(responce => responce.json()).then(data => {
      const ganres = new Set();
      data.anime.forEach((elem) => {
        ganres.add(elem.ganre);
      });

      // создаю класс для передачи параметра,URLSearchParams-название не меняется
      const idParams = new URLSearchParams(window.location.search).get('itemId');
      // console.log('idParams: ', idParams);
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