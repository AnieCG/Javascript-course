/*
 En JavaScript, una expresión es cualquier fragmento de código que 
 produce un valor. Puede ser tan simple como un número o una variable, 
 o más compleja, como una operación matemática o una llamada a función.
<<<<<<< HEAD
Ejemplos:
=======

Ejemplos:

>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
10          // Número (expresión literal)
x           // Variable (si x está definida)
5 + 3       // Expresión aritmética (devuelve 8)
true && false // Expresión lógica (devuelve false)
"Hola".length // Expresión con propiedad (devuelve 4)
<<<<<<< HEAD
*/

=======

*/


>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
// ---------------- Opéradores aritméticos ----------------
/* 
   Los operadores aritméticos toman valores numéricos 
   (ya sean literales o variables) como sus operandos 
   y devuelven un solo valor numérico.
<<<<<<< HEAD
=======

>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
   adición +
   multiplicación *
   substracción -
   división /
   resto %
   exponencial **  - Math.pow(2, 3)   2**3
*/
<<<<<<< HEAD


// ---- Precedencia de operadores -------------------------
console.log(  3 * 2 / 2  ); // 3
console.log(  3 / 2 * 2  ); // 3
console.log(  2 * 4 / 2**3 ); // 1
console.log(  3 ** 2 ** 3  ); // 6561



=======
// ---- Precedencia de operadores -------------------------
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(  3 * 2 / 2  ); // 3
console.log(  3 / 2 * 2  ); // 3
console.log(  2 * 4 / 2**3 ); // 1
console.log(  3 ** 2 ** 3  ); // 6561 
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1

// ---------------- Opéradores relacionales ----------------
/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than
  
  Un operador de comparación compara sus operandos y devuelve un valor 
  Boolean basado en si la comparación es verdadera o no.
<<<<<<< HEAD
=======

>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
  <  menor que
  >  mayor que
  <= menor o igual que
  >= mayor o igual que
<<<<<<< HEAD
=======

>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
   - Valores booleanos true y false se convierten en 1 y 0 respectivamente.
   - null se convierte a 0.
   - undefined se convierte a NaN.
*/
<<<<<<< HEAD
=======
console.log(  3 < 5 ); // true
console.log(  3 > 5 ); // false
console.log(  3 <= 3 ); // true
console.log(  3 >= 3 ); // true

console.log( null <= 0 ); // true
console.log( undefined <= 0 ); // false

console.log(  "3" >= 3 ); // true
console.log(  "tree" >= 3 ); // false
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1


// ---------------- Operadores de igualdad ----------------
/*
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Equality
<<<<<<< HEAD
=======

>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
  Un operador de igualdad compara dos valores y devuelve un valor Boolean
  basado en si la comparación es verdadera o no.
  ==  igual que
  !=  diferente que
  === igual que y mismo tipo de dato
  !== diferente que y mismo tipo de dato
<<<<<<< HEAD
  - null y undefined NO son convertidos a cero
*/

=======

  - null y undefined NO son convertidos a cero

*/
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
console.log(  3 == 3 );  // true
console.log(  3 == "3" ); // true
console.log(  3 === "3" ); // false
console.log(  3 !== "3" ); // true
console.log(  3 != "3" );  // false
<<<<<<< HEAD
// Si un operando es null y el otro undefined, devuelve verdadero(true).
console.log( null == undefined ); // true
=======

// Si un operando es null y el otro undefined, devuelve verdadero(true).
console.log( null == undefined ); // true

>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
// Si ambos son objetos, devuelve true solo si ambos operandos hacen 
// referencia al mismo objeto.
const obj1 = { name: "Juan" };
const obj2 = { name: "Juan" };
const obj3 = obj1;
<<<<<<< HEAD
=======

>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
console.log( obj1 == obj2 ); // false
console.log( obj1 == obj3 ); // true

//--- Si los operandos son de diferente tipos, intenta convertirlos al mismo tipo antes de comparar:-----
// Al comparar un número con una cadena, convierte la cadena en un valor numérico.
console.log(  3 == "3" ); // true

<<<<<<< HEAD
=======

