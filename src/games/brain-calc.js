import _ from 'lodash';
import startGame from '../index.js';

const task = () => {
  console.log('What is the result of the expression?');
};

const randomQuest = () => {
  const randomNumber1 = _.random(0, 20);
  const randomNumber2 = _.random(0, 20);
  const operators = ['+', '-', '*'];
  const indexOperators = _.random(0, 2);
  return `${randomNumber1} ${operators[indexOperators]} ${randomNumber2}`;
};

const correctAnswer = (string) => {
  let result = 0;
  const members = string.split(' ');
  if (string.includes('+')) {
    result = Number(members[0]) + Number(members[2]);
  } else if (string.includes('-')) {
    result = Number(members[0]) - Number(members[2]);
  } else {
    result = Number(members[0]) * Number(members[2]);
  }
  return result;
};

const brainCalc = () => {
  startGame(task, randomQuest, correctAnswer);
};

export default brainCalc;
