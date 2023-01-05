import _ from 'lodash';
import startGame from '../index.js';

const task = 'What is the result of the expression?';

const calc = (sign, num1, nun2) => {
  switch (sign) {
    case '+':
      return num1 + nun2;
    case '-':
      return num1 - nun2;
    case '*':
      return num1 * nun2;
    default:
      return undefined;
  }
};

const getRoundData = () => {
  const randomNumber1 = _.random(0, 20);
  const randomNumber2 = _.random(0, 20);
  const operatorsList = ['+', '-', '*'];
  const indexOperators = _.random(0, 2);
  const operator = operatorsList[indexOperators];
  const randomQuest = `${randomNumber1} ${operator} ${randomNumber2}`;

  const correctAnswer = calc(operator, randomNumber1, randomNumber2);

  return [randomQuest, correctAnswer];
};

const startBrainCalc = () => {
  startGame(task, getRoundData);
};

export default startBrainCalc;
