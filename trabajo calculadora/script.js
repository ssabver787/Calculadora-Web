// Definición de variables globales
let operandoA;
let operandoB;
let operacion;

// Función para mostrar en el display
function mostrarResultado(resultado) {
    document.getElementById('display').value = resultado;
}

// Función para agregar números al display
function agregarNumero(numero) {
    document.getElementById('display').value += numero;
}

// Función para resetear la calculadora
function resetearCalculadora() {
    operandoA = '';
    operandoB = '';
    operacion = '';
    mostrarResultado('');
}

// Función para seleccionar el operador
function operadorPulsado(op) {
    operacion = op;
    operandoA = parseFloat(document.getElementById('display').value);
    mostrarResultado('');
}

// Función para realizar la operación matemática
function calcular() {
    operandoB = parseFloat(document.getElementById('display').value);
    let resultado;
    switch (operacion) {
        case '+':
            resultado = operandoA + operandoB;
            break;
        case '-':
            resultado = operandoA - operandoB;
            break;
        case '*':
            resultado = operandoA * operandoB;
            break;
        case '/':
            resultado = operandoA / operandoB;
            break;
        default:
            resultado = 'Error';
    }
    mostrarResultado(resultado);
    operandoA = resultado;
    operacion = '';
}
