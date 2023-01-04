import startGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomQuest = () => {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
};

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const startBrainEven = () => {
  startGame(task, getRandomQuest, getCorrectAnswer);
};

export default startBrainEven;
