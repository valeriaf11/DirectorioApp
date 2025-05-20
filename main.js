// En JS tenemos las funciones de tipo flecha
// Utilizaremos fetch que es un método para consumir una API

//Paso 1: Función flecha
const consumirApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
//Convertimos la respuesta a tipo JSON
    .then((response) => response.json ())
//Los datos los vamos a mandar a la consola
.then((data) => {
//La data de la api la vamos a llevar al HTML
// Paso 1.- Definimos las constantes que vamos a usar y el HTML que vamos a afectar 
const nombre = document.getElementById("nombre");
const nombreUsuario = document.getElementById("nombreUsuario");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const website = document.getElementById("website");

const street = document.getElementById("street");
const suite= document.getElementById("suite");
const city = document.getElementById("city");
const zipcode = document.getElementById("zipcode");


nombre.innerText = data[6].name;
nombreUsuario.innerText = data[6].username;
email.innerText = data[6].email;
phone.innerText = data[6].phone;
website.innerText = data[6].website;

//Mostrar los datos de la dirección 
street.innerText = data[6].address.street;
suite.innerText = data[6].address.suite;
city.innerText = data[6].address.city;
zipcode.innerText = data[6].address.zipcode;

})
//Descubrir qué hacer en caso de que no me corresponda
.catch((error) => console.log(error))
//EL DOM - Document Object Model
//Semana 2: Apartir de esta sesión, vamos a identificar a los elementos del HTML con un "id"

//Creo una constante y le paso como valor el id del H1 qu esta en la linea 16 de mi HTML
//Con getElementById
const titulo = document.getElementById("tituloEncabezado")
//Imprimo la variable titulo pero con el atributo textContent
console.log(titulo.textContent);

// La data de la API la vamos a llevar al HTML
};

consumirApi()