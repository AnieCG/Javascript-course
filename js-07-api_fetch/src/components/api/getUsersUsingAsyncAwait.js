import { generateUsersCards } from "../../modules/cards/generateUsersCards.js";

/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
 *  https://reqres.in/
 * 
 *  Lista de usuarios: https://reqres.in/api/users?page=2
<<<<<<< HEAD
 */
const getUsersUsingAsyncAwait = async (url) => {

    const createCards = ( usersArray )=>{
        document.getElementById("cards").innerHTML = generateUsersCards( usersArray);
    }
     const resolve = await fetch (url); //Hace la peticion HTTP a la Api 
     const users = await resolve.json(); //Convierte la respuesta de un JSON a un objeto 
     createCards(users.data); //Mando llamar la función 
      
  };
  // getUsers("https://reqres.in/api/users?delay=5&page=1"); // Página 1 con retardo de 5 segundos
=======
*/
const createCards = ( usersArray )=>{
    document.getElementById("cards").innerHTML = generateUsersCards( usersArray);
}

const getUsersUsingAsyncAwait = async (url) => {

    const resolve = await fetch( url );
    const users = await resolve.json();
    createCards( users.data );
    
};
  // getUsersUsingAsyncAwait("https://reqres.in/api/users?delay=5&page=1"); // Página 1 con retardo de 5 segundos
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
  getUsersUsingAsyncAwait("https://reqres.in/api/users?page=2"); // Página 2, sin retardo