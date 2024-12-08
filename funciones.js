// Comparar números
document.getElementById('btn-comparar').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('input1').value);
    const num2 = parseFloat(document.getElementById('input2').value);
    const resultado = num1 > num2 ? `${num1} es mayor` : num1 < num2 ? `${num2} es mayor` : "Son iguales";
    document.getElementById('resultado').textContent = resultado;
});

// Determinar mes
document.getElementById('btn-mes').addEventListener('click', () => {
    const numero = parseInt(document.getElementById('mes-input').value);

    let mes;

    switch (numero) {
        case 1:
            mes = "Enero";
            break;
        case 2:
            mes = "Febrero";
            break;
        case 3:
            mes = "Marzo";
            break;
        case 4:
            mes = "Abril";
            break;
        case 5:
            mes = "Mayo";
            break;
        case 6:
            mes = "Junio";
            break;
        case 7:
            mes = "Julio";
            break;
        case 8:
            mes = "Agosto";
            break;
        case 9:
            mes = "Septiembre";
            break;
        case 10:
            mes = "Octubre";
            break;
        case 11:
            mes = "Noviembre";
            break;
        case 12:
            mes = "Diciembre";
            break;
        default:
            mes = null;
            break;
    }

    if (mes) {
        alert(`El mes es ${mes}`);
    } else {
        alert("Número inválido");
    }
});

// Gestión de nombres
const nombres = [];
document.getElementById('btn-agregar').addEventListener('click', () => {
    const nombre = document.getElementById('nombre-input').value.trim();
    if (nombre) {
        nombres.push(nombre);
        const lista = document.getElementById('lista-nombres');
        lista.innerHTML = nombres.map(nombre => `<li>${nombre}</li>`).join('');
    }
});

// Registrar usuario
document.getElementById('registrar-btn').addEventListener('click', () => {
    const datos = {
        id: document.getElementById('id-usuario').value,
        cedula: document.getElementById('cedula-usuario').value,
        nombres: document.getElementById('nombres-usuario').value,
        fecha: document.getElementById('fecha-usuario').value,
        ciudad: document.getElementById('ciudad-usuario').value
    };
    const fila = `<tr>
        <td>${datos.id}</td>
        <td>${datos.cedula}</td>
        <td>${datos.nombres}</td>
        <td>${datos.fecha}</td>
        <td>${datos.ciudad}</td>
    </tr>`;
    document.getElementById('tabla-datos').innerHTML += fila;
});
