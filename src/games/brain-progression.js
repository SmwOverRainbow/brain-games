import _ from 'lodash';
import startGame from '../index.js';

const task = () => {
  console.log('What number is missing in the progression?');
};

const getProgression = () => {
  const stepProgr = _.random(1, 5);
  const lengthProgr = 10;
  const firstNumProgr = _.random(0, 9);
  let progression = '';
  let nextNum = firstNumProgr;
  for (let i = 0; i <= lengthProgr; i += 1) {
    progression += `${nextNum} `;
    nextNum += stepProgr;
  }
  return progression;
};

const randomQuest = () => {
  const positionOfMissingNum = _.random(0, 9);
  const string = getProgression();
  const numbers = string.split(' ');
  numbers[positionOfMissingNum] = '..';
  return numbers.join(' ');
};

const correctAnswer = (string) => {
  const members = string.trim().split(' ');
  const indexOfMissingNum = members.indexOf('..');
  let missingNum = 0;
  let searchStep = 0;
  if (indexOfMissingNum === members.length - 1 || indexOfMissingNum === members.length - 2) {
    searchStep = members[indexOfMissingNum - 1] - members[indexOfMissingNum - 2];
    missingNum = searchStep + Number(members[indexOfMissingNum - 1]);
  } else {
    searchStep = members[indexOfMissingNum + 2] - members[indexOfMissingNum + 1];
    missingNum = members[indexOfMissingNum + 1] - searchStep;
  }
  return missingNum;
};

const brainProgression = () => {
  startGame(task, randomQuest, correctAnswer);
};

export default brainProgression;
