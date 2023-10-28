const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

// выполнение ДЗ
// 1. как описано в задании:
let score = [];
for (let player in players) {
  score.push(players[player].scorePoints);
}
console.log(score); // новый массив с баллами


const maxValue = Math.max.apply(null, score);
console.log(maxValue); // вывела максимальное значение

// 1. используя функцию с лекции: 

function first(array) { // функция создаёт массив для вывода всех баллов
    let scoresArray = []
    array.forEach(players => {
        scoresArray.push(players.scorePoints) // создали МАССИВ 
    });
    console.log(scoresArray) // сейчас вывод просиходит МАССИВОМ
}
first(players) // использовали функцию, в output вывели массив. ВОПРОС: КАК ДОСТАТЬ МАССИВ ИЗ ФУНКЦИИ?

const maxV = Math.max.apply(null, scoreArray); // ОШИБКА! scoreArray НЕ СУЩЕСТВУЕТ, ТК МНЕ ЕГО НЕ ДОСТАТЬ ИЗ ФУНКЦИИ.
console.log(maxV);