import { mapData } from "./mapModel.js";
import { renderGrid } from "./grid.js";

let currentMapName = null;



export function saveMap(){

    if(!currentMapName){

        currentMapName = prompt("Zadej název mapy:");

        if(!currentMapName) return;

    }

    localStorage.setItem("map_" + currentMapName, JSON.stringify(mapData));

    alert("Mapa uložena!");

    showSavedMaps();

}



export function showSavedMaps(){

    const container = document.getElementById("savedMaps");

    container.innerHTML = "";

    for(let key in localStorage){

        if(key.startsWith("map_")){

            const name = key.replace("map_","");

            const wrapper = document.createElement("div");

            
            const loadBtn = document.createElement("button");
            loadBtn.textContent = name;

            loadBtn.onclick = () => loadMap(name);

            
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Smazat";

            deleteBtn.onclick = () => deleteMap(name);

            wrapper.appendChild(loadBtn);
            wrapper.appendChild(deleteBtn);

            container.appendChild(wrapper);

        }

    }

}



function loadMap(name){

    currentMapName = name;

    const data = localStorage.getItem("map_" + name);

    const parsed = JSON.parse(data);

    for(let y = 0; y < parsed.length; y++){
        for(let x = 0; x < parsed[y].length; x++){

            mapData[y][x] = parsed[y][x];

        }
    }

    renderGrid();

    document.getElementById("menu").classList.add("hidden");
    document.getElementById("editor").classList.remove("hidden");

}



function deleteMap(name){

    if(!confirm("Opravdu chceš smazat tuto mapu?")) return;

    localStorage.removeItem("map_" + name);

    showSavedMaps();

}



export function setCurrentMapName(name){
    currentMapName = name;
}