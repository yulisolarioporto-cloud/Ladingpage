document.addEventListener("DOMContentLoaded", function () {

    const mensaje = document.getElementById("mensaje");

    mensaje.textContent = "🎬 ¡Bienvenid@ a Cartelera 2026!";
    mensaje.style.opacity = "1";

    setTimeout(() => {
        mensaje.style.opacity = "0";
    }, 3000);

    // NAV
    document.querySelectorAll(".categories a").forEach(function (categoria) {
        categoria.addEventListener("click", function () {
            mensaje.textContent = "📌 Estás viendo la categoría: " + categoria.textContent;
            mensaje.style.opacity = "1";
        });
    });

    document.querySelectorAll(".movie-card").forEach(function (pelicula) {

        pelicula.addEventListener("click", function () {
            const titulo = pelicula.querySelector(".title-box").textContent;
            mensaje.textContent = "🎥 Seleccionaste: " + titulo;
            mensaje.style.opacity = "1";
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

        mensaje.textContent = "✅ Gracias " + nombre + ", te has registrado correctamente";
        mensaje.style.opacity = "1";

        setTimeout(() => {
            mensaje.style.opacity = "0";
        }, 3000);

        form.reset();
    });

});