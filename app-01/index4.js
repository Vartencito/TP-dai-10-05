import fs from 'fs'

const cambiarAdentroDelArchivo = (newcontent, path) => {
    fs.writeFileSync(path, newcontent);
}

cambiarAdentroDelArchivo("este es un texto de ejemplo", "./src/modules/texto.txt");
