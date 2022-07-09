
let wordPrompt = () => {
    let word= prompt("Please enter a word. The word must have a minimum of 8 letters");
    if (word.length>7){ 
        return word;
    } else {
        return wordPrompt();
    }
}

let userGuess = () => {
    let guess = prompt("Guess a letter");
    if (guess.length === 1 ) {
        return guess;
    } else { 
        return userGuess();
    }
}

let getStars = (stars, secret, guess) => {
    let returnedValue = stars.split("");
    for (let i=0; i < secret.length; i++) {
        if (secret[i] === guess) {
            returnedValue[i] = guess;
        }
    }
    
    return returnedValue.join("");    
}
// Prompt player 1 for a word. The word must have a minimum of 8 letters. 
// Present the word in the console with stars (********).
let secret = wordPrompt();
console.log("*".repeat(secret.length));
let stars = "*".repeat(secret.length);
let incorrectGuesses = 0;
let guessArr=[];
while (incorrectGuesses < 10 && stars !== secret) {
    
    // At this point continuously prompt player 2 for a letter.
    let guess = userGuess();
    if (guessArr.includes(guess) && guessArr.length > 0){
        console.log(`You already used":${guess}`)
    }else{
        guessArr.push(guess);
        if (secret.indexOf(guess)> -1 ) {
            stars = getStars(stars, secret, guess) 
            console.log(stars);
            if (stars === secret) {
                console.log("WE HAVE A WINNNERRRRRR!!!!!!");  
            }
        } else {
            incorrectGuesses++;
            if (incorrectGuesses === 10) {
                console.log("You lose!")
            }
        }   
    }
}



// If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// If player 2* wins, display a message that says CONGRATS YOU WIN.