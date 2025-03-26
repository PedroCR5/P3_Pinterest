//En este proyecto realizaremos una réplica de pinterest.
//Esta página nos permitirá ver diferentes tipos de imágenes mediante la búsqueda que realice un usuario.
//Será un proyecto hecho con VITE, creando componentes para repartir y reutilizar mejor nuestro código.
//Utilizaremos la API de unsplash para realizar las peticiones y que nos permita obtener diferentes imágenes según al búsqueda.
//Esta es la documentación de la API: https://unsplash.com/developers
//!Lo complicado del proyecto es pelearse con la documentación de la API para encontrar el endpoint idóneo para nuestras peticiones.
//!Todos los datos que aparecen pintados se obtienen mediante la API
//!TODOS los datos mostrados en el diseño propuesto, se pueden obtener mediante la propia API de Unsplash, incluidas las imágenes de los usuarios de cada foto.
//!DISEÑO PROPUESTO: https://www.figma.com/design/gLRrcetLfS9KkG2o43qpfB/PROYECTO3?node-id=0-1&t=mq0pGZimhN0ytHEM-1
//!Para la entrega bastará con que subas tu proyecto a github y nos facilites en enlace en el input que tienes a la derecha
//!EL REPOSITORIO DE GITHUB DEBE ESTAR PÚBLICO PARA PODER REALIZAR LA CORRECCIÓN.



//!El proyecto cumple con los requisitos mínimos del Proyecto 1 en cuanto al HTML y CSS
//? hacer variables margenes ...
//!Web FULL RESPONSIVE
//? Hacer header para Desktop
//? Responsive movil 393, desktop 1440.
//Si no se encuentran imágenes con la frase introducida, se realizará otra petición con la palabra gatos y la sugerencia de utilizar otra frase o palabra para una búsqueda correcta
// cuando pones busqueda fallida, que deje la última o dogs y de un aviso y no quede pillado
// me queda pillado con búsqueda fallida
//!El código está correctamente repartido en componentes
//? Foto persona--> componente
//? Iconos redondos de info-->componente
//!Se recogen correctamente los datos correspondientes para conseguir un diseño como el aportado
//? Columnas Desktop 5
//? Descargar más de 10 fotos
//? crear las columnas calculadas
//? repartir las cartas entre las columnas
//? hacer la impresión de las cartas por columnas definidas
//? separar hombre mujer
//? asociar fotos a cards
//? coger la foto de una persona y nombre
//? he cogido una imagen de persona y falta que se pinte en el html
// mejorar icono visitar
//Se limpiará el input después de cada búsqueda para que no moleste hacer una nueva búsqueda
//? Border foto persona color mayoritario de la foto
// Hacer la imagen formato de persona
// Ponerle borde
//? Poner foto persona
// Mover la img persona a su posición
//!Habrá una manera de volver al estado inicial de la página, por ejemplo haciendo click en el propio logo, y que nos muestre la primera petición que se hizo
//? contador para primera pulsación de enter y busqueda.
//? guardad esa busqueda como firstSearching para pintarla al pulsar icono Pinterest


import './style.css';
import { createButton } from './src/components/button/button';
import { createCards } from './src/components/card/card';
import { createColumns } from './src/components/cardContainers/cardContainer';
//import { pixelImg } from './pixel.js';

export let windowWidth = (window.innerWidth / 2.3);
export { numberOfColumns };

//pixelImg()

let numberOfColumns = Math.ceil(window.innerWidth / 300);
console.log(numberOfColumns);


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
<div class="pruebas">
      
    </div>


<main> 
<div class="mainContainerCards">
</div> </main>`;


createColumns()

const accesKey = 'ulcAHukAVcmsmE3YQCJcVOoI_rtjQjdVJzrx7QnswEI';
const endPoint = 'https://api.unsplash.com/search/photos';
let imagesList = {}
async function getImages(query) {
  let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  imagesList = await jsonResponse.results;


  console.log(imagesList);
  if (imagesList.length === 0) {
    getImages('gatos');
    alert("¡Busqueda errónea!, por favor intentalo con palabras como gato, perro...");
  }
  else {
    createCards(imagesList);
  }
}
getImages('dog');

document.getElementById('word').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const valorInput = event.target.value;
    getImages(`${valorInput}`);
    event.target.value = '';
  }
});


document.querySelector(`.iconePinterest`).onclick = function () {
  getImages('dog');
}

let imagesListP = {}

/* async function getImagesPeople(query) {
  let responseP = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
  let jsonResponseP = await responseP.json();
  imagesListP = await jsonResponseP.results;
  console.log(imagesListP);
  const divPruebas = document.querySelector(".pruebas");
  let imgParaUsarPersona = imagesListP[0].urls.thumb;
  console.log(imgParaUsarPersona);

  divPruebas.innerHTML +=
    `<div class="A1">
  
          <div style="border: solid; background-image: url('${imgParaUsarPersona}'); height: ${heightImg}px; width: ${windowWidth}px">
  
          </div>  
  
        </div>`
}
getImagesPeople('cara') */

