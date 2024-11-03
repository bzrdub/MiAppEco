// Lógica para crear perfil
document.getElementById('formPerfil').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    document.getElementById('mensajePerfil').innerText = `Perfil creado para: ${nombre}`;
});

// Lógica para calcular impacto
document.getElementById('calcularImpacto').addEventListener('click', function() {
    const impacto = Math.floor(Math.random() * 100); // Simulación de cálculo de impacto
    document.getElementById('resultadoImpacto').innerText = `Tu impacto positivo estimado es: ${impacto} puntos`;
});

// Lógica para agregar consejos sostenibles
document.getElementById('agregarConsejo').addEventListener('click', function() {
    const consejo = prompt("Ingresa un consejo sostenible:");
    if (consejo) {
        const li = document.createElement('li');
        li.textContent = consejo;
        document.getElementById('listaConsejos').appendChild(li);
    }
});

// Lógica para registrar actividades
document.getElementById('formActividad').addEventListener('submit', function(event) {
    event.preventDefault();
    const actividad = document.getElementById('actividad').value;
    const li = document.createElement('li');
    li.textContent = actividad;
    document.getElementById('listaActividades').appendChild(li);
});
