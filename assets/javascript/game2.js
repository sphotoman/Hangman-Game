/*Program needs to do: 
1. pick a random word. 
2. Take the player's guess. 
3. Quit the game if the player wants to. 
4. Check that the player's guess is a valid letter. 
5. Keep track of letters the player has guessed. 
6. Show the player their progress. 
7. Finish when the player has guessed the word. 
8. After player wins/loses the game should automatically choose another word and make the user play it. 

2-6 need to happen over and over so those should be loops. 
*/

/*Pseudocode the game:
Pick a random word 
While the word has not been guessed {
	Show the player their current progress 
	Get a guess from the player 
If the player wants to quit the game {
Quit the game 
}
Else if the guess is not a single letter {
	Tell the player to pick a single letter
}
Else {
	If the guess is in the word {
	Update the player's progress with the guess
	}
}
Congratulate player on guessing the word 
*/

//Word selector array 
var words = ["ford", "chevy", "bentley", "jaguar", "kia", "honda", "toyota", "jeep", "koenigsegg", "peugeot", "porsche", "tesla", "volkswagen", "volga", "lada", "zil", "spetsteh"];
var word = words[Math.floor(Math.random()*words.length)];
console.log('randomly selected word: ', word);

//creating answer array for blanks
var answer = [];

for (var i=0; i<word.length; i++){
	answer.push("-");
}
//keeps track of how many letters are left to be guessed
var remainingLetters=word.length;


//Trying to use document.getElementByID to call the currentWord and then should do a fn to document.create...something method
document.getElementById('currentWord').innerHTML= answer.join("");
console.log("currentWord");

//guess
var guess; 

//stored guesses 
var guesses = [];

//Guesses remaining 
var guessesRemaining = 6;
document.getElementById("guessesRemaining").innerHTML=guessesRemaining;

//Win/Lose Points counter 
var winPoints=0;
document.getElementById("winPoints").innerHTML=winPoints; 
var lossPoints=0;
document.getElementById("winPoints").innerHTML=lossPoints; 

//When any letter is clicked 
// var lettersGuessed = document.getElementById("lettersGuessed"); 

//This function is run whenever the user presses a key.
document.onkeyup = function(event){
	console.log(event);

	if (word.indexOf(event.key) > -1) {
	
 		for (var i = 0; i < word.length; i++) {
 			if (event.key === word[i]) {
 				answer[i] = event.key;	
 			}
 		}
 		if (answer.indexOf("-")===-1) {
 			winPoints++;
 			document.getElementById("winPoints").innerHTML=winPoints;
 			
 		}

 		document.getElementById('currentWord').innerHTML= answer.join("");	
 		
 		if (answer.indexOf("-")===-1) {
 			window.alert("your a winner");
 			if (window.confirm("OK to play Again\nCancel to Quit") == true);{
 				guessesRemaining=6;
 				document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
 				// lettersGuessed=[];
 				// document.getElementByID("lettersGuessed").innerHTML=lettersGuessed;
 				//create current word

 			}
		}
 		
 	} else {
 		
 		if(guesses.indexOf(event.key)===-1) {
	 		guessesRemaining--;
	 		console.log(guessesRemaining);
	 		document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
	 		guesses.push(event.key);
	 		document.getElementById("lettersGuessed").innerHTML=guesses;

	 	}
	 	
		if (guessesRemaining===0){
			console.log("zero guesses remain");
			window.alert("your a not a winner");
			if (window.confirm("You have come up a little short\nOK to play Again\nCancel to Quit") == true);{

			}
		}

	}	


 };

