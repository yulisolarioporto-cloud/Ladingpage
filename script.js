document.addEventListener("DOMContentLoaded", function () {


mensaje.textContent = "🎬 ¡Bienvenid@ a Cartelera 2026!";
mensaje.style.opacity = "1";

setTimeout(() => {
    mensaje.style.opacity = "0";
}, 3000);
    const mensaje = document.getElementById("mensaje");
    // NAV sin alert molesto
    const categorias = document.querySelectorAll(".categories a");

    categorias.forEach(function (categoria) {
        categoria.addEventListener("click", function () {
            mensaje.textContent = "📌 Estás viendo la categoría: " + categoria.textContent;
        });
    });

    // Click en películas
    const peliculas = document.querySelectorAll(".movie-card");

    peliculas.forEach(function (pelicula) {

        pelicula.addEventListener("click", function () {
            const titulo = pelicula.querySelector(".title-box").textContent;
            mensaje.textContent = "🎥 Seleccionaste: " + titulo;
        });

        pelicula.addEventListener("mouseover", function () {
            pelicula.style.transform = "scale(1.02)";
        });

        pelicula.addEventListener("mouseout", function () {
            pelicula.style.transform = "scale(1)";
        });
    });

    // FORMULARIO
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
const form = document.getElementById("formularioUsuario");

form.addEventListener("submit", function(e) {
  e.preventDefault();


  alert("¡Gracias por tu recomendación! 🎬");

  
  form.reset();
});