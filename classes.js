//class is a template
class Car {
    constructor(color,brand,model){ // конструктор формирует наполнение объекта 
        this.color = color
        this.brand = brand
        this.model = model

    }
}
let myNewCar = new Car('r', 'g', 'h') // объекст кар, с ключами и значениями
console.log(myNewCar) 

// how to create a class 
let User = class {
    sayHello(){ // добавили метод
        console.log('jj')
    }
}
new User().sayHello() // вызвали метод 

// how to create a class 
function createClass(greetingsText){
    return class {
        sayHello(){ // добавили метод
            console.log(greetingsText)
        }


    }
}
let Person = createClass('приветик') // создали класс
new Person().sayHello() // создали объект, вызвали метод

// calculate points of a student
class StudentPoints {
    constructor(){
        this.pointsArray = []
    }
    addPoints(value){
        this.pointsArray.push(value)
    }
    calculatePointsSum(){
        let sum = 0
        for (let eachValue of this.pointsArray){
            sum +=eachValue
        }
        return sum 
    }
}


let igor = new StudentPoints()
igor.addPoints(2)
igor.addPoints(5)
console.log(igor.calculatePointsSum())

