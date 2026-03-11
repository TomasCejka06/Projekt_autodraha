import { mapData, SIZE } from "./mapModel.js";

const grid = document.getElementById("grid");

export function renderGrid(){

    grid.innerHTML = "";

    for(let y = 0; y < SIZE; y++){
        for(let x = 0; x < SIZE; x++){

            const cell = document.createElement("div");

            cell.classList.add("cell");
            cell.classList.add(mapData[y][x]);

            cell.dataset.x = x;
            cell.dataset.y = y;

            grid.appendChild(cell);
        }
    }

}

export function getGrid(){
    return grid;
}