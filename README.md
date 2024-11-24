# Guess the number

## Description

The program allows the user to guess a number between 1-100, by generating a random number and testing the user's guess to the computer's. This game is meant to be utilized through the console/terminal.

Program allows user to guess a number within 1-100, by generating a random number and testing the user's guess to the computer's. This game is meant to be utilized through the console/terminal. 

## Features

- Check if the user's guess is too, too low, or matches the computer's number. 
- Games continues until the user guesses correctly. 
- No use of callback functions, the prompt-sync package was installed to retrieve the user's input. 
- Once the user guesses correctly, the game return a congratulating message and prints both the user's and computer guess. 

## Guess the number_v1
Same purpose of Guess the Number game, but with a couple more features integraded making this console game interactive for the user.

## Features 
-Validates user's input by returning true if the guess is a whole number and if once the input in paser into an integer it can be converted. 
-If the input is not valid, the user will be prompted to re-enter a valid input. 
- Check if the user's guess is too, too low, or matches the computer's number. 
- Games continues until the user guesses correctly or the run out of rounds (they get 10 per game.)
- No use of callback functions, the prompt-sync package was installed to retrieve the user's input. 
- Once the user guesses correctly, the game return a congratulating message and prints both the user's and computer guess. 
-If the user runs out of rounds, the game stops and they get a message displaying that they ran out of rounds. 

## Installation 
```bash
git clone https://github.com/OriCruz/GuessTheNumber.git
cd GuessTheNumber
npm install
