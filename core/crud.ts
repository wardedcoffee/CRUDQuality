import fs from "fs"; //ES6
// const fs = require("fs"); - CommonJS
const DB_FILE_PATH = "./core/db";

console.log("[CRUD]");

function create(content: string) {
    //salvar o content in local storage
    fs.writeFileSync(DB_FILE_PATH, content);
    return content;
}

// SIMULATION
create("Hoje eu preciso de vc");
console.log(create("Hoje eu preciso de vc 777777888"));