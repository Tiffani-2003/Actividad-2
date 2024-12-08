// Obtener referencia al formulario y botón
const formulario = document.getElementById('formulario');
const botonRegistrar = document.getElementById('registrar-btn');

// Evento de registro
botonRegistrar.addEventListener('click', () => {
    // Obtener valores del formulario
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

    // Guardar datos en localStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuariosGuardados.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

    // Redirigir a la página de resultados
    window.location.href = "resultados.html";
});