 class Persona{
    constructor(idPersona, apellido, nombre, edad, genero) {
        this.idPersona = idPersona;
        this.apellido = apellido;
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    //implementar los metodos
    imprimirDatos(){
        console.log(`_______________________________`);
        console.log(`________DATOS DE PERSONA_______`);
        console.log(`Identificacion---> ${this.idPersona}`);
        console.log(`Apellido----------> ${this.apellido}`);
        console.log(`Nombre--------------> ${this.nombre}`);
        console.log(`Edad------------------> ${this.edad}`);
        console.log(`Genero--------------> ${this.genero}`);
        console.log(`_______________________________`);
    }
 } 
export default Persona



