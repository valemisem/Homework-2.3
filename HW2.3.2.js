class button {
  // Описание кнопки отправки сообщений
  constructor(height, width, color, type) {
    this.bHeight = height;
    this.bWidth = width;
    this.bColor = color;
    this.bType = type;
    this.props = `${this.bHeight}, ${this.bWidth}, ${this.bColor}, ${this.bType}`;
  }

  onClick() {
    console.log(this.props);
  }
}

let sendButton = new button("10", "50", "green", "button");
console.log(sendButton);

sendButton.onClick(); // вывод информации о кнопке

function testButton(buttonProperty, valueReference) {
  /*проверка, что свойства 
  этого экземпляра класса соответствуют заданным */

  if (buttonProperty == valueReference) {
    console.log("true");
  } else {
    console.log("false");
  }
}

testButton(sendButton.bHeight, 10);
testButton(sendButton.bWidth, 50);
testButton(sendButton.bColor, "green");
testButton(sendButton.bType, "button");
