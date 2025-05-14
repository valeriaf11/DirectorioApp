//En js tenemos las funciones de tipo felcha
//Utilizaremos fetch que es un metodo para consumir una API

//Funcion flecha
const consumirApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    //convertimos la respuesta en tipo JSON
    .then((response) => response.json()) 
    //Los datos los vamos a mandar a la consola
    .then((data) => console.log (data))
//descubrir que hacer en caso de que no me corresponda
.catch((error) => console.log(error));
};

consumirApi()