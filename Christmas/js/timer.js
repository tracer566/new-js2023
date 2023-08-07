const declOfNum = (n, titles) => n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
  0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

const timer = () => {
  const timer = document.createElement('div')
  const timerText = document.createElement('p')
  const timerCount = document.createElement('span')


  timer.classList.add('timer')
  timerText.classList.add('timer__text')
  timerCount.classList.add('timer__count')
  timerText.textContent = 'До конца распродажи осталось:'


  timerText.append(timerCount)
  timer.append(timerText)
  document.body.prepend(timer)

  const startTimer = () => {
    const deadline = new Date(2024, 0, 1, 0, 0, 0);
    const now = new Date();
    const timeRemaining = (deadline - now) / 1000
    console.log('deadline: ', deadline);

    const second = Math.floor(timeRemaining % 60)
    const minutes = Math.floor((timeRemaining / 60) % 60)
    const hours = Math.floor(timeRemaining / 60 / 60 % 24)
    const day = Math.floor(timeRemaining / 60 / 60 / 24 % 30)
    const mounth = Math.floor(timeRemaining / 60 / 60 / 24 / 30 % 12)

    const sec = declOfNum(second, ['секунда', 'секунды', 'секунд'])
    const min = declOfNum(minutes, ['минута', 'минуты', 'минут'])
    const h = declOfNum(hours, ['час', 'часа', 'часов'])
    const d = declOfNum(day, ['день', 'дня', 'дней'])
    const m = declOfNum(mounth, ['месяц', 'месяца', 'месяцев'])

    // timerCount.textContent = `${day} дня ${hours} часов ${minutes} минут ${second} секунд`
    timerCount.textContent = `${m} ${d} ${h} ${min} ${sec}`

    // console.log(new Date());
    if (timeRemaining > 0) {
      setTimeout(startTimer, 1000)
    } else {
      timer.remove()
    }


  }

  startTimer()


}

timer()

