
//!DISEÑO PROPUESTO: https://www.figma.com/design/gLRrcetLfS9KkG2o43qpfB/PROYECTO3?node-id=0-1&t=mq0pGZimhN0ytHEM-1
//!Para la entrega bastará con que subas tu proyecto a github y nos facilites en enlace en el input que tienes a la derecha
//!EL REPOSITORIO DE GITHUB DEBE ESTAR PÚBLICO PARA PODER REALIZAR LA CORRECCIÓN.

//!Web FULL RESPONSIVE
//? Hacer header para Desktop
//? Responsive movil 393, desktop 1440.
//Si no se encuentran imágenes con la frase introducida, se realizará otra petición con la palabra gatos y la sugerencia de utilizar otra frase o palabra para una búsqueda correcta
// cuando pones busqueda fallida, que deje la última o dogs y de un aviso y no quede pillado
// me queda pillado con búsqueda fallida

//!Se recogen correctamente los datos correspondientes para conseguir un diseño como el aportado
//? Columnas Desktop 5
// Descargar más de 10 fotos
//? crear las columnas calculadas
//? repartir las cartas entre las columnas
//? hacer la impresión de las cartas por columnas definidas
// Poner a chica un nombre y a chico otro


import './style.css';
import { createButton } from './src/components/button/button';
import { createCards } from './src/components/card/card';
import { createColumns } from './src/components/cardContainers/cardContainer';
export let windowWidth = (window.innerWidth / 2.3);
export { numberOfColumns, imagesListPerson };
let numberOfColumns = Math.ceil(window.innerWidth / 300);
//console.log(numberOfColumns);

const divApp = document.querySelector("#app");
divApp.innerHTML =
  `<header>
  <div class="headerContainer">
    <img class="iconePinterest" src="./assets/pinterest_logo.png" alt="pinterest">
    <div class="headerSearchContainer">
      <span class="icon">🔍</span>
      <input class="inputInfo" id="word" type="text" placeholder=" Buscar...">
    </div>
    ${createButton({ texto: "D", size: "s", classInfo: "upRightButton" })}
  </div>
</header> 
<div class="myDiv">
    </div>
<main> 
<div class="mainContainerCards">
</div>
<div class="mainContainerCards2">
</div> </main>`;
createColumns()
const accesKey = 'ulcAHukAVcmsmE3YQCJcVOoI_rtjQjdVJzrx7QnswEI';
const endPoint = 'https://api.unsplash.com/search/photos';
//Información de Unsplash. Pintada en HTML.
let imagesList = {}
async function getImages(query) {
  let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  imagesList = await jsonResponse.results;
  if (imagesList.length === 0) {
    getImages('gatos');
    alert("¡Busqueda errónea!, por favor intentalo con palabras como gato, perro...");
    getImagesPerson('man');
    getImagesPerson('person');
  }
  else {
    createCards(imagesList);
    getImagesPerson('man');
    getImagesPerson('person');
  }
}
getImages('dog');
//Introducción de palabra a buscar
let firstWord = 'nada de nada';
document.getElementById('word').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const valorInput = event.target.value;
    console.log(firstWord);

    if (firstWord === 'nada de nada') {
      firstWord = event.target.value;
      console.log(firstWord);
    }
    console.log(firstWord);

    getImages(`${valorInput}`);
    event.target.value = '';
  }
});
document.querySelector(`.iconePinterest`).onclick = function () {
  if (firstWord === 'nada de nada') {
    getImages('cat');
  }
  else {
    getImages(firstWord)
  };

};
let imagesListP = []
const imagesListPerson = []
async function getImagesPerson(queryPerson) {
  let response = await fetch(endPoint + '?query=' + queryPerson + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  let imagesListPersonA = await jsonResponse.results;
  imagesListP = await jsonResponse.results;
  if (queryPerson === 'person') {
    for (let k = 0; k < 4; k++) {
      const element = document.getElementById(`miImagenCanvas${k}`);
      element.src = imagesListPersonA[0].urls.small;
      //console.log(imagesListPersonA);

      const elementName = document.querySelector(`.cardPUser${k}`);
      elementName.innerText = imagesListPersonA[8].user.first_name + " " + imagesListPersonA[0].user.last_name;
      // console.log(imagesListPersonA[0].user.first_name + " " + imagesListPersonA[0].user.last_name);

    }
  } else {
    for (let k = 4; k < 10; k++) {
      const element = document.getElementById(`miImagenCanvas${k}`);
      element.src = imagesListPersonA[0].urls.small;
      const elementName = document.querySelector(`.cardPUser${k}`);
      elementName.innerText = imagesListPersonA[0].user.first_name + " " + imagesListPersonA[0].user.last_name;
      //const elementName = document.getElementById(`cardPUser${k}`);
      /*   let example = imagesListPersonA[0].user.first_name + " " + imagesListPersonA[0].user.last_name;
        elementName.innerText = '${example}';
        console.log(imagesListPersonA[0].user.first_name + " " + imagesListPersonA[0].user.last_name); */
    }
  }
  return imagesListPersonA
}
getImagesPerson('man');
getImagesPerson('person');