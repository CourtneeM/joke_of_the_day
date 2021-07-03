import './styles/style.css';

import getJoke from './joke';
import displayController from './display_controller';



const displayJoke = () => {
  getJoke().then(res => {
    const [jokeSetup, jokePunchline] = res;
  
    document.querySelector('#joke-setup').textContent = jokeSetup;
    document.querySelector('#joke-punchline').textContent = jokePunchline;
  });  
}

const eventHandlers = (() => {
  const newJokeBtn = () => {
    document.querySelector('#new-joke-btn').addEventListener('click', () => {
      displayJoke();
    });
  }

  return { newJokeBtn }
})();

(function initialRender() {
  document.querySelector('body').appendChild(displayController.generateJokeAppContainer());
  displayJoke();
  eventHandlers.newJokeBtn();
})();
