import { windowWidth, numberOfColumns, imagesListPerson } from "../../../main";
import { createButton } from "../button/button";
import "./card.css";
//simport { pixelImg } from "../../../pixel";


export function createCards(imagesList) {
  //console.log(imagesList);
  console.log(imagesListPerson);
  const divMainContainer = document.querySelector(".mainContainerCards");
  divMainContainer.innerHTML = ``;
  //Dividir el imagesList en numberOfColumns
  // o repartir

  /* const divs = [];
  for (let j = 0; j < 4; j++) {
    divs.push += (document.getElementById(`div${j + 1}`))
  } */
  //console.log(divs);

  /* let nombresColumnas = [];

  for (let j = 0; j < numberOfColumns; j++) {
    nombresColumnas.push(document.getElementById(`div${j + 1}`))
  } */
  //console.log(nombresColumnas);

  //let numberOfImagesPerColumn = Math.ceil(imagesList.length / numberOfColumns);
  //console.log(numberOfImagesPerColumn);

  //Meter personas



  for (let i = 0; i < imagesList.length; i++) {
    //console.log(`Hola0`);
    //console.log(imagesList);
    //let imgPerson = imagesListPerson[0][0].urls.thumb;
    //[0][0].urls.thumb
    let imgParaUsar = imagesList[i].urls.thumb;
    let heightImg = imagesList[i].height / 10;
    let widthImg = imagesList[i].width / 10;
    //let imgPerson = imagesListPerson[i].urls.thumb;


    //console.log(numberOfColumns);
    //console.log(`Hola1`);

    divMainContainer.innerHTML +=
      `<div class="cardDiv">
        <div class="imageDiv${i} cardImgDiv" style="border: solid; background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url('${imgParaUsar}'); height: ${heightImg}px; width: ${windowWidth}px">
          <img class="imgImageDiv${i}" />
          <div class="initialIconsBox">

            ${createButton({ texto: "+53", size: "s", classInfo: `camera off on${i}` })}
            <div class="visitsBox">
              ${createButton({ texto: "Visitar", size: "l", classInfo: `visitar off center on${i}` })}
             
            </div>
            ${createButton({ texto: `${imagesList[i].likes}`, size: "s", classInfo: `heart off on${i}` })}
          </div>
          
          
        </div>  
       
        <div class="cardBottomPart">
        
          <img class="imgPersonRound" id="miImagenCanvas${i}" src="${imgParaUsar}" />
                    

          <p class="cardPUser${i} name"> </p>
          <img src="./assets/upImage.png" class="upImg" />
          <p class="cardPDate${i} date"> </p>
        </div>
      </div>`
    /* window.onload = function () {
      // Obtener el elemento canvas y su contexto
      var canvas = document.getElementByClass('imgPersonRound');
      var ctx = canvas.getContext('2d');

      // Crear una nueva imagen
      var img = new Image();
      img.src = '${imgParaUsar}'; // Cambia esto a la ruta de tu imagen

      // Dibujar la imagen en el canvas cuando se haya cargado
      img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    };
 */

    const imgImageDiv = document.querySelector(`.imgImageDiv${i}`);
    //console.log(imgImageDiv);

    const cardPUser = document.querySelector(`.cardPUser${i}`)
    const cardPDate = document.querySelector(`.cardPDate${i}`)

    cardPUser.innerText = imagesList[i].user.name;
    let dateCreated = imagesList[i].created_at;
    let day = dateCreated.substring(8, 10);
    let month = dateCreated.substring(5, 7);
    let year = dateCreated.substring(0, 4);
    cardPDate.innerText = `${day}/${month}/${year}`;
    //console.log(`Hola2`);

    // Añadimos la img y span a los button de la primera card.
    const imgButtonHeart = document.querySelector(`.heart`);
    imgButtonHeart.innerHTML = `
    <img class="imgHeart" src="./assets/heart.png" alt="pinterest">
    <span class="likesHeart">${imagesList[i].likes}</span>
    `
    const imgButtonCamera = document.querySelector(`.camera`);
    imgButtonCamera.innerHTML = `
    <img class="imgCamera" src="./assets/camera.png" alt="pinterest">
    <span class="likesHeart">+53</span>
    `
    //console.log(`Hola3`);

    //const BgColorRound = pixelImg(imgParaUsar, i);
    //console.log(BgColorRound);
    //document.getElementById(`miImagen${i}`).style.border = `10px solid ${BgColorRound}`;


  }
}

/* <div class="personBox">
              <img class="imgPersonDiv${i} imgPersonDiv" src="./assets/upImage.png"/>
             
            </div> */