>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
// Si uno de los operandos es booleano, convierte el operando booleano en 
// 1 si es verdadero y en 0 en el caso de falso.
console.log(  1 == true ); // true
console.log(  0 == false ); // true

//--- Si los operandos tienen el mismo tipo, se comparan de la siguiente manera:-----
// String: devuelve verdadero solo si ambos operandos tienen los mismos caracteres y en el mismo orden.
console.log( "hola" == "hola" ); // true
console.log( "hola" == "Hola" ); // false
<<<<<<< HEAD

//--- Si los operandos tienen el mismo tipo, se comparan de la siguiente manera:-----
// String: devuelve verdadero solo si ambos operandos tienen los mismos caracteres y en el mismo orden.
console.log( "hola" == "hola" ); // true
console.log( "hola" == "Hola" ); // false
console.log( 'Hola "Ch50" ' == 'Hola "Ch50" ' ); 
console.log( "Hola \"Ch50\" " == "Hola \"Ch50\" " ); 
console.log("Primer línea, segunda línea, tercer línea");
=======
console.log( 'Hola "Ch50" ' == 'Hola "Ch50" ' ); 
console.log( "Hola \"Ch50\" " == "Hola \"Ch50\" " ); 

console.log("Primer línea,\nsegunda línea, \n\ttercer línea");


// Se recomienda usar el método localCompare(): compara cadenas de texto de acuerdo con las reglas de un idioma específico
console.log("apple".localeCompare("banana")); // -1 (porque "apple" < "banana")
console.log("grape".localeCompare("grape"));  // 0 (son iguales)
console.log("pear".localeCompare("orange"));  // 1 (porque "pear" > "orange")
console.log("a".localeCompare("A", "en", { sensitivity: "base" })); // 0


// Number: devuelve verdadero solo si ambos operandos tienen el mismo valor. 
// +0 y -0 se tratan como el mismo valor. 
// Si alguno de los operandos es NaN, devuelve falso.
console.log(  +0 == -0 ); // true
console.log(  NaN == NaN ); // false
console.log(  1 == 1 ); // true
console.log(  1 == 1.0 ); // true
console.log(  1 == 1.1 ); // false

console.log(  isNaN("hola" / 3 )  ); // true


// ------- Operadores de asignación ----------------
/*
 Asigna un valor a su operador izquierdo basándose en el valor
 de su operando derecho:

 asignación =
 
 Operadores abreviados ( compuestos ):
  op1 += op2  -> op1 = op1 + op2
  op1 -= op2  -> op1 = op1 - op2
  op1 *= op2  -> op1 = op1 * op2

*/
let suma = 0;
// Agregar 2 al valor de suma
// suma = suma  + 2;
suma += 2;

// --------- ejercicio mental --------------------
let valorA = 15;
valorA *= 2; // valorA = valorA * 2;


// --------- ejercicio mental --------------------
let mensaje = "Me voy a de vacaciones";
mensaje += 2; // mensaje = mensaje + 2; "Me voy a de vacaciones2"


>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1

// -------------- Operadores unarios ------------------
// Solo actuan sobre un operando
// Negación unaria (cambia el signo en números)
let numero = 3;
let dinero = -numero; // -3
console.log( numero, dinero); // 3, -3
<<<<<<< HEAD
// suma unaria (No cambia el signo el números)
let pago = +dinero; // 
console.log( pago ); // -3
let intereses = +"5.23"; // number
console.log( 5 + intereses ); //  10.23
console.log( 5 + parseInt(intereses) ); //  10.23
=======

// suma unaria (No cambia el signo el números)
let pago = +dinero; // 
console.log( pago ); // -3

let intereses = +"5.23"; // number
console.log( 5 + intereses ); //  10.23
console.log( 5 + parseInt(intereses) ); //  10.23

>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
let pagoFinal = 0;
console.log( pagoFinal += 5 + + "3" ); // 8
console.log( pagoFinal += 5 + parseFloat ("3") ); // 8

<<<<<<< HEAD
=======

