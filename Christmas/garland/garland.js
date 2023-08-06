const createGarland = () => {
  const garland = document.createElement('div');
garland.classList.add('garland','garland_1')
document.body.append(garland)

const style = document.createElement('style')

style.textContent = ` 

html {
  position: relative;
}

html::after {
  position: absolute;
  content: '';
  inset: 0;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-image: url('../images/elka.png');
  background-size: 150px 150px;
  pointer-events: none;
  z-index: 1000;
}

.garland {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 36px;
  background-image: url('../images/christmas.png');
  pointer-events: none;
  z-index: 999;
}

.garland_1 {
  background-position: 0 0;
}

.garland_2 {
  background-position: 0 -36px;
}

.garland_3 {
  background-position: 0 -72px;
}

.garland_4 {
  background-position: 0 -108px;
}

@media(max-width:1440px) {
  html::after {
    background-size: 120px 120px;

  }
}

@media(max-width:1200px) {
  html::after {
    background-size: 100px 100px;

  }
}

@media(max-width:1000px) {
  html::after {
    background-size: 80px 80px;
  }
}

@media(max-width:760px) {
  html::after {
    background-size: 70px 70px;
  }
}
`

document.head.append(style)


let order = 1;

setInterval(() => {
  switch (order) {
    case 1:
      garland.classList.add('garland_2');
      garland.classList.remove('garland_1');
      order = 2;
      break;
    case 2:
      garland.classList.add('garland_3');
      garland.classList.remove('garland_2');
      order = 3;
      break;
    case 3:
      garland.classList.add('garland_4');
      garland.classList.remove('garland_3');
      order = 4;
      break;
    case 4:
      garland.classList.add('garland_1');
      garland.classList.remove('garland_4');
      order = 1;
      break;

  }
}, 1500)
};

createGarland()