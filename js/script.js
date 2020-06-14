'use strict'

//Функция проверяет является числом или нет
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

//Функция игрового бота
let createGame = function(){
  let correctNumber = Math.floor(Math.random() * 101),
      setValue = 10;

  console.log(correctNumber);

  let getNumber = function() {
 
    //Функция старта игры
    let getAnswer = function(data) { 
      if (data) {
        getNumber()
      } else {
        alert('Спасибо, что поиграли со мной')
      }
    }

    //Функция подсчитывает коичество израсходованных попыток
    let counterTry = function(userTry) { 
      userTry--
      return userTry
    }

    //Функция запуска
    let incorrectAnswer = function(answer) {
      setValue = counterTry(setValue)
      getAnswer(answer)
    }
  
    //спросим пользователя + переменная для ответа
    let answer,
        userNumber = prompt('Угадай число от 1 до 100')
    
    if (userNumber === null) {
      alert('Может, в следующий раз.')
    }
    else if (!isNumber(userNumber) || (parseFloat(userNumber) > 100)){
      answer = confirm('Введи число от 0 до 100!');
      getAnswer(answer);
    }
    else if (userNumber == correctNumber) {
      answer = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      if (answer) {
        correctNumber = Math.floor(Math.random() * 101);
        setValue = 10;
        console.log("Загаданное число", correctNumber);
        game();
      }
    }
    else if (setValue > 1){
      if (userNumber > correctNumber) {   
        answer = confirm('Загаданное число меньше. Осталось попыток ' + counterTry(setValue));
        incorrectAnswer(answer);
      } 
      else if (userNumber < correctNumber) {
        answer = confirm('Загаданное число больше. Осталось попыток47 ' + counterTry(setValue));
        incorrectAnswer(answer);
      }
    } 
    else if (setValue === 1) {
      answer = confirm('Попытки закончились, хотите сыграть еще?')
      if (answer) {
        correctNumber = Math.floor(Math.random() * 101);
        setValue = 10;
        console.log("Загаданное число", correctNumber);
        game();
      }
    }
  }
  return getNumber;
}    

let game = createGame();
game();