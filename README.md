### Características

- Navegación entre distintas páginas a través de un menú dinámico e interactivo.
- Implementación de lógica básica con JavaScript, como la comparación de números, selección de meses y manejo de listas dinámicas.
- Registro de usuarios con validación y almacenamiento usando localStorage.
- Visualización de los usuarios registrados en una tabla interactiva.
- Diseño adaptable y responsivo, utilizando estilos personalizados con CSS.
- Todo el código de JavaScript implementado exclusivamente mediante funciones de flecha.

Estructura del proyecto

actividad-aprendizaje-2


index.html             # Página principal con datos del estudiante
funciones.html         # Funciones lógicas (comparar números, meses, listas)
registro.html          # Formulario para registrar usuarios
resultados.html        # Tabla con usuarios registrados

css/
estilo.css         # Estilos compartidos para todas las páginas

 scripts/
acciones.js        # Funciones generales
funciones.js       # Comparación y gestión lógica
registro.js        # Registro de usuarios
resultados.js      # Visualización de datos

### Implementación
Funcionalidades

 Pantalla de inicio: 
- Despliega la información del estudiante de manera organizada y visualmente clara.

Operaciones lógicas: 
- Comparación de valores numéricos utilizando estructuras condicionales if.
- Determinación del mes a través de la estructura switch.
- Manejo de una lista dinámica de nombres empleando arreglos (arrays).

 Registro de usuarios 
- Formulario con validación para recopilar la información del usuario.
- Campos solicitados: ID, número de cédula, nombres completos, fecha de nacimiento y ciudad.

Visualización de resultados:
- Presenta los usuarios registrados en una tabla de datos.

####Javascript


```javascript
document.getElementById('btn-comparar').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('input1').value);
    const num2 = parseFloat(document.getElementById('input2').value);
    const resultado = num1 > num2 ? ${num1} es mayor : num1 < num2 ? ${num2} es mayor : "Son iguales";
    document.getElementById('resultado').textContent = resultado;
});
```

####HTML

```HTML
<form id="formulario">
    <input type="text" id="id-usuario" placeholder="ID" required>
    <input type="text" id="cedula-usuario" placeholder="Cédula" required>
    <input type="text" id="nombres-usuario" placeholder="Nombres" required>
    <input type="date" id="fecha-usuario" required>
    <select id="ciudad-usuario" required>
        <option value="Puyo">Puyo</option>
        <option value="Quito">Quito</option>
    </select>
    <button type="button" id="registrar-btn">Registrar</button>
</form>
```







