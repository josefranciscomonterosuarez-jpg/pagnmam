const datos = {
    inicio: "Bienvenido al hub principal. Aquí se presenta la idea general.",
    proyectos: "Este proyecto consiste en desarrollar soluciones web dinámicas y modulares.",
    contacto: "Puedes comunicarte vía email o redes profesionales."
};
function mostrarSeccion(id) {
    // Ocultar todas
    document.querySelectorAll(".seccion").forEach(sec => {
        sec.classList.remove("activa");
    });

    // Mostrar la seleccionada
    const contenedor = document
    .getElementById(id)
    .querySelector(".contenido");

contenedor.innerHTML = "<p>" + datos[id] + "</p>";

    // Cambiar clase del body para cambiar color
    document.body.className = id;
}
