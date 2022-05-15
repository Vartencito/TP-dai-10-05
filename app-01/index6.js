//biblioteca: country-to-currency

import paisAMoneda from 'country-to-currency'

const obtenerMoneda = (pais) => {
    const moneda = paisAMoneda[pais];
    return moneda;
}


let moneda = obtenerMoneda('AR');
console.log(moneda);