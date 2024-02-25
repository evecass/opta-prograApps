// Array para almacenar los usuarios
let users = [];
let editIndex = null;

// Función para mostrar la lista de usuarios
function displayUsers() { 
    // Obtiene el elemento HTML con el id 'userList'
    const userList = document.getElementById('userList');
    // Limpia el contenido del elemento HTML
    userList.innerHTML = '';
    
    // Itera sobre cada usuario en el arreglo 'users'
    users.forEach((user, index) => {
        // Inserta una nueva fila en la tabla
        const row = userList.insertRow();
        // Inserta una celda para el nombre del usuario en la fila creada
        const cellNombre = row.insertCell(0);
        // Inserta una celda para la edad del usuario en la fila creada
        const cellEdad = row.insertCell(1);
        // Inserta una celda para la posición del usuario en la fila creada
        const cellPos = row.insertCell(2);
        // Inserta una celda para los botones de acciones en la fila creada
        const cellActions = row.insertCell(3);

        // Asigna el nombre, edad y posición del usuario a la celda correspondiente
        cellNombre.textContent = user.nombre;
        cellEdad.textContent = user.edad;
        cellPos.textContent = user.pos;

        // Crea un botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'deleteButton'; // Agrega la clase deleteButton para css
        // Define el evento onclick para eliminar el usuario
        deleteButton.onclick = () => deleteUser(index);
        
        // Crea un botón de editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.className = 'editButton'; // Agrega la clase editButton para css
        // Define el evento onclick para editar el usuario
        editButton.onclick = () => editUser(index);

        // Agrega los botones de eliminar y editar a la celda de acciones
        cellActions.appendChild(deleteButton);
        cellActions.appendChild(editButton);
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
function editUser(index) {
    const user = users[index];
    document.getElementById('nombre').value = user.nombre;
    document.getElementById('edad').value = user.edad;
    document.getElementById('pos').value = user.pos;
    editIndex = index; // Guardar el índice del usuario que está siendo editado
    document.getElementById('guardarCambios').style.display = 'block'; // Mostrar el botón de guardar cambios
}

// Función para guardar cambios
document.getElementById('guardarCambios').addEventListener('click', function() {
    const newNombre = document.getElementById('nombre').value;
    const newEdad = document.getElementById('edad').value;
    const newPos = document.getElementById('pos').value;
    if (newNombre !== '' && newEdad !== '' && newPos !== '' && editIndex !== null) {
        users[editIndex].nombre = newNombre;
        users[editIndex].edad = newEdad;
        users[editIndex].pos = newPos;
        displayUsers(); // Actualizar la visualización de los usuarios después de editar
        editIndex = null; // Reiniciar el índice de edición
        document.getElementById('guardarCambios').style.display = 'none'; // Ocultar el botón de guardar cambios
        document.getElementById('addForm').reset(); // Limpiar el formulario después de guardar cambios
    }
});

