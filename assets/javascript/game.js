// TO SELF NOTES-Min


// Array count: 0    /   1    /     2       /   3    /  4    /     5    /     6      /
var words = ["Manure","Minor", "Melodious","Mental","Diminutive", "Minimal","Bomblastic"]
var guess= []

 // ... we generate a random number
 var random = words[Math.floor(Math.random() * words.length)];
console.log(random);
var solvedWord = []
for(var i=0; i< random.length; i++){
    solvedWord[i] = "_"
}

$("#displayWord").text(solvedWord);

function play(userGuess){
  console.log(userGuess);  
//loop 


for(var i=0; i< random.length; i++){

    var displayWord = "";

    if(random[i].toLowerCase() === userGuess.toLowerCase()){
        // the user guess exists in the random word
        // Update solved word to show guessed letter
    }

// check to see if user has solved the word so we can end the game




$(this).keypress(function(event){
    play(event.key);
});

// First Greeting
alert("Hello there. Wanna solve a code at your own risk?")

//Min's notes- It may not look like alot but I tried adding more code, but wasn't sure were to go next but ended up taking to much time relearning and understanding the concepts to basic javascript.
//Min's notes- Managed to accidentall have underscore lines dissapear. 
//Min's notes- CODING IS INCOMPLETE-10/20/18



