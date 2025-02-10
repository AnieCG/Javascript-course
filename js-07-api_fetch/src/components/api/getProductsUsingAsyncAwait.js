/*
Async y Await facilita la escritura y lectura de código asíncrono.
 Permite escribir código asíncrono de manera similar a cómo se escribiría
 código síncrono.
*/

<<<<<<< HEAD
async function functionName () {
  await fetch( url );
}

const getProductsUsingAsyncAwait = async ( url ) =>{
    try{//Se abre un try y catch para que si no se cumple la promesa ahí caiga, si cualquier linea de texto ocurre un error se deja de procesar el resto de la sentencia 
     console.log("Estoy iniciando en la función con Async y Await");
     const resolve = await fetch( url );//peticion a http
     const products = await resolve.json();// conviete un JSON a objeto
     console.log( products );
     console.log("Finalizado la petición fetch con Async y Await");
    }catch(error){
  console.warn("No corro, no grito, no empujo")
  console.error("¿Qué pasó?", error);

    }
};

console.log("Antes de la llamada de la función");
getProductsUsingAsyncAwait("https://fakestoreapi.com/products");
console.log("Después de la llamada de la función");
=======
async function functionName() {
  await fetch(url);
}

const getProductsUsingAsyncAwait = async (url) => {
  console.log("Estoy iniciando en la función con Async y Await");
  const resolve = await fetch(url);
  const products = await resolve.json();
  console.log(products);
  console.log("Finalizado la petición fetch con Async y Await");
};

const realizaSecuenciaPrincipal = async () => {
  try {
    console.log("Antes de la llamada de la función");
    await getProductsUsingAsyncAwait("https://fakestoreapi/products");
    console.log("Después de la llamada de la función");
  } catch (error) {
    console.warn("No corro, no grito, no empujo");
    console.error("Que pasó?", error);
  }
};

realizaSecuenciaPrincipal();
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
