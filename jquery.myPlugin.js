(function( $ ) {
    var methods = {
        start :function (){
          alert("Добро пожаловать в игру Висилица! Отгадывайте слова, вводя буквы. Удачи!")
          var words = ["Лето", "Море", "универ", "капуста", "мама"];
          var word = words[Math.floor(Math.random() * words.length)].toLowerCase();
          var crossedOutLettersInAWord = [];
              for (var i = 0; i < word.length; i++) {
                  crossedOutLettersInAWord[i] = " _ ";
              }
              for (var g = 0; g < word.length; g++){
                  eval("var id_"+g+"="+g);
                  id_0 = word[0];
                  id_1 = word[1];
                  id_2 = word[2];
                  id_3 = word[3];
                  id_4 = word[4];
                  id_5 = word[5];
                  id_6 = word[6];
                  id_7 = word[7];
              }
          var longWord = word.length;
          var wordGuessedLetters = crossedOutLettersInAWord;
          var numberOfAttempts = 8;
          alert("Слово состоит из " + "''" + longWord + "''" + " букв " + crossedOutLettersInAWord.join(" ") + " и у Вас есть " + numberOfAttempts + " попыток!");
              while ((numberOfAttempts !== 0) && (longWord > 0)) {
                  var guess = prompt("Укажите, пожалуйста, одну букву из загаданного слова").toLowerCase();
                   if (guess === null) {
                      break;
                   } else if (guess.length !== 1) {
                      alert("Пожалуйста, введите только одну букву!");
                   } else {
                      for (var p = 0; p < word.length; p++) {
                          if ( guess === wordGuessedLetters[p]) {
                              alert("Такая буква уже отгадана, попробуйте другую!")
                              break;
                          } 
                          if ( guess === word[p]) {
                              wordGuessedLetters[p] = guess;
                              longWord--;
                              restOfLetter = longWord;
                          }
                      }
                      for (var c = 0; c < 1; c++) {
                           if (id_0 === guess || id_1 === guess || id_2 === guess || id_3 === guess || id_4 === guess || id_5 === guess || id_6 === guess || id_7 === guess){
                              alert("Вы отгадали букву!!! " + wordGuessedLetters.join(" ") + " колличество ваших попыток = " + numberOfAttempts)
                              break;
                          } else {
                              numberOfAttempts--;
                              alert("Увы, но такой буквы в слове " + wordGuessedLetters.join(" ") + " нет, колличество ваших попыток = " + numberOfAttempts)
                              break;
                          }
                      }
                  }               
              }
          if (longWord == 0){
              alert("Вы отгадали все " + "''" + word.length + "''" + " букв в слове " + wordGuessedLetters.join(" ") + " и у Вас в запасе осталось ещё " + numberOfAttempts + " попыток!");
              } 
              else {alert("У вас закончились попытки и слово не отгаданно, попробуйте заново :(")} 
          
}}
     $.fn.myPlugin = function(method) { 
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
          } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
          } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
          } 
          return this.each(methods[start]);
         
        };
      })( jQuery );