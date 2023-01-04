import _ from 'lodash';
import startGame from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getRandomQuest = () => {
  const randomNumber1 = _.random(1, 20);
  const randomNumber2 = _.random(1, 20);
  return `${randomNumber1} ${randomNumber2}`;
};

const getCorrectAnswer = (string) => {
  const members = string.split(' ');
  const num1 = Number(members[0]);
  const num2 = Number(members[1]);
  const smallestNum = Math.min(num1, num2);
  let nod = smallestNum;

  for (let i = smallestNum; i > 0; i -= 1) {
    if ((num1 % nod === 0) && (num2 % nod === 0)) {
      return nod;
    }
    nod -= 1;
  }

  return nod;
};

const startBrainGcd = () => {
  startGame(task, getRandomQuest, getCorrectAnswer);
};

export default startBrainGcd;
