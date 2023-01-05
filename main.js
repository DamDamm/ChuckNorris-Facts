async function getData() {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      const jokes = document.querySelector('p');
      jokes.innerHTML = JSON.stringify(data.value);

    } catch (error) {
      console.error(error);
    }
  }
  getData();

  const refresh = document.getElementById('refresh');
  console.log(refresh);
  refresh.addEventListener('click', getData);


  async function getCategories() {
    try {
      const select = document.getElementById('categories');
      const response = await fetch('https://api.chucknorris.io/jokes/categories');
      const data = await response.json();
      let options = '';
      data.forEach(category => {
        options += `<option>${category}</option>`;
      });
      select.innerHTML = options;
    } catch (error) {
      console.error(error);
    }
  }
  getCategories();
