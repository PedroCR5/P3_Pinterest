export function pixelImg(imgUsadaCard, iCard) {
  const img = document.getElementById(`miImagen${iCard}`);
  let canvas = document.getElementById(`miImagenCanvas${iCard}`);

  //console.log(imgUsadaCard);

  /* const canvas = img;
  console.log(canvas); */

  const ctx = canvas.getContext('2d');
  //console.log(ctx);

  const allPixels = [];
  console.log(allPixels);

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
  }
  img.onload();
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
  /*  console.log(valorOk);
   let rValueOk = valorOk.slice(0, 3);
   console.log(rValueOk);
   let gValueOk = valorOk.slice(5, 8);
   console.log(gValueOk);
   let bValueOk = valorOk.slice(10, 13);;
   document.getElementById("miImagen").style.backgroundColor = `rgb(${rValueOk}, ${gValueOk}, ${bValueOk})`; */
  //const pruebaRGB = "rgb(" + valorOk + ")";
  const pruebaRGB = "rgb(255,0,0)";

  return pruebaRGB;
  return valorOk
}
