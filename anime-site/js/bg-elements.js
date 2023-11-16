const bgElements = () => {
  const elements = document.querySelectorAll('.set-bg');

  // console.log(elements);

  //  1-способ вывода картинок
  // for (let i = 0; i < elements.length; i++) {
  //   const src = elements[i].dataset.setbg

  //   // elements[i].style.backgroundImage = 'url('+src+')'

  //   elements[i].style.backgroundImage = `url(${src})`
  // }

  /**/

  //  2-способ вывода картинок(3ур)
  elements.forEach((elem, index, array) => {
    const src = elem.dataset.setbg

    elem.style.backgroundImage = `url(${src})`

  })

}
bgElements()

