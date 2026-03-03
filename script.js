console.log("Script cargado correctamente");

document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.querySelector("h1");

    titulo.addEventListener("click", function() {
        titulo.style.color = "cyan";
        alert("Bienvenido a mi página 🚀");
    });
});
