console.log ("JS-02 funciones");
/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:
- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas


-Nombre descriptivo: Debe indicar claramente lo que hace.
  -Se recomienda comenzar con un verbo
-Parámetros: Debe tener cero o más parámetros, separados por coma.
-Se recomienda no tener más de 3 parámetros.
-Seguir el principio SOLID, sobre el principio de responsabilidad única. 
 (Single Responsability Principle). 
-Retorno: Debe retornar un valor o undefined.
- Evitar efectos secundarios: Una función no debe modificar variables externas.
*/

function saludar (nombre){
return `Hola ${nombre} soy una función declarada`;
}
console.log(saludar ("serch"));
console.log(saludar ("Ana"));
console.log(saludar ("Jorge"));







// Realizar función declarada

function suma (numero1, numero2) {
let resultado = numero1 + numero2

return resultado
}

console.log (suma (2, 3));
console.log (suma (9, 10));
console.log (suma (6, 8));

//Cambia la función anterior declarada a una expresada----Se podría quitar el nombre "suma" de la función (ser una función anónima) porque ya está dentro del nombre de una variable.

const sumarDosNumeros = function suma (numero1, numero2) {
    let resultado = numero1 + numero2
    
    return resultado
    }

console.log (sumarDosNumeros (2,3));


// Ejemplo de usos de funciones expresadas
let hora = 10;
let saludarDependiendoHora;
if(hora < 12){
    saludarDependiendoHora = function(){
        return "Buenos días";
    };
} else {
    saludarDependiendoHora = function(){
        return "Buenas tardes";
    };
}
saludarDependiendoHora();


/*
-----------Funciones autoinvocadas---------------
(selft-invoking functions)
Funciones que se autoincovan, se pueden defiinir con funciones anónimas.

sintaxis: (function (parámetros) {}) (argumentos);
*/

(function setUp (name){
    console.log (`Hola ${name}, soy una función autoinvocada`);
}) (`Erik`);

/* 
--------------Arrow Function------------------(Si la función solo tien UN parámetro se pueden quitar los paréntesis de parámetros)
Funciones similares a las funciones expresadas pero:
-No requiere la palabra reservada function.
-Si tiene una sola instrucción no requiere las llaves {}.
-Si la instrucción es el mismo retorno, no requiere la palabra return.

sintaxis:
const nombreVariable = (parametros) => instrucción;

const nombreVariable = (parámetros) => {
    instrucción;
    return expresión;
    }

*/

//Realizar una función declarada que calcule el área de un rectangulo

function areaRectangulo(base, altura){
let area = base * altura;

return area

}

console.log (areaRectangulo (3,5));
console.log (areaRectangulo (8,20));
