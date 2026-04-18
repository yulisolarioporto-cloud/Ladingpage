document.addEventListener("DOMContentLoaded", function () {

    const mensaje = document.getElementById("mensaje");
    let timer;

    function mostrarMensaje(texto) {
        mensaje.textContent = texto;
        mensaje.style.opacity = "1";
        clearTimeout(timer);
        timer = setTimeout(() => {
            mensaje.style.opacity = "0";
        }, 1000);
    }

    mostrarMensaje(" ¡Bienvenid@ a Cartelera 2026!");

    document.querySelectorAll(".categories a").forEach(function (categoria) {
        categoria.addEventListener("click", function () {
            mostrarMensaje("Categoría: " + categoria.textContent);
        });
    });

    
    document.querySelectorAll(".movie-card").forEach(function (pelicula) {

        pelicula.addEventListener("click", function () {
            const titulo = pelicula.querySelector(".title-box").textContent;
            mostrarMensaje(" Seleccionaste: " + titulo);
        });

        pelicula.addEventListener("mouseover", function () {
            pelicula.style.transform = "scale(1.02)";
        });

        pelicula.addEventListener("mouseout", function () {
            pelicula.style.transform = "scale(1)";
        });
    });

    const form = document.getElementById("formularioUsuario");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;

        mostrarMensaje("Gracias " + nombre + ", registro exitoso");

        form.reset();
    });

});