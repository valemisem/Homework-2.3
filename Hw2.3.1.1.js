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

// 1. используя функцию с лекции с использованием forEach:

let newArray = [];
function first(array, newArray) {
  // функция создаёт массив для вывода всех баллов

  array.forEach((players) => {
    newArray.push(players.scorePoints); // создали МАССИВ
  });
  console.log(newArray);
}
first(players, newArray);

const maxV = Math.max.apply(null, newArray);
console.log(maxV); // вывела максимальное значение
