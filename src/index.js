import getJoke from './joke';
import displayController from './display_controller';

document.querySelector('body').appendChild(displayController.generateJokeAppContainer());

getJoke().then(res => {
  const [jokeSetup, jokePunchline] = res;

  document.querySelector('#joke-setup').textContent = jokeSetup;
  document.querySelector('#joke-punchline').textContent = jokePunchline;
});
