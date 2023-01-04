import startGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundData = () => {
  const randomQuest = Math.round(Math.random() * 100);
  const correctAnswer = randomQuest % 2 === 0 ? 'yes' : 'no';

  return [randomQuest, correctAnswer];
};

const startBrainEven = () => {
  startGame(task, getRoundData);
};

export default startBrainEven;
