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
})