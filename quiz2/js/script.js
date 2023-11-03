'use strict';

const main = document.querySelector('.main');
const selection = document.querySelector('.selection');
const title = document.querySelector('.main__title');
//  1 ая
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
          question: 'Вопрос1?',
          answers: ['правильный1', 'правильный2', 'неправильный', 'неправильный'],
          correct: 2
        },
        {
          type: 'radio',
          question: 'Вопрос2?',
          answers: ['неправильный', 'правильный1', 'неправильный', 'неправильный'],
        },
        {
          type: 'checkbox',
          question: 'Вопрос3?',
          answers: ['правильный1', 'правильный2', 'правильный3', 'неправильный'],
          correct: 3
        },
        {
          type: 'checkbox',
          question: 'Вопрос4?',
          answers: ['неправильный', 'правильный1', 'неправильный', 'неправильный'],
          correct: 1
        },
        {
          type: 'radio',
          question: 'Вопрос5?',
          answers: ['неправильный', 'правильный1', 'неправильный', 'неправильный'],
        },
        {
          type: 'checkbox',
          question: 'Вопрос6?',
          answers: ['правильный1', 'правильный2', 'неправильный', 'неправильный'],
          correct: 2
        },
        {
          type: 'radio',
          question: 'Вопрос7?',
          answers: ['неправильный', 'правильный1', 'неправильный', 'неправильный'],
        },
        {
          type: 'checkbox',
          question: 'Вопрос8?',
          answers: ['правильный1', 'правильный2', 'неправильный', 'правильный3'],
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
          question: 'Вопрос00?',
          answers: ['правильный1', 'неправильный', 'неправильный', 'неправильный'],
        },
        {
          type: 'radio',
          question: 'Вопрос02?',
          answers: ['неправильный', 'правильный1', 'неправильный', 'неправильный'],
        },
        {
          type: 'checkbox',
          question: 'Вопрос03?',
          answers: ['правильный1', 'правильный2', 'правильный3', 'неправильный'],
          correct: 3
        },
        {
          type: 'checkbox',
          question: 'Вопрос04?',
          answers: ['неправильный', 'правильный1', 'неправильный', 'неправильный'],
          correct: 1
        }
      ]
    },
  ];

  return dataBase;
};

// 2-ая
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

// 5ая
// в функцию передаются элементы которые нужно плавно скрыть
const hideElem = (elem) => {
  // getComputedStyle выводит все стили элемента
  //getPropertyValue выводит из всех конкретный стиль
  let opacity = getComputedStyle(elem).getPropertyValue('opacity');
  console.log('opacity: ', opacity);

  const animation = () => {
    opacity -= 0.05;
    elem.style.opacity = opacity;

    // если прозрачность ноль анимация работает
    if (opacity > 0) {
      requestAnimationFrame(animation);
    } else {
      elem.style.display = 'none';
    }
  }

  requestAnimationFrame(animation);
}
// 8ая
// перемешать массив
const shuffle = array => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i -= 1) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }

  return newArray
}

// 7ая
// функция создает ключи ответов
const createKeyAnswers = data => {
  const keys = [];

  for (let i = 0; i < data.answers.length; i++) {
    if (data.type === 'radio') {
      keys.push([data.answers[i], !i])
    } else {
      keys.push([data.answers[i], i < data.correct])
    }
  }
  return shuffle(keys);

}

// 8ая
// функция создает список ответов с label и input,возращает массив label
const createAnswer = data => {
  // указывает тип чекбокса из базы data == quiz.list[questionCount]
  const type = data.type;
  // создать список ключей и правильных ответов
  const answers = createKeyAnswers(data);
  console.log('answers from createAnswer: ', answers);

  // создаю массив с label,инпутами и span,вешаю нужные классы и атрибуты
  const labels = answers.map((item, i) => {
    const label = document.createElement('label');
    label.className = 'answer';

    const input = document.createElement('input');
    input.type = type;
    input.name = 'answer';
    input.className = `answer__${type}`;
    input.value = i;

    const text = document.createElement('span');
    text.className = 'answer__text';
    text.textContent = item[0];
    label.append(input, text);

    return label;
  })

  const keys = answers.map(answer => answer[1]);
  return {
    labels,
    keys
  }
}

