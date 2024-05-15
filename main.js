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
    const select = document.querySelector('select');
    const category = select.value;
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
    const data = await response.json();
    const jokePara = document.getElementById('categoriesResult');
    jokePara.innerHTML = (data.value);
  } catch (error) {
    console.error(error);
  }
}
getJoke()

const categories = document.querySelector('select');
categories.addEventListener('change', getJoke);



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


  const form = document.getElementById('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // empêche le rechargement de la page lors de la soumission du formulaire
    getDataFromAPI(); // appelle la fonction pour récupérer les données de l'API
  });
  const button = document.getElementById('envoyer');
  button.addEventListener('click', getDataFromAPI);
  
  async function getDataFromAPI() {
    const input = document.getElementById('joke').value; // on récupère la valeur du champ de formulaire
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${input}`); // envoie la requête à l'API
    const data = await response.json(); // on récupère les données au format JSON
    // affiche les données dans le paragraphe
    const items = data.result.map(item => `<li>${item.value}</li>`); // On map sur l'élément result de l'API afin de trouver le "value" qui correspond aux blagues. Ensuite on les mets sous forme de listes.
    formResult.innerHTML = items.join(''); // On vient introduire les listes créees auparavant dans le paragraphe( ID = formResult )
    };
  
