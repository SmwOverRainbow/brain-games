import _ from 'lodash';
import startGame from '../index.js';

const task = 'What is the result of the expression?';

const getRandomQuest = () => {
  const randomNumber1 = _.random(0, 20);
  const randomNumber2 = _.random(0, 20);
  const operators = ['+', '-', '*'];
  const indexOperators = _.random(0, 2);
  return `${randomNumber1} ${operators[indexOperators]} ${randomNumber2}`;
};

const getCorrectAnswer = (string) => {
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

const startBrainCalc = () => {
  startGame(task, getRandomQuest, getCorrectAnswer);
};

export default startBrainCalc;
