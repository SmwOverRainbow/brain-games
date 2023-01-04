import _ from 'lodash';
import startGame from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getRoundData = () => {
  const randomNumber1 = _.random(1, 20);
  const randomNumber2 = _.random(1, 20);
  const randomQuest = `${randomNumber1} ${randomNumber2}`;

  const smallestNum = Math.min(randomNumber1, randomNumber2);
  let nod = smallestNum;
  let correctAnswer = 0;

  for (let i = smallestNum; i > 0; i -= 1) {
    if ((randomNumber1 % nod === 0) && (randomNumber2 % nod === 0)) {
      correctAnswer = nod;
      break;
    }
    nod -= 1;
  }

  return [randomQuest, correctAnswer];
};

const startBrainGcd = () => {
  startGame(task, getRoundData);
};

export default startBrainGcd;
