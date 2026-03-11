import { initNavigation } from "./navigation.js";
import { initEditor } from "./editor.js";
import { showSavedMaps, saveMap } from "./storage.js";

function initApp(){

    initNavigation();
    initEditor();
    showSavedMaps();

    const saveBtn = document.getElementById("saveMapBtn");

    if(saveBtn){
        saveBtn.onclick = saveMap;
    }

}

document.addEventListener("DOMContentLoaded", initApp);