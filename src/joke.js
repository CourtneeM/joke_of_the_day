const joke = (() => {
  const get = async () => {
    const jokeResponse = await fetch("https://official-joke-api.appspot.com/random_joke");
    const joke = await jokeResponse.json();
    const setup = joke.setup;
    const punchline = joke.punchline;
    return [setup, punchline];
  }

  const display = () => {
    get().then(res => {
      const [setup, punchline] = res;

      document.querySelector('#joke-setup').textContent = setup;
      document.querySelector('#joke-punchline').textContent = punchline;
    });
  }

  return { display }
})();

export default joke;
