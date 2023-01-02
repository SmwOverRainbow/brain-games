import startGame from '../index.js';

const task = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const randomQuest = () => {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
};

const correctAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEven = () => {
  startGame(task, randomQuest, correctAnswer);
};

export default brainEven;
