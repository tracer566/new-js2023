// асинхронная функция может подождать каких то действий
// эта будет ждать получения данных с сервера
const getData = async (url) => {
  const responce = await fetch(url);
  if (responce.ok) {
    return responce.json()
  } else {
    throw `Ошибка товарищ ${response.status}`
  }

  // console.log(await responce.text());
  // console.log(await responce.json());
}

// const result = getData('https://jsonplaceholder.typicode.com/posts/')
// const result = getData('db/video.json')

export default getData;