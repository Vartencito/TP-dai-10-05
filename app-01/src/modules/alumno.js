export default class alumno{
    constructor(DNI, nombre){
        this.DNI=DNI;
        this.nombre = nombre;
    }
    mostrar(){
        console.log(`el nombre del alumno es: ${this.nombre} y su DNI es: ${this.DNI} `)
    }
}