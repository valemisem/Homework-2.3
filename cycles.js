let arr = [2,3,4,5,6,7,8,9,45,36,7,8,90]

// for (i=0; i<arr.length; i++) {
//     console.log("index is " + i + " and value " + arr[i])
// }

// for (i=0; i<arr.length; i++) {
//     let totalExpenses = 0
//     totalExpenses+=arr[i]
//     console.log(totalExpenses)
// } /* произошёл просто вывод всех элементов массива, тк каждый раз когда мы заходим в цикл,
// мы вначале обнуляем totalExpenses

// поэтому такую переменную как ноль, выносим ЗА ПРЕДЕЛЫ ЦИКЛА
// */

// let totalExpenses = 0
// for (i=0; i<arr.length; i++) {
//     totalExpenses+=arr[i]
// }
// console.log(totalExpenses)

// линейный алгоритм поиска

let target = 7; // lets find 7 in our array
let found = false;
for (i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    console.log("da");
    found = true;
    break;
  }
}
if (!found) {
  console.log("net");
}

// пузырьковая сортировка - цикл в цикле

let array = [2,3,4,5,6,7,8,9,45,36,7,8,90] // отсортировать по возрастанию
for (let i=0; i<array.length; i++){
    for (let j=0; j<array.length-i-1; j++){
        if (array[j]>array[j+1]){
            let temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }

    }
}
console.log(array)