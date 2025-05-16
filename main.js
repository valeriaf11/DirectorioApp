//En js tenemos las funciones de tipo flecha
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

// Function to consume the "albums" API
const fetchAlbums = () => {
  // Get data from the API
  fetch("https://jsonplaceholder.typicode.com/albums")
    // Convert the response to JSON format
    .then((response) => response.json())
    // Display the data in the console
    .then((data) => console.log("ALBUMS:", data))
    // Handle possible errors
    .catch((error) => console.log("ERROR:", error));
};

// Call the function
fetchPosts();