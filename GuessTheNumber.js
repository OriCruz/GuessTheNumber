/**
 *The program generates a random number between 1-100 
 *The user has to guess the number
 *After each guess, the program will tell the user if their 
 guess was too high, too low, or correct. 
 *The game continues until the user guesses correctly. 
**/

const prompt= require('prompt-sync')();//definig prompt and importing package, previously downloaded in terminal

/** generateNumber function. 
 * generates a radom number between 1-100, using Math.random()*((max-min)+min).
 * This generates a random decimal number, but we want a whole or integer number.
 * Function @returns rNumber (an interger using the Math.round() function).
*/
function generateNumber() {
    const rNumber=Math.random()*((100-1)+1);
    return Math.round(rNumber);
}

/** guessingNumber function.
 * Functions that compares the randomNumber's integer against the user guess.
 * Uses while loop to determine if the number is bigger,smaller, or equal, displays message accordingly. 
 * Runs if/else if statement to ensure that the user keeps getting prompt until they guess. 
 * @returns congrats message and both numbers as a comparison.
 */
function guessigNumber() {
    //variables
    const randomNumber=generateNumber();
    let userNumber=0;//placeholer
    console.log("Welcome to the Numbers' Game! Bet you can't guess the number.");
    
    while (randomNumber!==userNumber) {
        userNumber = parseInt(prompt("Please enter your best guess---> "), 10);
       
        if(randomNumber>userNumber){
           console.log("You guessed too low, try a bit higher next time!");
        }
        else if(userNumber>randomNumber){
            console.log("You guessed too high, try a bit lower next time!");
        }
        else{
            
        return ("Congrast! You guess correctly, "+ userNumber+ " and " + 
            randomNumber + " are the same!");
            //returning the Winning message, the while loop ends.
        }
      
    }
}

console.log(guessigNumber());
