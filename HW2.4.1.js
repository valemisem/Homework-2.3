// Задание 1. Создать функцию, содержащую расчет только для одного массива yearlyExpences

let expencesExamples = [
  2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
];

function expensesCalculation(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 1000) {
      sum += array[i];
    }
  }
  return sum;
}

console.log(
  `Расчёт для одного массива: ${expensesCalculation(expencesExamples)}`
); // Расчет только для одного массива yearlyExpences

// Задание 2. Создать тестовую функцию. Способ 1

let expensesAllExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
]; // тестовые объекты

let result = expensesAllExamples.map(({ yearlyExpences }) => yearlyExpences);

// console.log(result[0])

/* таким образом я получила тот самый "внутренний массив" - 
/* массив свойств объекта из массива, -
/* но это было ещё до того, как Вы написали в дискорде про цикл в цикле */

a = result[0];
b = result[1];
c = result[2];

function calculateAllExpenses(array) {
  let sum = 0;
  array.forEach((value) => {
    if (value > 1000) {
      sum += value;
    }
  });
  console.log(
    `Расчёт на данных тестовых объектах с использованием forEach, без использования цикла: ${sum}`
  );
}

calculateAllExpenses(
  a
); /*моя функция использует forEach, но вызывается не внутри цикла, 
/* а я вручную подставляю массивы a,b,c. */
calculateAllExpenses(b);
calculateAllExpenses(c);

// Задание 2. Способ 2

let arrayExpenses = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
]; // тестовые объекты

const expectedResult = [40590, 148200, 25709];

function calculateUsingCycles(array) {
  for (let i = 0; i < array.length; i++) {
    let sum1 = 0;
    arr = array[i];
    arr.yearlyExpences.forEach((value) => {
      // цикл forEach в цикле for
      if (value > 1000) {
        sum1 += value;
      }
    });
    console.log(
      `Расчёт на данных тестовых объектах с использованием forEach, с циклом for: ${sum1}`
    );

    testArrays(sum1);
  }
}
calculateUsingCycles(arrayExpenses);

function testArrays(sum1) {
  for (let i = 0; i < expectedResult.length; i++) {
    if (expectedResult[i] == sum1) {
      console.log("расчёты верны");
    }
  }
}
