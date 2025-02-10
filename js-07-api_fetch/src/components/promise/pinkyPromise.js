
<<<<<<< HEAD
const pinkyPromise = (comida) => {
  const myPromise = new Promise((res, rej) => {
    if (comida === "elote") {
      res("Tengo mi elote");
    } else {
      rej("No tengo mi elote");
    }
  });
  return myPromise;
};
pinkyPromise("elote")
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
=======

const pinkyPromise = ( parametro ) =>{

  const myPromise = new Promise( (resolve, reject)=>{
     // TODO evaluar el parámetro y determinar si se resuelve o rechaza
  });

  return myPromise;
}

const secuenciaPrincipal = () =>{
   
    console.log("Comenzando Secuencia Principal");
    // TODO hacer el manejo de la promera pinkyPromise( miArgumento );
    console.log("Terminando mi secuencia principal")

}

secuenciaPrincipal();
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
