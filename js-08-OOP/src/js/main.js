import { insertMainHeader } from "/src/modules/header/header.js";
import { insertMainFooter } from "/src/modules/footer/footer.js";

insertMainHeader();
insertMainFooter();

console.log( amdRadeonRx );
// Podemos acceder a los atributos usando el operador objeto.atributo (access and call), n.precedence: 17
// podemos acceder usando objeto[nombreAtributo]

// Accediendo al modelo
console.log( amdRadeonRx.model );
// console.log( amdRadeonRx["model"] );Esta forma es dinámica, es la ventaja con respecto a la otra opción.

let attribute = "model"
console.log( amdRadeonRx[attribute] );


attribute = "price";
console.log( amdRadeonRx[attribute] ); // 10699
// Acceder al atributo title e imprimir en consola, usando los dos métodos para aceder

attribute = "title"
console.log(amdRadeonRx.title);
console.log(amdRadeonRx[attribute]);