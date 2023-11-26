const todoForm = document.getElementById('form-todo')
const author = document.getElementById('author')
const post = document.getElementById('post')
const list = document.querySelector('.todo__list');
const todoCount = document.querySelector('.todo__count');
const todoDel = document.querySelector('.todo__del');
// const todoBtn = todoForm.querySelector('.todo__btn')
// const todoTitle = document.querySelector('.todo__title')

// todoTitle.textContent = 'Сменился заголовок'
// todoTitle.innerHTML = 'Сменился заголовок через innerHTML'
// console.log(todoTitle.title);
// todoTitle.style.color = prompt('Цвет?', 'black')
// todoTitle.style.backgroundColor = 'indigo'
// todoTitle.style['background-color'] = 'indigo'
// todoTitle.className = 'hren'
// todoTitle.classList.toggle = 'todo__title_js'
// todoTitle.classList.add = 'todo__title_js'
// todoTitle.classList.remove = 'todo__title_js'
// todoTitle.classList.contains = 'todo__title_js'
// console.log(todoForm.getAttribute('id'));
// alert(location)

// todoTitle.style.cssText = `
// color: green !important;
// background-color: aqua;
// width: 100%;
// text-align: center;
// `

/* старый массив
  todo: [
    {
      id: 'td1',
      author: 'Денис Петрович',
      post: 'Выполнить отгрузку пылесосов',
      ready: false
    },
    {
      id: 'td2',
      author: 'Эльдар Генадьевич',
      post: 'Отправить бригаду починить оборудование',
      ready: true
    }
  ], */

const base = {
  employer: 'Петров Денис Иванович',
  todo: getTodoLS(),
  check: function (id) {
    for (let i = 0; i < base.todo.length; i++) {
      if (base.todo[i].id === id) {
        base.todo[i].ready = true
        console.log('todo массив из check,проверка после нажатия галки', base.todo);
      }
    }
  },
  // метод создает объект с данными и возращает его туда где был вызван
  addTodo(author, post) {
    const todo = {
      id: 'td' + (base.todo.length + 1),
      author: author,
      post: post,
      ready: false
    }

    // добавляю новый объект в массив todo
    base.todo.push(todo)



    // console.log('this', this);
    // console.log('todo', todo);
    // проверяю массив
    console.log('base.todo', base.todo);

    // отправляю объект
    return todo;
  }

};

// действие при добавлении дела условно 2-ое
function addTodo(event) {
  event.preventDefault()

  const authorText = author.value
  const postText = post.value

  // вызываю метод объекта,в него добавляю введеные данные,а с него вернется объект
  // этот объект помещаю в функцию createTodo,которая из данных в объекте создаст карточку дела в верстке
  const objTodo = base.addTodo(authorText, postText)

  // здесь получаю карточку
  const todoLi = createTodo(objTodo)

  // вставляю карточку в верстку
  list.append(todoLi)

  // счетчик дел
  todoCount.textContent = base.todo.length
  // сохраняю в localstorage,вызывая функцию
  setTodoLS()

  // проверяю объект
  console.log('base.todo', base.todo);

  // перезагружаю форму
  todoForm.reset()
}


// создает карточку дела в верстке
function createTodo(objTodo) {

  // начинаю создавать пост,в пост помещаю данные из отправленного в функцию объекта
  const todoItem = `
  <article class="post ${objTodo.ready ? 'post_complete' : ''}">
<h3 class="post__author">${objTodo.author}</h3>
<p class="post__todo">${objTodo.post}</p>

${!objTodo.ready ? `<button class="post__ready" type="button" data-id=${objTodo.id}>✔</button>` : ''}

</article>
  
  `
  // создаю обертку для поста
  const li = document.createElement('li')
  // добавляю ей класс
  li.classList.add('todo__list-item')
  // в обертку вставляю пост
  li.innerHTML = todoItem

  return li

}


// перебирает все дела в объекте и добавляет их на страницу вызывая функция createTodo
function renderTodo() {
  for (let w = 0; w < base.todo.length; w++) {
    const todoLi = createTodo(base.todo[w])
    list.append(todoLi)
    todoCount.textContent = base.todo.length
  }

}
// функция запускается при клике на галочку
function checkTodo(e) {
  // через делегирование нахожу и сохраняю в переменную методом closest кнопку
  const btn = e.target.closest('.post__ready')

  // условием получаю пост,удаляю кнопку,добавляю посту зеленый цвет,получаю data id и методом check делаю ready=true
  if (btn) {
    const post = btn.closest('.post')
    btn.remove()
    post.classList.add('post_complete')
    const id = btn.dataset.id
    base.check(id)
    // сохраняю в localstorage,вызывая функцию
    setTodoLS()

  }


}


function getTodoLS() {
  if (localStorage.getItem('todo-array')) {
    return JSON.parse(localStorage.getItem('todo-array'));
  }

  console.log(localStorage.getItem('todo-array'));

  return [];

}

function setTodoLS() {
  localStorage.setItem('todo-array', JSON.stringify(base.todo))
}


function clearAll() {
  base.todo = [];
  localStorage.clear();
  list.innerHTML = '';
  todoCount.textContent = base.todo.length;

}


renderTodo() //1ое: действие при запуске
// обработчик отправки формы,при клике вызывает функцию
todoForm.addEventListener('submit', addTodo) //2-ое:вызов функции создающую новое дело
list.addEventListener('click', checkTodo) //отмечает новое дело,через делегирование
todoDel.addEventListener('click', clearAll)



