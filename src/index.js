import './styles/style.css';

import joke from './joke';
import displayController from './display_controller';

const eventHandlers = (() => {
  const newJokeBtn = () => {
    document.querySelector('#new-joke-btn').addEventListener('click', () => {
      joke.display();
    });
  }

  return { newJokeBtn }
})();

(function initialRender() {
  document.querySelector('body').appendChild(displayController.generateJokeAppContainer());
  joke.display();
  eventHandlers.newJokeBtn();
})();
