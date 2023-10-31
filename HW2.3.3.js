const balance = 500
const costOfParcel = 100
let sms = 'посылка находится в ячейке код для получения A001DFX0'
let codeForParcel = 'A001DFX0'
let idOfParcel = '1432HGF'
let postOffice = [null, null, null,'1432HGF', null]

index = postOffice.indexOf('1432HGF') + 1
// console.log(index)

if (codeForParcel == 'A001DFX0' & balance >= costOfParcel) { //check 1
    let newBalance = balance - costOfParcel
    console.log(`Заберите посылку ${idOfParcel} из ячейки ${index}. Ваш счет составляет: ${newBalance}`)   
} else if (codeForParcel == 'A001DFX0'  & balance < costOfParcel){ //check 2
    console.log('недостаточно средств')
} else {
    console.log('неверный код')
} 



