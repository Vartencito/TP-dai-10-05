export const PI = 3.14;

export const sumar = (n1, n2) => n1 + n2

export const restar = (n1, n2) => n1 - n2;

export function multiplicar(n1, n2) {
    return n1 * n2;
}

export function dividir(n1, n2) {
    if (n2 == 0) {
        return console.log("no se puede dividir por 0");
    } else {
        return n1 / n2;
    }
}