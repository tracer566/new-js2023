const preloder = () => {
  let preloder = document.querySelector('.preloder');
  // console.dir(preloder)

  preloder.classList.add('active')


  setTimeout(() => {
    preloder.classList.remove('active')
  }, 1500)
}

preloder()