// Funcion para pedir los numeros.
function pedirNumero(mensaje) {
    let numero;
    do {
        numero = parseInt(prompt(mensaje));
        if (isNaN(numero) || numero < 0) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numero) || numero < 0);
    return numero;
}

let personas = [];

let cantidadGente = pedirNumero("Ingrese la cantidad de gente que fue al médico:");

while(true){

    let nombre = prompt("Ingrese el nombre: (o la palabra salir para terminar)");

    if (nombre === "salir") {
        break;
    }


    let edad = pedirNumero("Ingrese la edad :");

    let persona = {
        nombre: nombre,
        edad: edad
    };

    personas.push(persona);

}

let cantidadAtendida = personas.length;

function calcularPorcentaje(atendidos, total) {
    return (atendidos / total) * 100;
}

let porcentajeAtendida = calcularPorcentaje(cantidadAtendida, cantidadGente);

alert(` La cantidad de gente que fue al médico es de ${cantidadGente} personas y el porcentaje de gente que fue atendida es: ${porcentajeAtendida.toFixed(2)}%`);

let nombreBuscar = prompt("¿Desea verificar si una persona está en el sistema? Ingrese el nombre de la persona:");

let personaEncontrada = personas.find(persona => persona.nombre === nombreBuscar);

if (personaEncontrada) {
    alert(`La persona ${personaEncontrada.nombre} fue encontrada y tiene ${personaEncontrada.edad} años.`);
} else {
    alert(`La persona con nombre ${nombreBuscar} no fue encontrada.`);
}



