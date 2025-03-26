import { numberOfColumns } from "../../../main";

export function createColumns() {
  const divMainContainer = document.querySelector(".mainContainerCards");
  for (let i = 0; i < numberOfColumns; i++) {
    divMainContainer.innerHTML += `<div class="container${i + 1}" id=div${i + 1}></div>`
  }
}
