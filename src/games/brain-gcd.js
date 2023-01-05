import _ from 'lodash';
import startGame from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getRoundData = () => {
  const randomNumber1 = _.random(1, 20);
  const randomNumber2 = _.random(1, 20);
  const randomQuest = `${randomNumber1} ${randomNumber2}`;

  const gcd = (a, b) => {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };
  const correctAnswer = gcd(randomNumber1, randomNumber2);

  return [randomQuest, correctAnswer];
};

const startBrainGcd = () => {
  startGame(task, getRoundData);
};

export default startBrainGcd;
