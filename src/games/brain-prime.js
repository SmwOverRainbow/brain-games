import _ from 'lodash';
import startGame from '../index.js';

const task = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const randomQuest = () => {
  const randomNumber = _.random(1, 23);
  return randomNumber;
};

const correctAnswer = (number) => {
  let countDividers = 0;
  let divider = number;
  for (let i = number; i > 0; i -= 1) {
    if (number % divider === 0) {
      countDividers += 1;
    }
    divider -= 1;
  }

  if (countDividers > 2) {
    return 'no';
  }
  return 'yes';
};

const brainPrime = () => {
  startGame(task, randomQuest, correctAnswer);
};

export default brainPrime;