// 9ая
// выводит результат
const showResult = (result, quiz) => {
  console.log('result: ', result);
  const block = document.createElement('div');
  block.className = 'main__box main__box_result result';

  const percent = result / quiz.list.length * 100;
  console.log('percent: ', percent);

  let ratio = 0;
  for (let i = 0; i < quiz.result.length; i++) {
    if (percent >= quiz.result[i][0]) {
      ratio = i;
    };
  };

  block.innerHTML = `
   <h2 class="main__subtitle main__subtitle_result">Ваш результат</h2>
<div class="result__box">
  <p class="result__ratio result__ratio_${ratio + 1}">${result}/${quiz.list.length}</p>
  <p class="result__text">${quiz.result[ratio][1]}</p>
</div>

 `
  const button = document.createElement('button');
  button.className = 'main__btn result__return';
  button.textContent = 'К списку квизов';

  block.append(button);

  main.append(block);


};

// 4ая
// функция создает страницу с вопросами
const renderQuiz = quiz => {
  console.log('quiz from render: ', quiz);
  hideElem(title);
  hideElem(selection);

  // создаю блок где будут вопросы
  const questionBox = document.createElement('div')
  questionBox.classList.add('main__box', 'main__box_question')
  main.append(questionBox)

  // счетчик вопросов
  let questionCount = 0;
  //счетчик правильных ответов
  let result = 0;

  // показывает вопросы
  const showQuestion = () => {
    const data = quiz.list[questionCount];
    questionCount += 1;
    // console.log('data from showQuestion', data);

    questionBox.textContent = '';
    const form = document.createElement('form');
    form.className = 'main__form-question';
    // добавляю форме data-count = 1/10 
    form.dataset.count = `${questionCount}/${quiz.list.length}`;

    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.className = 'main__subtitle';
    legend.textContent = data.question;

    // создаю список ответов
    const answersData = createAnswer(data)
    // console.log('answer000: ', answers);

    const button = document.createElement('button');
    button.classList.add('main__btn', 'question__next');
    button.type = 'submit';
    button.textContent = 'Подтвердить';

    fieldset.append(legend, ...answersData.labels);
    form.append(fieldset, button);
    // вставляю форму в блок
    questionBox.append(form);

    // создать массив
    // form.answer просто коллекция без методов
    // console.log('llllll', [...form.answer]);

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let ok = false;
      const answer = [...form.answer].map(input => {
        if (input.checked) ok = true;
        return input.checked ? input.value : false;
      });

      if (ok) {
        // const r = answer.every((result, i) => {
        //   return !!result === answersData.keys[i]
        // })

        if (answer.every((result, i) => !!result === answersData.keys[i])) {
          result += 1;
        }

        // console.log(r);

        // проверяет количество вопросов и запускает следующий
        if (questionCount < quiz.list.length) {
          showQuestion()
        } else {
          // questionBox.innerHTML = '<h1>Вопросы кончились</h1>';
          hideElem(questionBox);
          showResult(result, quiz);
        }

      } else {
        // alert('Вы не выбрали ни одного ответа');
        form.classList.add('main__form-question_error');
        setTimeout(() => {
          form.classList.remove('main__form-question_error');
        }, 6000);
      };
    });
  }

  showQuestion();
}

// 3ая
// функция срабатывает при клике на тему,и навешивает клики на кнопки
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
      const quiz = data.find(item => item.id === btn.dataset.id);
      renderQuiz(quiz);
    })
  });
}

// 0ая
// запуск приложения
const initQuiz = () => {

  // получаю данные из базы
  const data = getData();
  // получаю все кнопки
  const buttons = renderTheme(data);

  // навешиваю клики на темы
  addClick(buttons, data);

};

initQuiz();

