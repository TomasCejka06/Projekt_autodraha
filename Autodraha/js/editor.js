import { mapData } from "./mapModel.js";
import { renderGrid, getGrid } from "./grid.js";

export function initEditor(){

    const grid = getGrid();

    grid.addEventListener("click", function(e){

        if(!e.target.classList.contains("cell")) return;

        const x = e.target.dataset.x;
        const y = e.target.dataset.y;

        let type = mapData[y][x];

        if(type === "grass") type = "road";
        else if(type === "road") type = "water";
        else type = "grass";

        mapData[y][x] = type;

        renderGrid();

    });

}