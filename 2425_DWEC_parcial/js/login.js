let usersJSONPath = 'data/users.json';
const mensaje = document.getElementById('error-message');

$(document).ready(function() {

    cargarJSONEnLocalStorage();

    $('#login-button').click(validarCredenciales)

})

function cargarJSONEnLocalStorage() {
    fetch(usersJSONPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar el archivo JSON desde ${usersJSONPath}`);
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            localStorage.setItem("usuarios", JSON.stringify(data)); // Guardar en Local Storage
            console.log("Usuarios cargados y almacenados en Local Storage:", data);
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
}

// Función que valida el usuario y la contraseña
function validarCredenciales() {
    
    const credenciales = JSON.parse(localStorage.getItem("usuarios"));

    const user = $( '#username' ).val();
    const pass = $( '#password' ).val();
    
    const encontrado = credenciales.usuarios.find(usuario => usuario.username === user && usuario.password === pass);
    
    if(encontrado == null) {
        console.log("No encontrado")
        mensaje.style.display = 'block';
        mensaje.innerText = 'Usuario o Contraseña Incorrectos';
    } else {
        window.location.assign('html/juego.html');
    }
}




