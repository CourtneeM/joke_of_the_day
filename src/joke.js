const getJoke = async () => {
  const jokeResponse = await fetch("https://official-joke-api.appspot.com/random_joke");
  const joke = await jokeResponse.json();
  const setup = joke.setup;
  const punchline = joke.punchline;
  return [setup, punchline];
}

export default getJoke;
