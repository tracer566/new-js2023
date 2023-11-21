const $mainData = () => {

  // создает меню в шапке
  const renderGanreListMenu = (ganres) => {
    const dropdownBlock = document.querySelector('.header__menu .dropdown');
    dropdownBlock.innerHTML = '';

    ganres.forEach((ganreCategory) => {
      dropdownBlock.insertAdjacentHTML('beforeend', `
      <li><a target="_blank" href="./categories.html?ganre=${ganreCategory}">${ganreCategory}</a></li>
      `);
    });
  };

  // функция создает 6 секций с заголовками и карточками по жанрам
  const renderAnimeList = (arrayAnimes, ganres) => {
    const cardsWrapper = document.querySelector('.product .js-content');
    // очищаю главный блок всех карточек
    cardsWrapper.innerHTML = '';

    // перебираю жанры,для создания секций с карточками
    ganres.forEach((itemGanre) => {
      // создаю главный блок для секции с карточками 
      const cardsMainBlock = document.createElement('div');
      // добавил отступ секциям
      cardsMainBlock.classList.add('mb-5');

      // создаю блок с карточками по жанрам
      const cardsList = document.createElement('div');
      // создаю 2-ой row
      cardsList.classList.add('row');
      // создаю переменную с данными CardsDataList и фильтрую массив данных карточек arrayAnimes,чтобы жанры в карточках совпал с жанром itemGanre
      // в переменной будет по 6 массивов с карточками для 6 жанров
      // сокращенная запись без слова return,работает так же
      const cardsDataList = arrayAnimes.filter(dataItem => dataItem.ganre === itemGanre
      );
      // console.log('CardsDataList: ', cardsDataList);

      // в главный блок cardsMainBlock вставляю верстку 1-й row с заголовком секции и кнопкой,
      //forEach выше создаст 6 таких
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

      // перебираю каждый отфильтрованный массив и создаю карточки,для 1 из 6 секций;
      cardsDataList.forEach((itemCard) => {

        // создание тэгов
        const ul = document.createElement('ul');

        itemCard.tags.forEach((tag) => {
          ul.insertAdjacentHTML('beforeend', `
          <li>${tag}</li>
          `);
        });

        // через свойство,outerHTML,которое в прототипе,вставлю ul в карточки

        // console.dir(ul);
        // console.log(ul.outerHTML);
        /*было вместо ${ul.outerHTML}:<ul>
          <li>Активный</li>
          <li>Фильм</li>
          </ul>*/

        // в блок с карточками по жанрам вставляю верстку и данные беру из cardsDataList,это потом вставится в cardsMainBlock и будет 2-ой row
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

      // вставляю все в главный блок
      // append вставляет перед концом узла,prepend после начала узла DOM
      // 2-ой row вставляю после 1-го row и секция с карточками готова
      cardsMainBlock.append(cardsList);
      // все 6 сгенерированых секций вставляю в самый главный блок
      cardsWrapper.append(cardsMainBlock)

      // вызываю снова функцию вставляющую все картинки
      bgElements()


    });

  };
  // функция выводит топ аниме в сайдбаре справа 
  const renderTopAnime = (topAnime) => {
    const cardWrapper = document.querySelector('.filter__gallery');
    cardWrapper.innerHTML = '';

    topAnime.forEach((item) => {
      // 1-й вариант вставки
      //       cardWrapper.innerHTML += `
      //       <div class="product__sidebar__view__item set-bg mix day years"
      // data-setbg="img/trending/trend-1.jpg">
      // <div class="ep">18 / ?</div>
      // <div class="view"><i class="fa fa-eye"></i> 9141</div>
      // <h5><a href="anime-details.html">Boruto: Naruto next generations</a></h5>
      // </div>
      //      `;

      // 2-й вариант вставки
      cardWrapper.insertAdjacentHTML('beforeend', `
       <div class="product__sidebar__view__item set-bg mix"
data-setbg="${item.image}">
<div class="ep">${item.rating} / 10</div>
<div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
<h5><a href="anime-details.html">${item.title}</a></h5>
</div>
      `)

      // 1 способ,снова вызвать эту функцию
      // bgElements()

    });

    // проверяю scope функции и вызываю bgElements(),чтобы создались картинки,иначе пусто
    // console.dir(renderTopAnime)

    cardWrapper.querySelectorAll('.set-bg').forEach((elem, index, array) => {
      const src = elem.dataset.setbg

      elem.style.backgroundImage = `url(${src})`

    })

  };

  // получение данных из базы,это 1-ое действие после вызова $mainData
  const data = fetch('./db.json')
    .then(responce => {
      // console.log('responce: ', responce);
      return responce.json() //распаковка данных
    }).then(data => {

      /*----создание 6 секций с карточками по жанрам------*/
      // 1 способ:удалить дубли в массиве с помощью коллекции,туда попадут уникальные элементы
      const ganres = new Set();
      data.anime.forEach((elem) => {
        // add - метод коллекции,в нее записываю жанры
        ganres.add(elem.ganre)
      });

      // глянуть методы коллекции в прототипе
      // console.log('ganres: ', ganres);

      // передаю в функцию массив с анимэ и коллекцию жанров 
      renderAnimeList(data.anime, ganres);
      // передаю в функцию массив коллекции жанров для создания меню
      renderGanreListMenu(ganres);


      // 2 способ:удалить дубли в массиве с помощью метода фильтр
      // const ganres = [];

      // data.anime.forEach((anime) => {
      //   ganres.push(anime.ganre)
      // });

      // let clearGanres = ganres.filter((one, index) => {
      //   return ganres.indexOf(one) === index
      // });

      // console.log('clearGanres: ', clearGanres);

      /*----создание топа аниме в сайдбаре----*/
      // let res = data.anime.sort((a, b) => {
      //   //демонстрация в консоли как работает
      //   console.log('id:', a.id, 'a:', a.views, 'id:', b.id, 'b:', b.views);
      //   console.log('a-b:', a.views - b.views);
      // })

      //сортирую массив по просмотрам от большего к меньшему
      let sortViews = data.anime.sort((a, b) => b.views - a.views);
      // методом splice отрезаю 5 самых просматриваемых от начала,они попадут в переменную topAnime
      //в виде массива из 5 элементов 
      let topAnime = sortViews.splice(0, 5);
      // отправляю в функцию данные
      renderTopAnime(topAnime);

    });

};

$mainData()

// удалить дубли в массиве с помощью метода фильтр
// let arr3 = ['мишка', 'заяц', 'мишка', 'лампа', 'рыба', 'торт', 'заяц']
// let clearGanres = arr3.filter((one, index) => {

//   // код ниже покажет дубли слова,indexOf всегда возращает индекс по которому слово уже найдено
//   console.log('word: ', arr3[arr3.indexOf(one)]);
// //если в результате сравнения index === arr3.indexOf(one) будет false элемент не попадает в массив
// //который вернет фильтр
//   console.log(one, 'index:', index, 'arr3.indexOf:', arr3.indexOf(one), 'сравнение:', arr3.indexOf(one) === index);
//   // return arr3.indexOf(one) === index
// });
// console.log('clearGanres: ', clearGanres) //вернет ['мишка', 'заяц', 'лампа', 'рыба', 'торт']


// другой пример распаковки массива
// const renderDate = async (data) => {
//   const obj = await data;
//   const anime = obj.anime;
//   console.log('anime: ', anime);

//   for (let i = 0; i < anime.length; i++) {
//     // console.log(`${i}:`, anime[i]);
//   }

// }
// const $mainData = async () => {
//   const data = await fetch('./db.json')
//   console.log('link status: ', data.status);
//   console.log('link ok: ', data.ok);

//   renderDate(data.json())

// }

// $mainData()


/*теория метода filter*/
// const array = [1,2,3,4,5]

/* 1)в колбэке всегда булевое значение,если true: item попадает в переменную newArray ,или false: то нет
2)еще filter всегда возращает массив*/
// const newArray = array.filter((item) => {
//   return item <=3
// })

/*сокращенная запись того что выше*/
// const newArray = array.filter((item) => item <=3)
// console.log('newArray-filter',newArray)

/*теория метода sort*/
// обычный sort() без колбэка внутри,преобразует числа в строки и сравнивает по кодовому весу

//кавычку ниже переместить вниз и раскомментится
/*
let arr = [1, 2, 15, 19, 3, 25];
let arr2 = arr.sort()
console.log('arr2: ', arr2);// вывод [1, 15, 19, 2, 25, 3]

// обычный sort(),с таким колбэком внутри,нормально отсортирует числа
let arr0 = [1, 2, 15, 19, 3, 25];
let arr3 = arr.sort((a, b) => {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
)
console.log('arr3: ', arr3);// вывод [1, 2, 3, 15, 19, 25]

//sort(),с упрощенным колбэком внутри,нормально отсортирует числа как пример выше,если b - a обратный порядок будет
const array2 = [7, 5, 3, 2, 4, 1, 6]
const newArray2 = array2.sort((a,b) => a - b)
// сортирует массив по возрастанию

console.log('newArray2-sort', newArray2)

// работа sort с объектом в котором массивы
const obj = [

  {
    id: 2,
    value: 300
  },
  {
    id: 0,
    value: 100
  },
  {
    id: 1,
    value: 200
  }

]


//обычная запись
const sortArr = obj.sort((a, b) => {
  // console.log('a:', a)
  // console.log('b:', b)

  // сортирует по свойству value,я пока хз почему вычитать,но при таком варианте отсчет
  //от меньшего к большему,если нужно наоборот то b - a
  //метод возращает сортированные массив в переменную
  return a.value - b.value
})

// без колбэка ничего не выйдет
// console.log('sortArr:', sortArr)

//сокращенная запись

// const sortArr = obj.sort((a,b) => a.value - b.value)

// // без колбэка ничего не выйдет
// console.log('sortArr:',sortArr)


*/

// split делает массив из строк,2-ой аргумент говорит сколько слов брать массив,метод join делает наоборот
// let arrSplit = 'Вася, Петя, Маша, Саша'.split(', ', 3);
// console.log('arrSplit: ', arrSplit); //вернет [Вася, Петя, Маша]


/*замыкания*/
// let y = 20;
// function one(x, z) {
//   console.log(x + y + z);
//   function three() {
//     console.log('3:', x, z, y);
//   }
//   three();
//   console.dir(three);
// };

// function two() {
//   let z = 100 + y;
//   one(67, z)

// };

// two();
// console.dir(one);
// console.dir(two);