>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
// Operador de incremento y decremento en unidad.
/*
  Operador de pre-incremento y pre-decremento
    ++ valor
    -- valor
<<<<<<< HEAD
  Operador de post-incremento y post-decremento
    valor ++
    valor --
*/

// Uso de post-incremento
//post la variable original va primero y después la suma, primero arroja el valo y después el valor sumado
=======

  Operador de post-incremento y post-decremento
    valor ++
    valor --

*/

let number = 10;
++ number; // number = number + 1
console.log( number ); // 11
number ++; // number; number = number + 1; 
console.log( number ); // 12

// Uso de post-incremento
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
number = 20;
console.log( number ); // 20
console.log( number = number + 1 ); // 21
// valor++
number = 20;
console.log( number++ ); // 20
console.log( number ); // 21

// Uso de pre-incremento
<<<<<<< HEAD
//pre la suma va primero y la variable después y te arroja el valor ya sumado

number = 40;
console.log( number = number + 1 ); // 41
console.log( number ); // 41
// ++valor
number = 40;
console.log( ++number );
console.log( number );
=======
number = 40;
console.log( number = number + 1 ); // 41
console.log( number ); // 41

// ++valor
number = 40;
console.log( ++number ); // 41
console.log( number ); // 41
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1

number = 100;
let kati = 10;
console.log( kati + + number  ); // 110
console.log( kati + ++number  ); // 111

// ------------ Ejercicio Mental ---------------------
let x = 3;
let y = x++; // y:3   x:4
<<<<<<< HEAD
=======

>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
console.log(`x :${ x++ } y:${ ++y }`); // x:4    y:4
                                       // x:5
console.log(`x :${ x } y:${ y }`); // x:5     y:4

