async function getData() {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      console.log(data);
      const jokes = document.querySelector('h1');
      jokes.innerHTML = JSON.stringify(data.value);

    } catch (error) {
      console.error(error);
    }
  }

  const refresh = document.getElementById('refresh');
  console.log(refresh);
  refresh.addEventListener('click', getData);
