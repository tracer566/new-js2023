new Choices('#model', {
  searchEnabled: false,
  itemSelectText: ''
});

new Choices('#color', {
  searchEnabled: false,
  itemSelectText: ''
});

$('#form-order').on('submit', function (event) {
  event.preventDefault()

  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'post',
    dataType: 'html',
    data: $('#form-order').serialize(), //преобразует данные в формат json
    success: function (data) {
      console.log('dataAjax:', data)
      $('#form-order').html('<h2>Спасибо! Ваша заявка успешно отправлена</h2>');
      $('.form__submit').hide()
      $('.order__title').remove()
    }

  })
});

var linkNav = document.querySelectorAll('[href^="#"]'),
V = 0.05;
for (var i = 0; i < linkNav.length; i++) {
linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
e.preventDefault(); //отменяем стандартное поведение
var w = window.pageYOffset,  // производим прокрутка прокрутка
hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
start = null;
requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
function step(time) {
if (start === null) start = time;
var progress = time - start,
r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
window.scrollTo(0,r);
if (r != w + t) {
  requestAnimationFrame(step)
} else {
  location.hash = hash  // URL с хэшем
}
}
}, false);
}

