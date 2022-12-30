import readlineSync from 'readline-sync';

const greeting = () => {
  const gamerName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${gamerName}!`);
};

export default greeting;
