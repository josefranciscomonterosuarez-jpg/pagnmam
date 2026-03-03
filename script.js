function mostrarSeccion(id) {
    // Ocultar todas
    document.querySelectorAll(".seccion").forEach(sec => {
        sec.classList.remove("activa");
    });

    // Mostrar la seleccionada
    document.getElementById(id).classList.add("activa");

    // Cambiar clase del body para cambiar color
    document.body.className = id;
}
