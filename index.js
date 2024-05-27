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

let cantidadGente = pedirNumero("Ingrese la cantidad de gente que fue al médico:");

let cantidadAtendida;
do {
    cantidadAtendida = pedirNumero("Ingrese la cantidad de gente que será atendida hoy:");
    if (cantidadAtendida > cantidadGente) {
        alert("La cantidad de gente atendida no puede ser mayor que la cantidad de gente que fue al médico. Por favor, ingrese un número válido.");
    }
} while (cantidadAtendida > cantidadGente);

function calcularPorcentaje(atendidos, total) {
    return (atendidos / total) * 100;
}

let porcentajeAtendida = calcularPorcentaje(cantidadAtendida, cantidadGente);

alert(`El porcentaje de gente que fue atendida es: ${porcentajeAtendida.toFixed(2)}%`);
