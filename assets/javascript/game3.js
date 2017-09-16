
//Word selector array --can break into an array with objects so can add images to each object. But how?
var words = ["ford", "range rover", "chevy", "bentley", "jaguar", "kia", "honda", "toyota", "jeep", "koenigsegg", "peugeot", "porsche", "tesla", "volkswagen", "volga", "lada", "zil", "spetsteh"];
// console.log(words);
var index = Math.floor(Math.random()*words.length);
var word = words[index];
console.log('word: ', word);
//creating answer array for blanks
var answer = [];
for (var i=0; i<word.length; i++){
    if(word[i]===" ") {
    answer.push(" ");
    }else {
        answer.push("-");
    }
}
//keeps track of how many letters are left to be guessed
// var remainingLetters=word.length;
//Trying to use document.getElementByID to call the currentWord and then should do a fn to document.create...something method
document.getElementById('currentWord').innerHTML= answer.join("");
// console.log("answer:", answer);
//stored guesses 
var guesses = [];
//Guesses remaining 
var guessesRemaining = 6;
document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
//Win Points counter 
var winPoints = 0;
var lossPoints = 0;
document.getElementById("winPoints").innerHTML=winPoints; 
var keepPlaying; 
//This function is run whenever the user presses a key.
document.onkeyup = function(event){
/* word.indexOf(event.key)!==1 means that the event.key (guess) is in 
the word, it does not equal -1. thus it is in the word
and indexOf should give me the index of the letter guessed?
Not sure how to help computer figue out where in the answer 
to replace the letters*/
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(letter);
        if (letter) {
            if (word.indexOf(letter) > -1) {
            //answer[/*a number that represents where the event key is*/]
            //answer.indexOf(event.key) is the index of the key 
            /*write a for loop with an if stmnt saying that it should
            check for the key pressed to be inside that word & if it is
            then replace the answer variable starting at index 0 to the key pressed
            */
            
                    for (var i = 0; i< word.length; i++) {
                        
                        if (letter === word[i]) {
                            answer[i] = letter;
                            document.getElementById("currentWord").innerHTML=answer.join("");
                            console.log("answer:", answer);
                        }
                    }
                    if(answer.indexOf("-") === -1) {
                        winPoints++;
                        document.getElementById("winPoints").innerHTML=winPoints;
                         setTimeout(function(){ keepPlaying = confirm
                            ("Congrats You Won: Do you want to keep playing? ");
                            if(keepPlaying){
                            
                            reset(true);
                         }}, 1000);  
                    }
                        
                }else {
                    if(guesses.indexOf(letter)===-1) {
                        guessesRemaining--;
                        console.log(guessesRemaining);
                        document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
                        guesses.push(letter);
                        document.getElementById("lettersGuessed").innerHTML=guesses;
                        if (guessesRemaining===0) {
                            

                            lossPoints++;
                            document.getElementById("lossPoints").innerHTML=lossPoints;


                            setTimeout(function(){ keepPlaying = confirm("You lose: Want to try again?");
                                if(keepPlaying){
                                    reset(false);
                                }}, 1000);
                        }
                    }   
                }
        }
    }
};
/*using parameters i.e.setting var didWin inside the fn 
is really helpful for calling it inside the fn with an if/else 
and then saying true or false above when calling reset fn to follow
if didWin and else didn't win  */
function reset(didWin) {
console.log(didWin);
index = Math.floor(Math.random()*words.length);
word = words[index];
console.log("word:", word);
answer = [];

for (var i=0; i<word.length; i++){
    if(word[i]===" ") {
    answer.push(" ");
    }else {
        answer.push("-");
    }
}
document.getElementById('currentWord').innerHTML= answer.join("");
if (didWin) {
   }else {winPoints = 0;
document.getElementById("winPoints").innerHTML=winPoints;
}
guesses = [];
guessesRemaining = 6;
document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
document.getElementById("lettersGuessed").innerHTML=guesses;
}