// ------------ Ejercicio Mental ---------------------
<<<<<<< HEAD
a = 0, b = 0; // 
for( ; a < 3 ; b = ++a){ // b=1 a=1, b=2 a=2, b=3 a=3
=======

// let a = b = 0; b es declara con var
let a = 0, b = 0; // a y b son declaradas con let

for( ; a < 3 ; b = a++){ // b=0 a=1 |  b=1 a=2 |  b=2  a=3
  console.log( a , b ); 
  // N.Iteración     a     b
  //     1           0     0
  //     2           1     0
  //     3           2     1
}
console.log( a , b ); // 3 , 2

// ------------ Ejercicio Mental ---------------------
a = 0, b = 0; // 

for(    ; a < 3 ; b = ++a){ // b=1 a=1, b=2 a=2, b=3 a=3
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
  console.log( a , b ); 
  // N.Iteración     a     b
  //   1             0     0
  //   2             1     1
  //   3             2     2
<<<<<<< HEAD

=======
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
}
console.log( a , b ); // 3, 3

// =============Imprimir los valores d array ====================
<<<<<<< HEAD
/*const numeros = [2,4,5,67,8];
let indice = 0;
while( indice < numeros.length  ) {
  console.log("Numero:" , numeros[indice] );
  indice = ind
}*/
  // =============Imprimir los valores d array ====================
=======

>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
const numeros = [2,4,5,67,8];
let indice = 0;
while( indice < numeros.length  ){
  console.log("Número:" , numeros[indice++] );
  //indice = indice + 1;  
}

<<<<<<< HEAD
// ---------------- Operadores lógicos && y || ---------------
/*
 También son conocidos como operadores de corto circuito ( short-circuit operators ).
 OP1 && OP2 Si OP1 es verdadero, se retorna la expresión de OP2.
 OP1 || OP2 Si OP1 es verdadero, se retorna la expresión de OP1.
*/
/*OP1 && OP2 Si OP1 es verdadero, se retorna la expresión de OP2.
 OP1 && OP2 si OP1 es falso, se retorna la expresión de OP1.
 OP1 || OP2 Si OP1 es verdadero, se retorna la expresión de OP1.
 OP1 || OP2 Si OP2 es verdadero, se retorna la expresión de OP2.*/


=======

// ---------------- Operadores lógicos && y || ---------------
/*
 También son conocidos como operadores de corto circuito ( short-circuit operators ).

 OP1 && OP2 Si OP1 es verdadero, se retorna la expresión de OP2.
 OP1 || OP2 Si OP1 es verdadero, se retorna la expresión de OP1.

 Se consideran falsos: "", 0, null, undefined, NaN
*/
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
console.log( true && false ); // false
console.log( true && "Usando corto circuito ");// "Usando corto circuito"
console.log( "false" && "Mi mente sigue de vacaciones");// "Mi mente sigue de vacaciones"
console.log( 0 && "Chau, chau"); // 0
console.log( "" && "Chau, chau"); // "" empty string
console.log( false && "Chau, chau"); // false

<<<<<<< HEAD
=======
console.log( true || false ); // true
console.log( true || "Usando corto circuito "); // true
console.log( "false" || "Mi mente sigue de vacaciones"); // "false"
console.log( 0 || "Chau, chau"); //  "Chau, Chau"
console.log( "" || "Chau, chau"); // "Chau, Chau"
console.log( false || "Chau, chau"); //  "Chau, Chau"
console.log( false || undefined ); // undefined

console.log( "Activado" && undefined ); // undefined
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1

// ------------- casos prácticos -----------------------
// console.log(   variableSinDeclarar ); // La variable no ha sido declarada
console.log( true || variableSinDeclarar   ); 
<<<<<<< HEAD
// -----------------------------------------------------
let loggedIn = false;
loggedIn && console.log("Bienvenido Usuario"); // false; NO se imprime en consola
// ------------ ejercicio-------------------------------
// Mostrar en consola "Acceso permitido" solo si la variable esAdmin = true
let esAdmin = true;
esAdmin && console.log("Acceso permitido"); 

// ------------- casos prácticos -----------------------
// console.log(   variableSinDeclarar ); // La variable no ha sido declarada
console.log( true || variableSinDeclarar   ); 
// -----------------------------------------------------
//let loggedIn = false;
loggedIn && console.log("Bienvenido Usuario"); // false; NO se imprime en consola
// ------------ ejercicio-------------------------------
// Mostrar en consola "Acceso permitido" solo si la variable esAdmin = true
//let esAdmin = true;
esAdmin && console.log("Acceso permitido");
 
 // OP1 ?? OP2 si OP1 es null o undefined retorna la expresión de OP2 
 // OP1 ?? OP2 si OP2 es null o undefined retorna la expresión de OP1

 // ------------------ Ejercicio --------------------------
/*
  Imprimir en consola "Acceso Denegado" es la variable esAutorizado = true
  En caso contrario imprimir "Acceso concedido".
*/

function impresionAcceso (esAutorizado) {
  if (esAutorizado === true) {
    return "Acceso Denegado";
  } else {
    return "Acceso Concedido";
  }
}


console.log (impresionAcceso (true));
console.log (impresionAcceso (false));
console.log (impresionAcceso (null));

// CON OPERADORES LOGICOS

let esAutorizado = true
esAutorizado && console.log("Acceso Denegado");



/ ------------------ Ejercicio --------------------------
=======

// -----------------------------------------------------
let loggedIn = false;
loggedIn && console.log("Bienvenido Usuario"); // false; NO se imprime en consola

// ------------ ejercicio-------------------------------
// Mostrar en consola "Acceso permitido" solo si la variable esAdmin = true
let esAdmin = true;
esAdmin && console.log("Acceso permitido");

// ------------------------------------------------------
let nombre = "";
let usuario = nombre || "Invitado";
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
//let usuario = nombre ?? "Invitado"; // funciona para null y undefined

console.log( "Hola " + usuario ); // Invitado

// ------------------ Ejercicio --------------------------
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
/*
  Imprimir en consola "Acceso Denegado" Si la variable esAutorizado = false
  En caso contrario imprimir "Acceso concedido".
*/
let autorizado = true;
<<<<<<< HEAD
let message = autorizado && "Acceso concedido" || "Acceso denegado";
console.log( message );
=======

let message = autorizado && "Acceso concedido" || "Acceso denegado";
console.log( message );

>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
console.log( autorizado? "Acceso concedido":"Acceso denegado" );