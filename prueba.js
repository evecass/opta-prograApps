// Array para almacenar los usuarios
let users = [];

// Función para mostrar la lista de usuarios
function displayUsers() { 
    
    const userList= document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach((user, index) => {

        const li = document.createElement('li');
        li.textContent = `Nombre: ${user.nombre}, Edad: ${user.edad}, Posicion: ${user.pos}`;

        // Crear botones para eliminar 
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'deleteButton'; // Agrega la clase deleteButton para css
        deleteButton.onclick = () => deleteUser(index);
        
        // Crear botones para editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.className = 'editButton'; // Agrega la clase editButton para css
        editButton.onclick = () => editUser(index);

        // Botones eliminar y editar
        li.appendChild(deleteButton);
        li.appendChild(editButton);

        userList.appendChild(li); 
    });
}

// Función para agregar un nuevo usuario
document.getElementById('addForm').addEventListener('submit', function(event) {
    event.preventDefault(); //evitar que el formulario se envie, se envia mediante js
    //los datos que se van a agregar
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const pos = document.getElementById('pos').value;
    //Agregar el nuevo usuario al array users 
    //Se crea un nuevo objeto que representa al usuario utilizando los valores obtenidos del formulario.
    users.push({ nombre, edad, pos });
    displayUsers();
    this.reset(); // Limpiar el formulario después de agregar
});


// Función para eliminar un usuario
function deleteUser(index) {
    users.splice(index, 1);
    displayUsers();
}

// Función para editar un usuario
function editUser(index) { //representa la posición del usuario en el array users que se va a editar
    const newNombre = prompt('Ingrese el nuevo nombre:');
    const newEdad = prompt('Ingrese la nueva edad:');
    const newPos = prompt('Ingrese la nueva posición:');
    if (newNombre !== null && newEdad !== null && newPos !== null) {
        users[index].name = newNombre;
        users[index].edad = newEdad;
        users[index].pos = newPos;
        displayUsers(); //actualizar la visualización de los usuarios después de editar 
    }
}

// Mostrar la lista inicial de usuarios
displayUsers();