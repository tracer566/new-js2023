const dataMusic = [
  {
    id: '1',
    artist: 'The weeknd',
    track: 'Save your tears',
    poster: 'images/photo-1.jpg',
    mp3: 'audio/The Weeknd - Save Your Tears.mp3',
  },
  {
    id: '2',
    artist: 'Imagine Dragons',
    track: 'Follow You',
    poster: 'images/photo-2.jpg',
    mp3: 'audio/Imagine Dragons - Follow You.mp3',
  },
  {
    id: '3',
    artist: 'Tove Lo',
    track: 'How Long',
    poster: 'images/photo-3.jpg',
    mp3: 'audio/Tove Lo - How Long.mp3',
  },
  {
    id: '4',
    artist: 'Tom Odell',
    track: 'Another Love',
    poster: 'images/photo-4.jpg',
    mp3: 'audio/Tom Odell - Another Love.mp3',
  },
  {
    id: '5',
    artist: 'Lana Del Rey',
    track: 'Born To Die',
    poster: 'images/photo-5.jpg',
    mp3: 'audio/Lana Del Rey - Born To Die.mp3',
  },
  {
    id: '6',
    artist: 'Adele',
    track: 'Hello',
    poster: 'images/photo-6.jpg',
    mp3: 'audio/Adele - Hello.mp3',
  },
  {
    id: '7',
    artist: 'Tom Odell',
    track: "Can't Pretend",
    poster: 'images/photo-7.jpg',
    mp3: "audio/Tom Odell - Can't Pretend.mp3",
  },
  {
    id: '8',
    artist: 'Lana Del Rey',
    track: 'Young And Beautiful',
    poster: 'images/photo-8.jpg',
    mp3: 'audio/Lana Del Rey - Young And Beautiful.mp3',
  },
  {
    id: '9',
    artist: 'Adele',
    track: 'Someone Like You',
    poster: 'images/photo-9.jpg',
    mp3: 'audio/Adele - Someone Like You.mp3',
  },
  {
    id: '10',
    artist: 'Imagine Dragons',
    track: 'Natural',
    poster: 'images/photo-10.jpg',
    mp3: 'audio/Imagine Dragons - Natural.mp3',
  },
  {
    id: '11',
    artist: 'Drake',
    track: 'Laugh Now Cry Later',
    poster: 'images/photo-11.jpg',
    mp3: 'audio/Drake - Laugh Now Cry Later.mp3',
  },
  {
    id: '12',
    artist: 'Madonna',
    track: 'Frozen',
    poster: 'images/photo-12.jpg',
    mp3: 'audio/Madonna - Frozen.mp3',
  },
];
const audio = new Audio(); //создал новый объект(позырить свойства в прототипе и разобраться шо там)

const pauseBtn = document.querySelector('.player__controller-pause');
const trackCards = document.getElementsByClassName('track');//динамическая коллекция
const player = document.querySelector('.player');

const stopBtn = document.querySelector('.player__controller-stop');
const prevBtn = document.querySelector('.player__controller-prev');
const nextBtn = document.querySelector('.player__controller-next');
const likeBtn = document.querySelector('.player__controller-like');
const muteBtn = document.querySelector('.player__controller-mute');
const playerProgressInput = document.querySelector('.player__progress-input');
const playerTimePassed = document.querySelector('.player__time-passed');
const playerTimeTotal = document.querySelector('.player__time-total');

const catalogContainer = document.querySelector('.catalog__container');

const catalogAddBtn = document.createElement('button');
catalogAddBtn.classList.add('catalog__btn-add');
catalogAddBtn.innerHTML = `
  <span>Увидеть все</span>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
</svg>

`


const playMusic = event => {
  event.preventDefault();

  console.dir(audio);
  const trackActive = event.currentTarget;

  // фвв
  let title = player.querySelector('.track-info__title');
  let artist = player.querySelector('.track-info__artist');
  title.textContent = dataMusic[trackActive.dataset.idTrack - 1].track;
  artist.textContent = dataMusic[trackActive.dataset.idTrack - 1].artist;
  // фвв

  if (trackActive.classList.contains('track_active')) {
    pausePlayer();
    return //тормозит выполнение кода ниже,все делает функция pausePlayer
  };

  // console.log('Код идет дальше');

  let i = 0;
  const id = trackActive.dataset.idTrack;

  const track = dataMusic.find((item, index) => {
    i = index;
    return id === item.id;
  })

  audio.src = track.mp3;
  audio.loop = true;
  audio.play();

  const prevTrack = i === 0 ? dataMusic.length - 1 : i - 1;
  const nextTrack = i + 1 === dataMusic.length ? 0 : i + 1;
  prevBtn.dataset.idTrack = dataMusic[prevTrack].id;
  nextBtn.dataset.idTrack = dataMusic[nextTrack].id;

  player.classList.add('player_active');

  for (let i = 0; i < trackCards.length; i++) {
    if (id === trackCards[i].dataset.idTrack) {
      trackCards[i].classList.add('track_active');
    } else {
      trackCards[i].classList.remove('track_active');
    }

  };




};

