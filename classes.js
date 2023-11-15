// //class is a template
// class Car {
//     constructor(color,brand,model){ // конструктор формирует наполнение объекта 
//         this.color = color
//         this.brand = brand
//         this.model = model

//     }
// }
// let myNewCar = new Car('r', 'g', 'h') // объекст кар, с ключами и значениями
// console.log(myNewCar) 

// // how to create a class 
// let User = class {
//     sayHello(){ // добавили метод
//         console.log('jj')
//     }
// }
// new User().sayHello() // вызвали метод 

// // how to create a class 
// function createClass(greetingsText){
//     return class {
//         sayHello(){ // добавили метод
//             console.log(greetingsText)
//         }


//     }
// }
// let Person = createClass('приветик') // создали класс
// new Person().sayHello() // создали объект, вызвали метод

// // calculate points of a student
// class StudentPoints {
//     constructor(){
//         this.pointsArray = []
//     }
//     addPoints(value){
//         this.pointsArray.push(value)
//     }
//     calculatePointsSum(){
//         let sum = 0
//         for (let eachValue of this.pointsArray){
//             sum +=eachValue
//         }
//         return sum 
//     }
// }


// let igor = new StudentPoints()
// igor.addPoints(2)
// igor.addPoints(5)
// console.log(igor.calculatePointsSum())

// class Man {
//     #gender = 'man' // это остается внутри класса
//     getGender() {
//         return this.#gender = 'man' // способ получить скрытый объект
//     }
// }
// let newPerson = new Man
// console.log(newPerson.getGender())

// get and set -  позволяют менять информацию ПО ХОДУ ТОГО, как мы с ней работаем

class Pet {
    constructor (name, city){
        this.name = name
        this.city = city
    }
    set city(newCity){
        this._city = newCity}

    get city (){
        return this._city}
    }
    
    const bobik = new Pet ('bobik', 'barcelona')
    console.log(bobik.city)
    bobik.city = 'madrid'

console.log(bobik.city)

// наследование свойств объектов

class Students {
    constructor (nameOfStudent, yearOfStart) {
        this.nameOfStudent = nameOfStudent;
        this.yearOfStart = yearOfStart;
    }
    greetings(){
        console.log(`hi, happy to see you, new ${this.nameOfStudent}`)
    }
}

class ManualStudent extends Students { // подгруппа
    constructor(nameOfStudent, yearOfStart, gender) {
        super(nameOfStudent, yearOfStart);
        this.gender = gender;
    }
    greetings(){
        console.log(`hi, it is manual course`) // polymorphysm
        super.greetings()
    }
}

class Students_January extends ManualStudent { // сделаем еще одно наследование

}




let student = new ManualStudent ('petr', '13', 'male')
console.log(student.greetings())

let anotherStudent = new Students ('Maria', '12')
// console.log(anotherStudent.gender) // в обратную сторону наследование не работает

console.log(new Students_January('ivan', '13', 'male'))


