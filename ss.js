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

  let newArray = []
  function first(array, newArray) { // функция создаёт массив для вывода всех баллов
    
    array.forEach(players => {
        newArray.push(players.scorePoints) // создали МАССИВ 
    });
    console.log(newArray) // сейчас вывод просиходит МАССИВОМ
}
first(players, newArray) // использовали функцию, в output вывели массив. ВОПРОС: КАК ДОСТАТЬ МАССИВ ИЗ ФУНКЦИИ?

const maxV = Math.max.apply(null, newArray); // ОШИБКА! scoreArray НЕ СУЩЕСТВУЕТ, ТК МНЕ ЕГО НЕ ДОСТАТЬ ИЗ ФУНКЦИИ.
console.log(maxV);