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

