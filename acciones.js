// Obtener referencias del DOM
const formulario = document.getElementById('formulario');
const tablaDatos = document.getElementById('tabla-datos');

// Cargar datos desde localStorage al iniciar
document.addEventListener('DOMContentLoaded', () => {
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuariosGuardados.forEach(usuario => agregarFila(usuario));
});

// Registrar usuario
document.getElementById('registrar-btn').addEventListener('click', () => {
    // Obtener los valores del formulario
    const usuario = {
        id: document.getElementById('id-usuario').value.trim(),
        cedula: document.getElementById('cedula-usuario').value.trim(),
        nombres: document.getElementById('nombres-usuario').value.trim(),
        fecha: document.getElementById('fecha-usuario').value.trim(),
        ciudad: document.getElementById('ciudad-usuario').value.trim()
    };

    // Validar que todos los campos estén completos
    if (!usuario.id || !usuario.cedula || !usuario.nombres || !usuario.fecha || !usuario.ciudad) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Guardar usuario en localStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuariosGuardados.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

    // Agregar el usuario a la tabla
    agregarFila(usuario);

    // Limpiar el formulario
    formulario.reset();
});

// Función para agregar una fila a la tabla
const agregarFila = (usuario) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.cedula}</td>
        <td>${usuario.nombres}</td>
        <td>${usuario.fecha}</td>
        <td>${usuario.ciudad}</td>
    `;
    tablaDatos.appendChild(fila);
};