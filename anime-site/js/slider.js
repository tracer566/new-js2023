const slider = () => {
  const swiper = new Swiper('.swiper',{

    // пагинация или точки
  pagination: {
    el: '.swiper-pagination',
  },

    // стрелки навигации
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // эффект слайдера
  effect: "fade",
  speed: 1000,
  // бесконечный цикл
  loop: true,
  autoplay: {
   delay: 5000,
 }


});

};

slider()