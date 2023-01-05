import _ from 'lodash';
import startGame from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let countDividers = 0;
  let divider = number;
  for (let i = number; i > 0; i -= 1) {
    if (number % divider === 0) {
      countDividers += 1;
    }
    divider -= 1;
  }

  if (countDividers > 2 || number === 1) {
    return false;
  }
  return true;
};

const getRoundData = () => {
  const randomQuest = _.random(1, 24);

  const correctAnswer = isPrime(randomQuest) ? 'yes' : 'no';

  return [randomQuest, correctAnswer];
};

const startBrainPrime = () => {
  startGame(task, getRoundData);
};

export default startBrainPrime;
