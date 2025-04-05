Conseguido


// Enlazar los js de componentes con main.js
// Hacer header para movil

// Botones--> componente
// Cartas--> componente

// Boton de inicio, explorar, crear
// Icono pinterest
// Icono pinterest que sea inicio de la búsqueda
// Input búsqueda


// conectar con la API

// Hacer cartas con fotos
// Cuadrar el ancho de las cartas a movil dos columnas
// Ancho de cartas que se mueva y refresque ¿? o no¿?
// altura cartas cada una la suya
// calcular el numero de columnas según ancho de pantalla

// Botones header mejorar
// primera carta tres circulos con datos, colocar y poner bien

// variables de colores bg text
//colocar iconos de la primera carta
// mejorar iconos, logos primera carta
// Añadir icono al lado de la fecha
// Colocar cosas debajo de la foto
// visitar ponerlo bien
// opacidad a la primera imagen encontrada
// buscar input que sea todo lo largo que se pueda
// borrar el listado de cards con cada nueva búsqueda

// listado fotos de gente

/* 
PS C:\Users\Usuario\Desktop\Coding\P3_Pinterest>  npm i --save colorthief           

added 36 packages, and audited 47 packages in 37s

14 packages are looking for funding
  run `npm fund` for details

2 moderate severity vulnerabilities

To address all issues, run:
  npm audit fix

Run `npm audit` for details. */

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
export function pixelImg(imgUsadaCard, iCard) {
  const img = document.getElementById(`miImagen${iCard}`);
  let canvas = document.getElementById(`miImagenCanvas${iCard}`);

  //console.log(imgUsadaCard);

  /* const canvas = img;
  console.log(canvas); */

  //const ctx = canvas.getContext('2d');
  //console.log(ctx);

  /* const allPixels = [];
  console.log(allPixels); */
  /* 
    img.onload = function () {
      // Ajustar el tamaño del canvas al tamaño de la imagen
      canvas.width = img.width
      canvas.height = img.height
      // Dibujar la imagen en el canvas
      ctx.drawImage(canvas, 1, 0);
      // Obtener los datos de los píxeles
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      console.log(imageData);
  
      const data = imageData.data;
      // Recorrer cada píxel
      console.log(`Red: ${data[0]}, Green: ${data[1]}, Blue: ${data[2]}, Alpha: ${data[3]}`);
      for (let i = 0; i < data.length; i += 4) {
        const red = data[i];
        const green = data[i + 1];
        const blue = data[i + 2];
        const alpha = data[i + 3];
        var colorPixel = `${red}, ${green}, ${blue}`;
        allPixels.push(colorPixel);
        //console.log(allPixels);
  
      }
    } */
  // img.onload();
  /* function encontrarValorMasRepetido(arr) {
    const contador = {};
    let maxRepeticiones = 0;
    let valorMasRepetido = null;
    for (const valor of arr) {
      contador[valor] = (contador[valor] || 0) + 1;
      if (contador[valor] > maxRepeticiones) {
        maxRepeticiones = contador[valor];
        valorMasRepetido = valor;
      }
    }
    return valorMasRepetido;
  } 
  const valorOk = encontrarValorMasRepetido(allPixels);
  */
  /*  console.log(valorOk);
   let rValueOk = valorOk.slice(0, 3);
   console.log(rValueOk);
   let gValueOk = valorOk.slice(5, 8);
   console.log(gValueOk);
   let bValueOk = valorOk.slice(10, 13);;
   document.getElementById("miImagen").style.backgroundColor = `rgb(${rValueOk}, ${gValueOk}, ${bValueOk})`; */
  //const pruebaRGB = "rgb(" + valorOk + ")";
  /* const pruebaRGB = "rgb(255,0,0)";

  return pruebaRGB; */
  //return valorOk
//}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//? Función para sacar el pixel más repetido
/* export function pixelImg(imgUsadaCard, iCard) {
  const img = document.getElementById(`miImagen${iCard}`);
  let canvas = document.getElementById(`miImagenCanvas${iCard}`);


  const ctx = canvas.getContext('2d');

  const allPixels = [];
  console.log(allPixels);

  function encontrarValorMasRepetido(arr) {
    const contador = {};
    let maxRepeticiones = 0;
    let valorMasRepetido = null;
    for (const valor of arr) {
      contador[valor] = (contador[valor] || 0) + 1;
      if (contador[valor] > maxRepeticiones) {
        maxRepeticiones = contador[valor];
        valorMasRepetido = valor;
      }
    }
    return valorMasRepetido;
  }
  const valorOk = encontrarValorMasRepetido(allPixels);
   console.log(valorOk);
   let rValueOk = valorOk.slice(0, 3);
   console.log(rValueOk);
   let gValueOk = valorOk.slice(5, 8);
   console.log(gValueOk);
   let bValueOk = valorOk.slice(10, 13);;
   document.getElementById("miImagen").style.backgroundColor = `rgb(${rValueOk}, ${gValueOk}, ${bValueOk})`;
  const pruebaRGB = "rgb(" + valorOk + ")";
  const pruebaRGB = "rgb(255,0,0)";

  return pruebaRGB;
} */