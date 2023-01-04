import _ from 'lodash';
import startGame from '../index.js';

const task = 'What is the result of the expression?';

const getRoundData = () => {
  const randomNumber1 = _.random(0, 20);
  const randomNumber2 = _.random(0, 20);
  const operators = ['+', '-', '*'];
  const indexOperators = _.random(0, 2);
  const randomQuest = `${randomNumber1} ${operators[indexOperators]} ${randomNumber2}`;

  let correctAnswer = 0;
  if (randomQuest.includes('+')) {
    correctAnswer = randomNumber1 + randomNumber2;
  } else if (randomQuest.includes('-')) {
    correctAnswer = randomNumber1 - randomNumber2;
  } else {
    correctAnswer = randomNumber1 * randomNumber2;
  }
  return [randomQuest, correctAnswer];
};

const startBrainCalc = () => {
  startGame(task, getRoundData);
};

export default startBrainCalc;
