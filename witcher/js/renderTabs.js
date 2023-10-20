import getData from "./getData.js";

const getCard = function (dataCard) {
  console.log('dataCard: ', dataCard);
  const li = document.createElement('li')
  li.classList.add('card')
  console.log('this', this);

  switch (this) {
    case 'video':
      li.classList.add("card_video")
      li.innerHTML =
        `<a class="card__link" target="_blank" href="${dataCard.link}">
  <figure>
  <img class="card__video-img" src="${dataCard.preview}" alt="${dataCard.description}">
  <figcaption>${dataCard.description}</figcaption>
  </figure>
  </a>`;
      break;

    case 'photo':
      li.classList.add("card_img")
      li.innerHTML = `<img class="card__photo-img" src="${dataCard.link}" alt="${dataCard.description}">`;
      break

    case 'goods':
      li.classList.add("card_product")
      li.innerHTML =
        ` <article class="product">
          <img class="product__photo" src="${dataCard.picture}" alt="${dataCard.name}">
          <h2 class="product__title">${dataCard.name}</h2>
          <div class="product__wrapper-buy">
          <p class="product__price">${dataCard.price}</p>
          <button class="product__btn-buy">
          <svg class="product__btn-icon">
          <use xlink:href="#add"/>
          </svg>
          </button>
          </div>
          </article>
                `;
      break

    default:
      li.innerHTML = 'Нет данных';
  }

  return li;

}


const renderTabs = async (i = 0) => {
  const tabsContent = document.querySelectorAll('.tabs__content');

  // base - дата атрибут в разметке,dataset объект для работы с ними
  const type = tabsContent[i].dataset.base
  // console.log('type: ', type);

  const data = await getData(`db/${type}.json`)
  // console.log('data: ', data);

  const listElem = data.map(getCard, type)
  console.log('listElem: ', listElem);

  tabsContent[i].textContent = ''

  tabsContent[i].append(...listElem)
}

export default renderTabs;