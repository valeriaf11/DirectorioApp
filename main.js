// En JS tenemos las funciones de tipo flecha
// Utilizaremos fetch que es un método para consumir una API

// Paso 1: Función flecha para consumir la API
const consumirApi = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    // Convertimos la respuesta a tipo JSON
    .then((response) => response.json())
    // Procesamos los datos de la API
    .then((data) => {
      const contenedor = document.getElementById("contenedor");

      console.log(data);

      // Lista de imágenes personalizadas por usuario
      const imagenes = [
        "https://i.pinimg.com/736x/ed/39/a7/ed39a771e01c2bc1b1e76bf95e95ae25.jpg",
        "https://i.pinimg.com/736x/a9/75/93/a975934bb378afc4ca8c133df451f56e.jpg",
        "https://i.pinimg.com/736x/bd/42/8e/bd428e6bb156d90045700dbf3e967c3e.jpg",
        "https://i.pinimg.com/736x/52/61/bd/5261bd492ef52666d60258a067239007.jpg",
        "https://i.pinimg.com/736x/e4/4a/09/e44a09d4fc648627e9b7174031995121.jpg",
        "https://i.pinimg.com/736x/56/3b/87/563b87a5e43b748f8350f112e0bc6cb3.jpg",
        "https://i.pinimg.com/736x/56/c7/5d/56c75d13636b5830b34385f6df90ca43.jpg",
        "https://i.pinimg.com/736x/8e/e5/d8/8ee5d821350d03fffe88f97d55b92ed8.jpg",
        "https://i.pinimg.com/736x/85/fd/52/85fd52b67058ce59302573035712732c.jpg",
        "https://i.pinimg.com/736x/0f/cf/a6/0fcfa6b6ba29ac67ff525309c60e3482.jpg"
      ];

      // Iteramos con forEach para mostrar cada usuario
      data.forEach((personita, index) => {
        contenedor.innerHTML += `
          <div class="col-md-6 mb-4">
            <div class="card flex-row">
              <img src="${imagenes[index]}" class="card-img-left" style="width: 150px; object-fit: cover;" alt="usuario${index + 1}">
              <div class="card-body">
                <h5 class="card-title">${personita.name}</h5>
                <p class="card-text">Información de contacto</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Nombre de usuario: ${personita.username}</li>
                  <li class="list-group-item">Correo electrónico: ${personita.email}</li>
                  <li class="list-group-item">Número telefónico: ${personita.phone}</li>
                  <li class="list-group-item">Sitio web: ${personita.website}</li>
                  <li class="list-group-item">Calle: ${personita.address.street}</li>
                  <li class="list-group-item">Habitación: ${personita.address.suite}</li>
                  <li class="list-group-item">Ciudad: ${personita.address.city}</li>
                  <li class="list-group-item">Código postal: ${personita.address.zipcode}</li>
                </ul>
              </div>
            </div>
          </div>
        `;
      });
    })
    // En caso de error al cargar la API
    .catch((error) => console.log(error));

  // EL DOM - Document Object Model
  // Identificamos elementos del HTML con "id"
  const titulo = document.getElementById("tituloEncabezado");
  console.log(titulo.textContent); // Mostramos el texto del título
};

// Ejecutamos la función al cargar la página

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
fetchAlbums();