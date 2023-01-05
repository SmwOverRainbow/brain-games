import _ from 'lodash';
import startGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const randomQuest = _.random(1, 100);
  const correctAnswer = isEven(randomQuest) ? 'yes' : 'no';

  return [randomQuest, correctAnswer];
};

const startBrainEven = () => {
  startGame(task, getRoundData);
};

export default startBrainEven;
