#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const gamerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${gamerName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (number) => number % 2 === 0;

const game = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    if (gamerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${gamerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${gamerName}!`);
};

game();
