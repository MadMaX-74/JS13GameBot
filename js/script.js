'use strict'

//Функция проверяет является числом или нет
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

//Функция игрового бота
let createGame = function(){
  let correctNumber = Math.floor(Math.random() * 101)
  console.log(correctNumber)
  let getNumber = function() {
 
    //Функция старта игры
    let getAnswer = function(data) { 
      if (data) {
        getNumber()
      } else {
        alert('Спасибо, что поиграли со мной')
      }
    }
  
    //спросим пользователя + переменная для ответа
    let answer,
        userNumber = prompt('Угадай число от 1 до 100')
    
    if (userNumber === null) {
      answer = confirm('Введи число от 0 до 100!');
      getAnswer(answer);
    }
    else if (!isNumber(userNumber) || (parseFloat(userNumber) > 100)){
      answer = confirm('Введи число от 0 до 100!');
      getAnswer(answer);
    }
    else if (userNumber == correctNumber) {
      alert('Ты угадал!');
    } 
    else if (userNumber > correctNumber) {   
      answer = confirm('Загаданное число меньше. Попробуй еще');
      getAnswer(answer);
    } 
    else if (userNumber < correctNumber) {
      answer = confirm('Загаданное число больше. Попробуй еще');
      getAnswer(answer);
    }
  }
  return getNumber
}    

let game = createGame()
game()