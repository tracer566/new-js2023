'use strict';

const main = document.querySelector('.main');
const selection = document.querySelector('.selection');


// функция в которой хранится база,1-ая вызовется
const getData = () => {
  const dataBase = [
    {
      id: '01',
      theme: 'Тема01',
      result: [
        [40, 'Есть задатки,нужно развиваться'],
        [80, 'Очень хорошо,но есть пробелы'],
        [100, 'Отличный результат']
      ],
      list: [
        {
          type: 'checkbox',
          question: 'Вопрос?',
          answer: ['правильный1', 'правильный2', 'неправильный', 'неправильный'],
          correct: 2
        },
        {
          type: 'radio',
          question: 'Вопрос?',
          answer: ['неправильный', 'правильный', 'неправильный', 'неправильный'],
        },
        {
          type: 'checkbox',
          question: 'Вопрос?',
          answer: ['правильный1', 'правильный2', 'правильный3', 'неправильный'],
          correct: 3
        },
        {
          type: 'checkbox',
          question: 'Вопрос?',
          answer: ['неправильный', 'правильный', 'неправильный', 'неправильный'],
          correct: 1
        },
        {
          type: 'radio',
          question: 'Вопрос?',
          answer: ['неправильный', 'правильный', 'неправильный', 'неправильный'],
        },
        {
          type: 'checkbox',
          question: 'Вопрос?',
          answer: ['правильный1', 'правильный2', 'неправильный', 'неправильный'],
          correct: 2
        },
        {
          type: 'radio',
          question: 'Вопрос?',
          answer: ['неправильный', 'правильный', 'неправильный', 'неправильный'],
        },
        {
          type: 'checkbox',
          question: 'Вопрос?',
          answer: ['правильный1', 'правильный2', 'неправильный', 'правильный3'],
          correct: 3
        },
      ]
    },
    {
      id: '02',
      theme: 'Тема02',
      result: [
        [30, 'Есть задатки,нужно развиваться'],
        [60, 'Очень хорошо,но есть пробелы'],
        [100, 'Отличный результат']
      ],
      list: [
        {
          type: 'radio',
          question: 'Вопрос?',
          answer: ['правильный', 'неправильный', 'неправильный', 'неправильный'],
        },
        {
          type: 'radio',
          question: 'Вопрос?',
          answer: ['неправильный', 'правильный', 'неправильный', 'неправильный'],
        },
        {
          type: 'checkbox',
          question: 'Вопрос?',
          answer: ['правильный1', 'правильный2', 'правильный3', 'неправильный'],
          correct: 3
        },
        {
          type: 'checkbox',
          question: 'Вопрос?',
          answer: ['неправильный', 'правильный', 'неправильный', 'неправильный'],
          correct: 1
        },
        {
          type: 'radio',
          question: 'Вопрос?',
          answer: ['неправильный', 'правильный', 'неправильный', 'неправильный'],
        },
        {
          type: 'checkbox',
          question: 'Вопрос?',
          answer: ['правильный1', 'правильный2', 'неправильный', 'неправильный'],
          correct: 2
        },
        {
          type: 'checkbox',
          question: 'Вопрос?',
          answer: ['неправильный', 'правильный1', 'правильный2', 'правильный3'],
          correct: 3
        },
        {
          type: 'radio',
          question: 'Вопрос?',
          answer: ['неправильный', 'правильный', 'неправильный', 'неправильный'],
        },
        {
          type: 'checkbox',
          question: 'Вопрос?',
          answer: ['правильный1', 'правильный2', 'неправильный', 'правильный3'],
          correct: 3
        },
      ]
    },
  ];

  return dataBase;
};

// функция в которой хранится база,2-ая вызовется
const renderTheme = (themes) => {
  // console.log('data: ', themes);
  const list = document.querySelector('.selection__list');
  list.textContent = '';

  // пустой массив в котором будут кнопки с темами и data-id
  const buttons = [];

  for (let i = 0; i < themes.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'selection__elem';
    const button = document.createElement('button');
    button.className = 'selection__theme';
    // записываю в атрибут data- свойством dataset,data-id='themes[i].id;' со значением из базы
    button.dataset.id = themes[i].id;
    button.textContent = themes[i].theme;

    // вставляю кнопки в li а li в list
    li.append(button);
    list.append(li);

    // заполняю пустой массив кнопками
    buttons.push(button);
  }

  // отдаю кнопки в константу
  return buttons;

}

const renderQuiz = quiz => {
  console.log('quiz from render: ', quiz);

}

const addClick = (buttons, data) => {
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // развернутая запись
      // data.find(item => {
      //   console.log('item: ', item);
      //   console.log('item: ', item.id);
      //   console.log('btn.id', btn.dataset.id);
      //   console.log(item.id === btn.dataset.id);
      //   return item.id === btn.dataset.id
      // })
      // короткая запись
      const quiz = data.find(item => item.id === btn.dataset.id)
      renderQuiz(quiz)
    })
  });
}

// запуск приложения
const initQuiz = () => {


  const data = getData();
  const buttons = renderTheme(data);

  addClick(buttons, data)

};

initQuiz();
