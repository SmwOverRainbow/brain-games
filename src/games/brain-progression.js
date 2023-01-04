import _ from 'lodash';
import startGame from '../index.js';

const task = 'What number is missing in the progression?';

const getRoundData = () => {
  const stepProgr = _.random(1, 5);
  const lengthProgr = 10;
  const firstNumProgr = _.random(0, 9);
  let progression = '';
  let nextNum = firstNumProgr;

  for (let i = 0; i <= lengthProgr; i += 1) {
    progression += `${nextNum} `;
    nextNum += stepProgr;
  }

  const positionOfMissingNum = _.random(0, 9);
  const numbers = progression.split(' ');
  const correctAnswer = numbers[positionOfMissingNum];
  numbers[positionOfMissingNum] = '..';
  const randomQuest = numbers.join(' ');

  return [randomQuest, correctAnswer];
};

const startBrainProgression = () => {
  startGame(task, getRoundData);
};

export default startBrainProgression;
