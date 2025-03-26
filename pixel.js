import './style.css'
const img = document.getElementById('miImagen')
const canvas = document.getElementById('miCanvas')
const ctx = canvas.getContext('2d')
const allPixels = [];
img.onload = function () {
  // Ajustar el tamaño del canvas al tamaño de la imagen
  canvas.width = img.width
  canvas.height = img.height
  // Dibujar la imagen en el canvas
  ctx.drawImage(img, 0, 0)
  // Obtener los datos de los píxeles
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  // Recorrer cada píxel
  for (let i = 0; i < data.length; i += 4) {
    const red = data[i];
    const green = data[i + 1];
    const blue = data[i + 2];
    const alpha = data[i + 3];
    var colorPixel = `${red}, ${green}, ${blue}`;
    allPixels.push(colorPixel);
  }
}
img.onload();
function pixelImg() {
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
  // Ejemplo de uso:
  const valorOk = encontrarValorMasRepetido(allPixels);
  console.log(valorOk);
  let rValueOk = valorOk.slice(0, 3);
  console.log(rValueOk);
  let gValueOk = valorOk.slice(5, 8);
  console.log(gValueOk);
  let bValueOk = valorOk.slice(10, 13);;
  document.getElementById("myDiv").style.backgroundColor = `rgb(${rValueOk}, ${gValueOk}, ${bValueOk})`;
}
pixelImg();