const fs = require("fs");

const obj = {
  name: "foo",
  dato: "otra cosa",
};

fs.writeFileSync(`./${obj.name}.json`, JSON.stringify(obj));

const datosDeArchivo = fs.readFileSync(`./${obj.name}.json`, "utf-8");

console.table({ datosDeArchivo });
