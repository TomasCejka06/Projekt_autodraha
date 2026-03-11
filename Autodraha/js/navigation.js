import { createEmptyMap } from "./mapModel.js";
import { renderGrid } from "./grid.js";
import { setCurrentMapName } from "./storage.js";

export function initNavigation(){

    const menu = document.getElementById("menu");
    const editor = document.getElementById("editor");

    document.getElementById("newMapBtn").onclick = () => {

        createEmptyMap();
        renderGrid();

        menu.classList.add("hidden");
        editor.classList.remove("hidden");
        setCurrentMapName(null);
    };

    document.getElementById("backBtn").onclick = () => {

        editor.classList.add("hidden");
        menu.classList.remove("hidden");

    };

}