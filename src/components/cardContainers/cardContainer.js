import { windowWidth, numberOfColumns } from "../../../main";
//console.log(numberOfColumns);

/* let numberOfColumnsHere = 2;
console.log(numberOfColumnsHere); */

export function createColumns() {
  console.log(numberOfColumns);

  const divMainContainer = document.querySelector(".mainContainerCards2");
  for (let i = 0; i < numberOfColumns; i++) {
    divMainContainer.innerHTML += `<div class="container${i + 1} containersList" id=div${i + 1}></div>`
  }
}
