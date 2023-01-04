import _ from 'lodash';
import startGame from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomQuest = () => {
  const randomNumber = _.random(1, 24);
  return randomNumber;
};

const getCorrectAnswer = (number) => {
  let countDividers = 0;
  let divider = number;
  if (number === 1) {
    return 'no';
  }
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

const startBrainPrime = () => {
  startGame(task, getRandomQuest, getCorrectAnswer);
};

export default startBrainPrime;
