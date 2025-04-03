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
//? Saqué lista de hombres, falta darselo a Card.js para que pinte una en cada Card.
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
export { numberOfColumns, imagesListPerson };

//pixelImg()

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
</div> </main>`;

//<div class="pruebaPerson">
//    <img class="pruebaImgPerson" src="./assets/pinterest_logo.png" alt="pinterest">
//
//</div> 
createColumns()

const accesKey = 'ulcAHukAVcmsmE3YQCJcVOoI_rtjQjdVJzrx7QnswEI';
const endPoint = 'https://api.unsplash.com/search/photos';
let imagesList = {}
async function getImages(query) {
  let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  imagesList = await jsonResponse.results;


  //console.log(imagesList);
  if (imagesList.length === 0) {
    getImages('gatos');
    alert("¡Busqueda errónea!, por favor intentalo con palabras como gato, perro...");
  }
  else {
    //console.log(`vamos a crear cards`);

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
const imagesListPerson = []
async function getImagesPerson(queryPerson) {
  let response = await fetch(endPoint + '?query=' + queryPerson + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  let imagesListPersonA = await jsonResponse.results;
  //imagesListPerson = JSON.parse(JSON.stringify(imagesListPersonA));
  /* let prueba1 = imagesListPersonA.map(e);
  console.log(prueba1); */
  //let prueba4 = ["manzana", "banana", "cereza"];
  imagesListPersonA.forEach(function (fruta) {
    console.log(fruta);
    console.log(fruta.urls.thumb);
  });
  console.log(imagesListPersonA);
  console.log(imagesListPerson);

  //return imagesListPerson
}
getImagesPerson('man');
//console.log(imagesListPersonFile);
//console.log(imagesListPerson);
let prueba = [];
console.log(imagesListPerson);
console.log(imagesListPerson[1]);

console.log(imagesListPerson[0]);

//console.log(imagesListPerson);
//const color1 = imagesListPerson[0][1].color;

//console.log(color1);
const innerArray = imagesListPerson[0];  // El primer array interior
//const color2 = innerArray[1].color; // Acceder al color del segundo objeto dentro de ese array

console.log(innerArray);

console.log(imagesListPerson);  // Muestra toda la estructura de datos
console.log(imagesListPerson, [0]);  // Muestra el primer array
//console.log(imagesListPerson[0][1]);  // Muestra el segundo objeto dentro del primer array

if (imagesListPerson[0] && imagesListPerson[0][1]) {
  const color = imagesListPerson[0][1].color;
  console.log(color);  // Esto debería mostrar el color si existe
} else {
  console.log('Elemento no encontrado o fuera de rango');
}




prueba = imagesListPerson;
console.log(`hola`);

prueba.forEach(element => {
  console.log(`hola`);
  let e = element
  console.log(e); // Muestra el id de cada objeto
  // Realiza otras operaciones con 'element' según sea necesario
});
console.log(`hola`);



/* console.log(prueba);
const prueba1 = prueba.map(sub => sub[0])
console.log(prueba1); */
//let subArray = prueba.slice(0, 1);
//console.log(subArray);
//const subArray2 = prueba[0];
//console.log(subArray2);
/* const arrayPlano = prueba.flat();
console.log(arrayPlano);
const arrayDeCaracteres = Array.from(prueba);
console.log(arrayDeCaracteres); */

//const subArray3 = prueba[0]; // Accede al primer elemento del array principal
//console.log(subArray3); // Muestra el subarray completo
//console.log(subArray3[0]); // Muestra el primer objeto dentro del subarray
/* 
const arrayPrincipal = [
  [
    { id: 'DItYlc26zVI', slug: 'mens-blue-and-white-button-up-collared-top-DItYlc26zVI', created_at: '2019-09-16T02:55:02Z', updated_at: '2025-04-02T09:22:55Z' },
    { id: 'KIPqvvTOC1s', slug: 'man-crossing-both-arms-KIPqvvTOC1s', created_at: '2019-05-14T19:44:00Z', updated_at: '2025-04-02T06:19:01Z' },
    { id: 'G-jo31ESuRE', slug: 'man-in-white-and-black-pinstripe-suit-jacket-G-jo31ESuRE', created_at: '2016-11-29T14:21:58Z', updated_at: '2025-04-02T06:02:38Z' },
    { id: 'ymo_yC_N_2o', slug: 'man-in-gray-suit-jacket-and-black-pants-standing-o...brown-concrete-pathway-during-daytime-ymo_yC_N_2o', created_at: '2020-02-11T01:39:23Z', updated_at: '2025-04-02T06:29:48Z' },
    { id: 'd1UPkiFd04A', slug: 'man-standing-near-white-wall-d1UPkiFd04A', created_at: '2018-10-15T02:50:36Z', updated_at: '2025-04-02T06:13:00Z' },

  ]
];

const subArray = arrayPrincipal[0]; // Accede al primer elemento del array principal
console.log(subArray); // Muestra el subarray completo
console.log(subArray[0]); // Muestra el primer objeto dentro del subarray */