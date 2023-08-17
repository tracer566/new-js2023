const audio = new Audio(); //создал новый объект(позырить свойства в прототипе и разобраться шо там)

const pauseBtn = document.querySelector('.player__controller-pause');
const trackCards = document.getElementsByClassName('track')//динамическая коллекция
const player = document.querySelector('.player');

const stopBtn = document.querySelector('.player__controller-stop');
const prevBtn = document.querySelector('.player__controller-prev');
const nextBtn = document.querySelector('.player__controller-next');
const likeBtn = document.querySelector('.player__controller-like');


const playMusic = event => {
  console.dir(audio);
  player.classList.add('player_active')
  const trackActive = event.currentTarget

  audio.src = trackActive.dataset.track;
  audio.loop = true
  audio.play()

  for (let i = 0; i < trackCards.length; i++) {
    trackCards[i].classList.remove('track_active')
    // trackCards[i].removeEventListener('click', playMusic)


  };

  let track = trackActive.closest('.track')
  track.classList.add('track_active')

};


// const pauseMusic = (event) => {
//   event.currentTarget.classList.remove('track_active')

// }


for (let i = 0; i < trackCards.length; i++) {
  trackCards[i].addEventListener('click', playMusic)

};

pauseBtn.addEventListener('click', () => {

  if (audio.paused) {
    pauseBtn.innerHTML = `
   <svg>
      <use xlink:href="icons/sprite.svg#pause-player"></use>
    </svg>
  `

    audio.play()

  } else {
    pauseBtn.innerHTML = `
   <svg>
      <use xlink:href="icons/sprite.svg#play"></use>
    </svg>
  `
    audio.pause()

  }



})

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
    trackCards[i].classList.remove('track_active')
  };


})

