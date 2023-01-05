// Ajout de la fonctionnalité qui permet d'afficher les categories dans la balise Select / Option
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


// Ajout de la fonctionnalité qui permet d'afficher une blague random de l'API par rapport avec la categories selectionnés
async function getJoke() {
  try {
    const select = document.querySelector('option');
    const category = select.value;
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
    const data = await response.json();
    const jokePara = document.getElementById('categoriesResult');
    jokePara.innerHTML = data.value;
  } catch (error) {
    console.error(error);
  }
}
getJoke()


const categories = document.getElementById('categories');
categories.addEventListener('click', getJoke);


// Ajout de la fonctionnalité qui permet d'afficher une blague random de l'API
async function getData() {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      const jokes = document.getElementById('randomResult');
      jokes.innerHTML = JSON.stringify(data.value);

    } catch (error) {
      console.error(error);
    }
  }
  getData();

  const refresh = document.getElementById('refresh');
  refresh.addEventListener('click', getData);



