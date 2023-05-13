const fs = require("fs");
const DB_FILE_PATH = "../core/db";

console.log("[CRUD]");

function create(content) {
    //salvar o content in local storage
    fs.writeFileSync(DB_FILE_PATH, content);
    return content;
}

// SIMULATION
create("Hoje eu preciso de vc");
console.log(create("Hoje eu preciso de vc"));