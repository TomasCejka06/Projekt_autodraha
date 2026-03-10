import { initNavigation } from "./navigation.js";
import { initEditor } from "./editor.js";
import { showSavedMaps } from "./storage.js";

function initApp(){

initNavigation();
initEditor();
showSavedMaps();

}

initApp();