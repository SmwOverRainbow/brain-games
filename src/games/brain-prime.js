import _ from 'lodash';
import startGame from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRoundData = () => {
  const randomQuest = _.random(1, 24);

  let countDividers = 0;
  let divider = randomQuest;
  let correctAnswer = '';
  for (let i = randomQuest; i > 0; i -= 1) {
    if (randomQuest % divider === 0) {
      countDividers += 1;
    }
    divider -= 1;
  }

  if (countDividers > 2 || randomQuest === 1) {
    correctAnswer = 'no';
  } else {
    correctAnswer = 'yes';
  }

  return [randomQuest, correctAnswer];
};

const startBrainPrime = () => {
  startGame(task, getRoundData);
};

export default startBrainPrime;
