import readlineSync from 'readline-sync';

const startGame = (task, getRandomQuest, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  console.log(task);
  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    const question = getRandomQuest();
    console.log(`Question: ${question}`);
    const expectedAnswer = getCorrectAnswer(question);
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
