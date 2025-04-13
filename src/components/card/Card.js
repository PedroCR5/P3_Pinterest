import { windowWidth, numberOfColumns, imagesListPerson } from "../../../main";
import { createButton } from "../button/button";
import "./card.css";

export function createCards(imagesList) {
  //console.log(imagesList);
  //console.log(imagesListPerson);
  //const divMainContainer = document.querySelector(".mainContainerCards");

  //Hacer columnas
  //!Prueba columnas
  /*   const divMainContainer2 = document.querySelector(".mainContainerCards2");
    for (let j = 0; j < 3; j++) {
      divMainContainer2.innerHTML += `<div class="container${j + 1}" id=div${j + 1}></div>`;
      const divs = [document.getElementById('div1'), document.getElementById('div2'), document.getElementById('div3')];
      imagesList.forEach((photo, i) => {
        console.log(photo);
  
        let imgParaUsar = photo.urls.thumb;
        console.log(imgParaUsar);
  
        let heightImg = photo.height / 10;
        //let widthImg = photo[i].width / 10;
        //let imgPerson = imagesListPerson[i].urls.thumb;
        //Random color
        const divC = document.createElement(`div${i}`);
        divs[i % 3].appendChild(divC);
  
        console.log('hola');
  
        function getRandomColor() {
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          return `rgb(${r}, ${g}, ${b})`;
        }
        const randomColorImg = getRandomColor()
        //console.log(randomColorImg);
  
        //console.log(numberOfColumns);
        //console.log(`Hola1`);
  
        divMainContainer2.innerHTML +=
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
          
            <img class="imgPersonRound" id="miImagenCanvas${i}" src="${imgParaUsar}" style="border-color: ${randomColorImg}"/>
                      
  
            <p class="cardPUser${i} name"> </p>
            <img src="./assets/upImage.png" class="upImg" />
            <p class="cardPDate${i} date"> </p>
          </div>
        </div>`
  
        const imgImageDiv = document.querySelector(`.imgImageDiv${i}`);
  
        const cardPUser = document.querySelector(`.cardPUser${i}`)
        const cardPDate = document.querySelector(`.cardPDate${i}`)
  
        cardPUser.innerText = imagesList[i].user.name;
        let dateCreated = imagesList[i].created_at;
        let day = dateCreated.substring(8, 10);
        let month = dateCreated.substring(5, 7);
        let year = dateCreated.substring(0, 4);
        cardPDate.innerText = `${day}/${month}/${year}`;
  
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
  
  
  
      });
  
    } */
  //!Prueba columnas
  const divMainContainer1 = document.querySelector("#div1");
  const divMainContainer2 = document.querySelector("#div2");
  divMainContainer1.innerHTML = ``;
  divMainContainer2.innerHTML = ``;

  //Meter personas



  for (let i = 0; i < imagesList.length; i++) {


    let imgParaUsar = imagesList[i].urls.thumb;
    let heightImg = imagesList[i].height / 10;
    let widthImg = imagesList[i].width / 10;
    //let imgPerson = imagesListPerson[i].urls.thumb;
    //Random color

    function getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }
    const randomColorImg = getRandomColor()
    //console.log(randomColorImg);

    //console.log(numberOfColumns);
    //console.log(`Hola1`);

    /*   divMainContainer.innerHTML +=
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
            
              <img class="imgPersonRound" id="miImagenCanvas${i}" src="${imgParaUsar}" style="border-color: ${randomColorImg}"/>
                        
    
              <p class="cardPUser${i} name"> </p>
              <img src="./assets/upImage.png" class="upImg" />
              <p class="cardPDate${i} date"> </p>
            </div>
          </div>` */
    if (i < imagesList.length / 2) {
      divMainContainer1.innerHTML +=
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
            
              <img class="imgPersonRound" id="miImagenCanvas${i}" src="${imgParaUsar}" style="border-color: ${randomColorImg}"/>
                        
    
              <p class="cardPUser${i} name"> </p>
              <img src="./assets/upImage.png" class="upImg" />
              <p class="cardPDate${i} date"> </p>
            </div>
          </div>`;
      const imgImageDiv = document.querySelector(`.imgImageDiv${i}`);

      const cardPUser = document.querySelector(`.cardPUser${i}`)
      const cardPDate = document.querySelector(`.cardPDate${i}`)

      cardPUser.innerText = imagesList[i].user.name;
      let dateCreated = imagesList[i].created_at;
      let day = dateCreated.substring(8, 10);
      let month = dateCreated.substring(5, 7);
      let year = dateCreated.substring(0, 4);
      cardPDate.innerText = `${day}/${month}/${year}`;

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

    }
    else {
      divMainContainer2.innerHTML +=
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
          
            <img class="imgPersonRound" id="miImagenCanvas${i}" src="${imgParaUsar}" style="border-color: ${randomColorImg}"/>
                      
  
            <p class="cardPUser${i} name"> </p>
            <img src="./assets/upImage.png" class="upImg" />
            <p class="cardPDate${i} date"> </p>
          </div>
        </div>`
        ;
      const imgImageDiv = document.querySelector(`.imgImageDiv${i}`);

      const cardPUser = document.querySelector(`.cardPUser${i}`)
      const cardPDate = document.querySelector(`.cardPDate${i}`)

      cardPUser.innerText = imagesList[i].user.name;
      let dateCreated = imagesList[i].created_at;
      let day = dateCreated.substring(8, 10);
      let month = dateCreated.substring(5, 7);
      let year = dateCreated.substring(0, 4);
      cardPDate.innerText = `${day}/${month}/${year}`;

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
    }
    /* const imgImageDiv = document.querySelector(`.imgImageDiv${i}`);

    const cardPUser = document.querySelector(`.cardPUser${i}`)
    const cardPDate = document.querySelector(`.cardPDate${i}`)

    cardPUser.innerText = imagesList[i].user.name;
    let dateCreated = imagesList[i].created_at;
    let day = dateCreated.substring(8, 10);
    let month = dateCreated.substring(5, 7);
    let year = dateCreated.substring(0, 4);
    cardPDate.innerText = `${day}/${month}/${year}`;

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
 */
  }
}