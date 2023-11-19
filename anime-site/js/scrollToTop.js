const scrollToTop = () => {
  const topBtn = document.getElementById('scrollToTopButton')

  topBtn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event)

    /*не кроссбраузерный варик*/
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // })

     /*кроссбраузерный варик*/
    seamless.scrollIntoView(document.querySelector(".header"), {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });


  });

};

scrollToTop()


// const hero2 = document.querySelector('.hero2');
// document.body.addEventListener('scroll', () => {
//   console.log(hero2.scrollTop);

// })


/* еше варик не кроссбраузерный  */
// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
// anchor.addEventListener('click', function(e) {
// e.preventDefault()

// const blockID = anchor.getAttribute('href').substr(0)
// document.getElementById(blockID).scrollIntoView({
// behavior: 'smooth',
// block: 'start'
// })
// })
// }

// на jquery
// $(document).ready(function() {
// $("a[href^='#']").on("click", function(e) {
// var anchor = $(this);
// $('html, body').stop().animate({
//   scrollTop: $(anchor.attr('href')).offset().top
// }, 777);
// e.preventDefault();
// return false;
// });
// });
