const modal = () => {
  const modal = document.querySelector('.search-model');
  const modalBtn = document.querySelector('.icon_search');
  const searchInput = modal.querySelector('#search-input')
  // const modalClose = document.querySelector('.search-close-switch');
  const modalClose = modal.querySelector('.search-close-switch'); //другой вариант поиска
  const resultWrap = document.querySelector('.search-model-result'); //контейнер для результата поиска
  resultWrap.style.width = '100%';
  resultWrap.style.maxWidth = '500px';

  //оптимизация для запросов,чтобы не на каждый символ улетал запрос
  const debounce = (func, ms = 500) => {
    let timer;

    return (...args) => {
      timer = setTimeout(() => {
        clearTimeout(timer)
        func.apply(this, args)
      }, ms)
    }

  };

  // вызовется первая,оптимизирует запрос
  const searchDebounce = debounce((searchStr) => {
    searchFunc(searchStr);
  }, 500);
  //оптимизация для запросов,чтобы не на каждый символ улетал запрос


  // рендер ссылок с результатами поиска
  const renderLink = (searchResult) => {
    // console.log('searchResult: ', searchResult);

    // console.log('resultWrap: ', resultWrap);
    resultWrap.innerHTML = '';

    // перебор массива с результатом поиска
    searchResult.forEach(searchElem => {
      if (searchElem) {
        const resultLink = document.createElement('a');
        resultLink.className = 'pt-2';
        resultLink.setAttribute('href', `./anime-details.html?itemId=${searchElem.id}`);
        resultLink.setAttribute('target', '_blank');
        resultLink.textContent = searchElem.title;
        resultWrap.append(resultLink)
      };
      // else {
      //   const resultMessage = document.createElement('p');
      //   resultMessage.textContent = 'Ничего не найдено или неверный регистр';
      //   resultWrap.append(resultMessage);
      // }
    });

  };

  // поиск данных из формы в базе
  const searchFunc = (searchStr) => {
    fetch('./db.json').then((response) => {
      return response.json();
    })
      .then((data) => {
        const filterData = data.anime.filter(dataItem => {
          // console.log('dataItem: ', searchStr, dataItem.title, dataItem.title.includes(searchStr));
          //includes метод массива,похож на indexOf
          // toLowerCase чтобы с регистром работало корректно
          return dataItem.title.toLowerCase().includes(searchStr.toLowerCase()) ||
            dataItem.description.toLowerCase().includes(searchStr.toLowerCase())
        });
        // console.log('filterData', filterData);
        // отрезаю 5 штук для ссылок
        const result = filterData.splice(0, 5)
        console.log('result: ', result);

        renderLink(result);

      });
  };

  modalBtn.addEventListener('click', () => {
    // modal.style.display = 'block'
    modal.classList.add('active')
  });

  modalClose.addEventListener('click', () => {
    // modal.style.display = 'none'
    modal.classList.remove('active');
    resultWrap.innerHTML = '';
  });

  searchInput.addEventListener('input', (event) => {
    // console.log(searchInput.value);
    // console.log(event.target.value);
    /* отдаю строку поиска функции*/
    // было
    // searchFunc(event.target.value);
    // стало 
    searchDebounce(event.target.value);

  });


};

modal();
// console.dir(document);

// let url_plus = window.location.search;
// var links = document.getElementsByTagName("a");
// for (var i = 0; i < links.length; i++) {
//   var link = links[i];
//   link.href = link.href + url_plus;
// };

