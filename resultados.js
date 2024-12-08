// Obtener referencia a la tabla
const tablaDatos = document.getElementById('tabla-datos');

// Cargar datos desde localStorage
document.addEventListener('DOMContentLoaded', () => {
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuariosGuardados.forEach(usuario => agregarFila(usuario));
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