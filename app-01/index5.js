const myURL = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');

const mostrarDatosUrl = (url) => {

    try {

        const host = url.host;
        const pathname = url.pathname;
        const params = url.searchParams

        const datos = {
            "host": host,
            "pathname": pathname,
            "params": params
        };

        return datos;
    } catch (e) {
        return console.log(`${e} Url inválida`);
    }

}

console.log(mostrarDatosUrl());