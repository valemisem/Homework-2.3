const sampleData = require ('./data281023.json')
console.log(sampleData) 

// выполнение ДЗ
// 1. как описано в задании:
let score = [];
for (let player in sampleData) {
  score.push(sampleData[player].scorePoints);
}
console.log(score); // новый массив с баллами

const maxValue = Math.max.apply(null, score);
console.log(maxValue); // вывела максимальное значение

// 1. используя функцию с лекции с использованием forEach:

let newArray = [];
function first(array, newArray) {
  // функция создаёт массив для вывода всех баллов

  array.forEach((sampleData) => {
    newArray.push(sampleData.scorePoints); // создали МАССИВ
  });
  console.log(newArray);
}
first(sampleData, newArray);

const maxV = Math.max.apply(null, newArray);
console.log(maxV); // вывела максимальное значение
