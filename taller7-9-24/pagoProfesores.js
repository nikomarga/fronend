//variables
let teachers = [];
let categorias = [90000, 70000, 50000, 20000];//0.Ph 1.Magister 2.Especialista 3.Profesional
let especialidades = ["Ph", "Magister", "Especialista", "Profesional"];
let nominaPorCategoria = [0, 0, 0, 0]; // Índice 0: Ph, 1: Magister, 2: Especialista, 3: Profesional
let totalDocentesPorCategoria = [0, 0, 0, 0]; //cuanta los docentes

let respuesta;


do {
//entradas 
    let nameTeacher = prompt("Digite el nombre del docente: ");
    let hoursWork = parseInt(prompt("Digite las horas diarias de trabajo: "));
    let years = parseInt(prompt("Cuantos años tiene en la empresa?  "));
    let categoria = parseInt(prompt("Categoria del docente: \n1.Ph \n2.Magister \n3.Especialista \n4.Profesional"));

    let fortnightHours = hoursWork * 15;
    let valorHora = categorias[categoria];
    let fortnightValue = valorHora * fortnightHours;

    
    //calculo de bono que le corresponde
    let bonus = 0;

    if (years < 2) {
        bonus = fortnightValue * 0.30;
    }else if(years >= 2 && years <= 5){
        bonus = fortnightValue * 0.50;
    }else if(years > 5 && years <= 10){
        bonus = fortnightValue * 0.60;
    }else if(years > 10){
        bonus = fortnightValue * 0.90;
    }
    //calculo valor del bono
    let valorNeto = fortnightValue + bonus;
    
    // Actualizar las nóminas y contar docentes por categoría
    nominaPorCategoria[categoria] += valorNeto;
    totalDocentesPorCategoria[categoria]++;

    // guarda de informacion del docente 
    teachers.push({
        name: nameTeacher,
        categoria: especialidades[categoria],
        horasTrabajadas: fortnightHours,
        valorHora: valorHora,
        bonus: bonus,
        valorNeto: valorNeto
    });


    respuesta = parseInt(prompt("Desea agregar a otro docente: \n1.SI \n2.NO"));
} while (respuesta === 1); 

// Salida de la nómina individual
document.write("<h2>Nómina Docentes</h2>");
teachers.forEach((teacher, index) => {
    document.write(`<hr><h3>Docente ${index + 1}</h3>`);
    document.write(`<p>Nombre: ${teacher.name}</p>`);
    document.write(`<p>Categoría: ${teacher.categoria}</p>`);
    document.write(`<p>Horas trabajadas en 15 días: ${teacher.horasTrabajadas}</p>`);
    document.write(`<p>Valor por hora: $${teacher.valorHora}</p>`);
    document.write(`<p>Bonificación: $${teacher.bonus}</p>`);
    document.write(`<p>Neto a pagar: $${teacher.valorNeto}</p>`);
});

// Salida total de la nómina
document.write("<hr><h2>Resumen Nómina General</h2>");
especialidades.forEach((especialidad, index) => {
    document.write(`<p>Total docentes en ${especialidad}: ${totalDocentesPorCategoria[index]}</p>`);
    document.write(`<p>Total nómina para ${especialidad}: $${nominaPorCategoria[index]}</p>`);
});

let totalNomina = nominaPorCategoria.reduce((acc, val) => acc + val, 0);
document.write(`<h3>Total de todas las nóminas: $${totalNomina}</h3>`);