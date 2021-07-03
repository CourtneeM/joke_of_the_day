const displayController = (() => {
  const generateJokeContainer = () => {
    const jokeContainer = document.createElement('div');
    const jokeSetup = document.createElement('p');
    const jokePunchline = document.createElement('p');

    jokeSetup.id = 'joke-setup';
    jokePunchline.id = 'joke-punchline';

    [jokeSetup, jokePunchline].forEach(el => jokeContainer.appendChild(el));
    return jokeContainer;
  }
  
  const generateNewJokeBtn = () => {
    const newJokeContainer = document.createElement('div');
    const newJokeBtn = document.createElement('button');

    newJokeContainer.id = 'new-joke-container';
    newJokeBtn.id = 'new-joke-btn';
    newJokeBtn.textContent = 'New Joke';

    newJokeContainer.appendChild(newJokeBtn);

    return newJokeContainer;
  }

  const generateJokeAppContainer = () => {
    const jokeAppContainer = document.createElement('div');
    jokeAppContainer.id = 'joke-app-container';

    [generateJokeContainer(), generateNewJokeBtn()].forEach(el => jokeAppContainer.appendChild(el));
    return jokeAppContainer;
  }

  return { generateJokeAppContainer }
})();

export default displayController;
