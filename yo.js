// Array para almacenar los usuarios
let users = [];

// Función para mostrar la tabla de usuarios
function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach((user, index) => {
        const row = userList.insertRow();
        const nameCell = row.insertCell(0);
        const ageCell = row.insertCell(1);
        const posCell = row.insertCell(2);
        const actionsCell = row.insertCell(3);

        nameCell.textContent = user.name;
        ageCell.textContent = user.age;
        posCell.textContent = user.pos;

        // Botones de eliminar y editar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteUser(index);

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = () => editUser(index);

        actionsCell.appendChild(deleteButton);
        actionsCell.appendChild(editButton);
    });
}

// Función para agregar un nuevo usuario
document.getElementById('addForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const pos = document.getElementById('pos').value;
    
    users.push({ name, age, pos });
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
    const newName = prompt('Ingrese el nuevo nombre:');
    const newAge = prompt('Ingrese la nueva edad:');
    const newPos = prompt('Ingrese la nueva posición:');
    if (newName !== null && newAge !== null && newPos !== null) {
        users[index].name = newName;
        users[index].age = newAge;
        users[index].pos = newPos;
        displayUsers();
    }
}

// Mostrar la tabla inicial de usuarios
displayUsers();