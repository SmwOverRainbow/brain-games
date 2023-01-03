import readlineSync from 'readline-sync';

const startGame = (task, randomQuest, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  task();

  for (let i = 0; i < 3; i += 1) {
    const question = randomQuest();
    console.log(`Question: ${question}`);
    const expectedAnswer = correctAnswer(question);
    const gamerAnswer = readlineSync.question('Your answer: ');
    if (gamerAnswer.toString() === expectedAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${gamerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${gamerName}!`);
};

export default startGame;
