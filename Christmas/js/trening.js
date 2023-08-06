

// теория
// const string = 'homyak';
// let num = 2 + 3;
// let num2 = new Number('567');
// console.log('num2: ', num2);
// const bigInt = 23567765n;
// const bool = false
// const typeNull = null
// const und = undefined
// const sym = Symbol()

// const arr = []
// const obj = {}
// const func = function () { }

// const dates = new Date()
// console.log('Date: ', typeof dates);
// const regExp = new RegExp('\D')
// console.log('RegExp: ', typeof regExp);
// const err = new Error()
// console.log('err: ', err);
// const regExp2 = /\D/

// let randText = 'Денис Викторович'

// const item = '<aside title="link">' +
//   'Приветствуем Вас ' + '</aside>'
// console.log('item: ', item);

// const item2 = `<aside class="text">
// <h2>Приветствуем Вас ${randText} вам сегодня ${45 * 78} года</h2>
// </aside>`

// console.log('item2 : ', item2);

// let logic = 55 > 125
// console.log('logic: ', logic);

// let empty
// console.log('empty: ', empty);
// empty = null
// console.log('empty: ', empty);

// ключи обьекта это строки,но их можно без кавычек писать
// let family = {
//   uncle: 'Джек',
//   dad: 'Джеки',
//   mam: 'Сара',
//   "big brother": 'Арнольд',
//   saysHello: function () {
//     confirm('Ты скажешь привет это функции?')
//   },
//   thing: ['Квартира', 'Машина', 'Мечты', 'цели'],
//   sister: null,


// }

// let mass = [1, 5, 'red', 'book', 'Кино', { a: 44, b: 'Всякое' }]
// console.log('family: ', family['big brother']);
// console.log('family: ', family.dad);
// console.log('family: ', family);
// console.log('mass: ', family.thing);



// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');
//   console.log('value: ', value);

//   // если value пустое или строка останавливает цикл
//   if (!value) break; // (*)

//   sum += value;

// }
// alert('Сумма: ' + sum);


// const massNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let z = 0; z < massNum.length; z++) {

//   if (z % 2 == 0) {
//     continue
//   }

//   console.log(z);

// }

// function declaration
/* test()

function test() {
  console.log('-------Вызвал функцию до объявления-----');
}


function goTest(names, par1, par2, par3) {
  console.log('Вызов функции:"' + names + ' пошел в магазин"');
  return par1 + par2 + 20 - par3

}

let callGoTest1 = goTest("Генадий", 5, 8, 9)
console.log('callGoTest1: ', callGoTest1);
console.log('consoleGoTest2: ', goTest("Света", 5, 0, 9));
let callGoTest3 = goTest("Рома", 5, 2, goTest("Света", 5, 0, 9))
console.log('callGoTest3: ', callGoTest3); */

//function expretion

/* const foo = function (z, i) {
  return z + ' ' + i
}

console.log('Привет', 'новая страна');

const fooArrow = (y) => {
  return y ** 5
}

console.log('fooArrow: ', fooArrow(10));


const shortArrow = x => x * 100
console.log('shortArrow возращает результат без слова retutn: ', shortArrow(6000)); */

// let eggs = 47

// let names = ['Артем', 'Денис', 'Арнольд', 'Джек', 'Дездемона', 'Саурон']

// function goShop(name) {

//   if (!eggs) {
//     console.log('Магазин закрыт - кончились яйца')
//     return 'Сработал return'
//   }

//   console.log(`Пришел покупатель ${name}`);
//   if (eggs >= 10) {
//     eggs -= 10
//     console.log('Купил 10 яиц');
//     console.log('Купил батон');

//   } else if (eggs) {
//     console.log(`Купил ${eggs} яиц`);
//     console.log('Купил батон');
//     eggs -= eggs
//   }
//   else {
//     console.log('Яиц нет-');
//     console.log('Купил батон');
//   }
// }

// for (let x = 0; x < names.length; x++) {
//   goShop(names[x])

// }

// const result = eggs < 20 ? 'Закупить яиц' : 'Продавать дальше'
// console.log('result: ', result);

// while (result === 'Закупить яиц' && eggs < 48) {
//   eggs++
// }
// console.log('Яиц стало ' + eggs + ' Штук');
// console.log('Яйца закупили');

// console.log('Пришел покупатель...');
// if (eggs >= 10) {
//   eggs -= 10
//   console.log('Купить 10 яиц');
//   console.log('Купить батон');

// } else if (eggs) {
//   console.log(`Купить ${eggs} яиц`);
//   console.log('Купить батон');
//   eggs -= eggs
// }
// else {
//   console.log('Яиц нет');
//   console.log('Купить батон');
// }
// console.log('Пришел покупатель...');
// if (eggs >= 10) {
//   eggs -= 10
//   console.log('Купить 10 яиц');
//   console.log('Купить батон');

// } else if (eggs) {
//   console.log(`Купить ${eggs} яиц`);
//   console.log('Купить батон');
//   eggs -= eggs
// }
// else {
//   console.log('Яиц нет');
//   console.log('Купить батон');
// }
// console.log('Пришел покупатель...');
// if (eggs >= 10) {
//   eggs -= 10
//   console.log('Купить 10 яиц');
//   console.log('Купить батон');

// } else if (eggs) {
//   console.log(`Купить ${eggs} яиц`);
//   console.log('Купить батон');
//   eggs -= eggs
// }
// else {
//   console.log('Яиц нет');
//   console.log('Купить батон');
// }

// мини приложение мое
let currentYear = 2023

let allCar = [
  {
    name: 'Ладе',
    color: 'Зеленой',
    year: 1998
  },
  {
    name: 'Волге',
    color: 'Белой',
    year: 2004
  },
  {
    name: 'Москвичу',
    color: 'Черному',
    year: 2010
  },
  {
    name: 'BMW',
    color: 'Синей',
    year: 2007
  },

];

// if (currentYear - allCar[0]['year'] > 5 && currentYear - allCar[0]['year'] < 15) {
//   console.log('Машине больше 5 лет,но меньше 15');
// }
// else if (currentYear - allCar[0]['year'] > 15 && currentYear - allCar[0]['year'] < 25) {
//   console.log('Машине больше 10 лет,но меньше 25');
// } else {
//   console.log('Машине много лет');
// }


const calcCarYear = (year) => {
  return currentYear - year
}

const fooResult = function (data) {

  console.log(`------Приехала ${data + 1}ая машина в автомастерскую-----`);

  let colorCar = allCar[data]['color']
  let nameCar = allCar[data]['name']

  if (calcCarYear(allCar[data]['year']) > 5 && calcCarYear(allCar[data]['year']) < 15) {
    console.log(`${colorCar + ' ' + nameCar} больше 5 лет,но меньше 15`);
  }
  else if (calcCarYear(allCar[data]['year']) > 15 && calcCarYear(allCar[data]['year']) < 25) {
    console.log(`${colorCar + ' ' + nameCar} больше 10 лет,но меньше 25`);
  } else {
    console.log(`${colorCar + ' ' + nameCar} ${calcCarYear(allCar[data]['year'])} лет`);
  }


}

for (let z = 0; z < allCar.length; z++) {
  fooResult(z)
}





