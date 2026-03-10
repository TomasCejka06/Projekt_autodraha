export const SIZE = 20;

export let mapData = [];

export function createEmptyMap(){

mapData = [];

for(let y=0;y<SIZE;y++){

let row = [];

for(let x=0;x<SIZE;x++){
row.push("grass");
}

mapData.push(row);

}

}