// const nextprevTrack = () => {
//   let i = 0;
//   const prevTrack = i === 0 ? dataMusic.length - 1 : i - 1;
//   const nextTrack = i + 1 === dataMusic.length ? 0 : i + 1;
//   prevBtn.dataset.idTrack = dataMusic[prevTrack].id;
//   nextBtn.dataset.idTrack = dataMusic[nextTrack].id;
//   playMusic()
// }

const pausePlayer = () => {
  const trackActive = document.querySelector('.track_active');
  if (audio.paused) {
    pauseBtn.innerHTML = `
   <svg>
      <use xlink:href="icons/sprite.svg#pause-player"></use>
    </svg>
  `
    audio.play();
    trackActive.classList.remove('track_pause');

  } else {
    pauseBtn.innerHTML = `
   <svg>
      <use xlink:href="icons/sprite.svg#play"></use>
    </svg>
  `
    audio.pause();
    trackActive.classList.add('track_pause');

  }


};


// функция с циклом навешивает событие на карточки
const addHandlerTrack = () => {
  for (let i = 0; i < trackCards.length; i++) {
    trackCards[i].addEventListener('click', playMusic);

  };
};

pauseBtn.addEventListener('click', pausePlayer);

// кнопка стоп
stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.src = '';
  player.classList.remove('player_active');
  pauseBtn.innerHTML = `
   <svg>
      <use xlink:href="icons/sprite.svg#pause-player"></use>
    </svg>
  `
  for (let i = 0; i < trackCards.length; i++) {
    trackCards[i].classList.remove('track_active');
  };

});

// создание карточек и возврат их в renderCatalog
const createCard = (data) => {
  // return data.artist
  // return data.id

  const card = document.createElement('a');
  card.classList.add('catalog__item', 'track');
  // card.setAttribute('href', '#')
  card.href = '#'
  card.dataset.idTrack = data.id
  card.innerHTML = `
<div class="track__img-wrap">
<img class="track__poster" src="${data.poster}" alt="${data.track + ' ' + data.artist}" width="180" height="180">
</div>

<div class="track__info track-info">
<p class="track-info__title">${data.track}</p>
<p class="track-info__artist">${data.artist}</p>
</div>

  `

  return card;

};

// перебор объекта с треками и передача колбэка в createCard,затем вставка готовых карточек
const renderCatalog = (dataList) => {
  catalogContainer.textContent = '';

  // map перебирает каждый объект в массиве и возвращает,новый массив с любыми даннными
  const listCards = dataList.map(createCard);
  // 1-й вариант
  // listCards.forEach(card => {
  //   catalogContainer.append(card)
  // })

  // spread оператор распаковывает массив
  catalogContainer.append(...listCards);

  addHandlerTrack();
};

const checkCount = (i = 1) => {

  // console.log(catalogContainer.clientHeight);
  // console.log(trackCards[0].clientHeight * 2 + 20);
  if (catalogContainer.clientHeight > trackCards[0].clientHeight * 3) {
    trackCards[trackCards.length - i].style.display = 'none';
    checkCount(i + 1);

  } else if (i !== 1) {
    catalogContainer.append(catalogAddBtn);
  }



};

// время
const updateTime = () => {
  // console.log('currentTime', audio.currentTime)
  // console.log('duration', audio.duration)
  const duration = audio.duration;
  const currentTime = audio.currentTime;
  const progress = (currentTime / duration) * playerProgressInput.max;
  // меняю ползунок под длительность песни
  playerProgressInput.value = progress ? progress : 0;

  const minutesPassed = Math.floor(currentTime / 60) || '0';
  const secondsPassed = Math.floor(currentTime % 60) || '0';

  const minutesDuration = Math.floor(duration / 60) || '0';
  const secondsDuration = Math.floor(duration % 60) || '0';

  playerTimePassed.textContent = `${minutesPassed}:${secondsPassed < 10 ? '0' + secondsPassed : secondsPassed}`
  playerTimeTotal.textContent = `${minutesDuration}:${secondsDuration < 10 ? '0' + secondsDuration : secondsDuration}`

};

// начало
const init = () => {
  renderCatalog(dataMusic);
  checkCount();

  catalogAddBtn.addEventListener('click', () => {
    [...trackCards].forEach((trackCard) => {
      trackCard.style.display = '';
      catalogAddBtn.remove();
    });

  })

  prevBtn.addEventListener('click', playMusic);
  nextBtn.addEventListener('click', playMusic);
  audio.addEventListener('timeupdate', updateTime);
  playerProgressInput.addEventListener('change', () => {
    const progress = playerProgressInput.value;
    audio.currentTime = (progress / playerProgressInput.max) * audio.duration;

  });

}

console.log(...trackCards);

init()