//array of words for user to guess in hangman
var listOfHangmanWords
listOfHangmanWords = ["Ford", "Chevy", "Bentley", "Jaguar", "Kia", "Honda", "Toyota"];

//choose word from array at random
var choosenWord = listOfHangmanWords[Math.floor(Math.random() * listOfHangmanWords.length)];


//split/parse word into an array of letters
var chars = choosenWord.split('');

//count the letters of hangmanWord
var characterCount = chars.length;

//desplay a series of underscores = to the number of letters in the hangmanWord ()
//I can get new things to display in the html page but.... how to build a series of underlines to represent each letter of the hidden work... then replace them with each guess.

var blank = "_ "
// seem like i need a function/loop to add items to the startingBlanks array.


var totalStartingBlanks = "how do i make this loooooop";

// var el = document.getElementById('word');
// el.textContent = characterCount + "-- that is the number of characters in your word you need to guess";  // what i reallly want in there is an array of "blanks" == char.length

// for (var i = 0; i < totalStartingBlanks; i++) {
	
// }

var wordBlanks = document.getElementById('word');
wordBlanks.textContent = blank + ;



console.log(listOfHangmanWords)
console.log(choosenWord)
console.log(chars)
console.log(characterCount)
console.log(totalStartingBlanks)

 // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

        // Alert the userGuess and computerGuess
        console.log("User guess: " + userGuess);
     
         
    };


// not working... trying to add guesses to array
// function collectGuesses (userGuess) {
// 	var allUserGuesses = [];
// 	event.key.push (allUserGuesses);
// console.log(allUserGuesses) ;
// }




// collect all userer guess in an array... (not working)

// {var allUserGuesses = [];
// 		userGuess.push (allUserGuesses);
// 	};




//function // compare userGuess with letters in the hangmanWords if they
// match - replace the startingBlanks "_" place holders with the letters
// that match. repeat till all letters have been compared and replaced.
// if no matches occur - subtract one life and desplay letter in
// "failedGuessYouDidNotMatchALetter"

//loop// the guessing - comparing until all the lives have been used or 
// var startingBlanks == to var choosenWord. if they match then it is a win, if not a loss.  add to win and loss column. restart game.





//declare and set wins and losses to 0
var wins = 0;
var losses = 0;