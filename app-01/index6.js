// Biblioteca: country-to-currency
// La funcion retorna las iniciales de la moneda, no su nombre como tal

import paisAMoneda from 'country-to-currency'

const obtenerMoneda = (pais) => {
    const moneda = paisAMoneda[pais];
    return moneda;
}


let moneda = obtenerMoneda('US');
console.log(moneda);