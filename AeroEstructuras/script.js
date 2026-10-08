// =============================
// CAMBIO DE IDIOMA
// =============================

const botonIdioma = document.getElementById("botonIdioma");
const menuIdioma = document.getElementById("menuIdioma");

if (botonIdioma && menuIdioma) {

    botonIdioma.addEventListener("click", function () {

        if (menuIdioma.style.display === "block") {
            menuIdioma.style.display = "none";
        } else {
            menuIdioma.style.display = "block";
        }

    });
}

function cambiarIdioma(idioma) {

    const elementos = document.querySelectorAll("[data-es][data-en]");

    elementos.forEach(function(elemento) {

        elemento.textContent =
            elemento.getAttribute("data-" + idioma);

    });

    if (menuIdioma) {
        menuIdioma.style.display = "none";
    }
}


// =============================
// BUSCADOR
// =============================

const botonBuscar = document.getElementById("botonBuscar");
const buscador = document.getElementById("buscador");
const campoBuscar = document.getElementById("campoBuscar");
const btnBuscar = document.getElementById("btnBuscar");


if (botonBuscar && buscador) {

    botonBuscar.addEventListener("click", function () {

        if (buscador.style.display === "flex") {

            buscador.style.display = "none";

        } else {

            buscador.style.display = "flex";

            if (campoBuscar) {
                campoBuscar.focus();
            }

        }

    });

}


if (btnBuscar && campoBuscar) {

    btnBuscar.addEventListener("click", function () {

        const texto = campoBuscar.value.toLowerCase().trim();


        if (texto === "") {

            alert("Escribe algo para buscar.");
            return;

        }


        // =============================
        // INICIO
        // =============================

        if (
            texto === "inicio" ||
            texto === "home"
        ) {

            window.location.href = "index.html";
            return;

        }


        // =============================
        // NOSOTROS
        // =============================

        if (
            texto === "nosotros" ||
            texto === "about" ||
            texto === "about us"
        ) {

            window.location.href = "nosotros.html";
            return;

        }


        // =============================
        // SERVICIOS
        // =============================

        if (
            texto === "servicio" ||
            texto === "servicios" ||
            texto === "service" ||
            texto === "services"
        ) {

            window.location.href = "servicios.html";
            return;

        }


        // =============================
        // PROYECTOS
        // =============================

        if (
            texto === "proyecto" ||
            texto === "proyectos" ||
            texto === "project" ||
            texto === "projects"
        ) {

            window.location.href = "proyectos.html";
            return;

        }


        // =============================
        // CONTACTO
        // =============================

        if (
            texto === "contacto" ||
            texto === "contact" ||
            texto === "cotizacion" ||
            texto === "cotización" ||
            texto === "solicita una cotización" ||
            texto === "solicita una cotizacion"
        ) {

            window.location.href = "contacto.html";
            return;

        }


        // =============================
        // NO ENCONTRADO
        // =============================

        alert("No se encontró: " + campoBuscar.value);

    });

}
// =============================
// FILTROS DE PROYECTOS
// =============================

const botonesFiltro = document.querySelectorAll(".filtro");
const tarjetasProyecto = document.querySelectorAll(".tarjeta-proyecto");

botonesFiltro.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const filtro = boton.getAttribute("data-filtro");

        botonesFiltro.forEach(function(b) {
            b.classList.remove("activo");
        });

        boton.classList.add("activo");

        tarjetasProyecto.forEach(function(tarjeta) {

            const categoria = tarjeta.getAttribute("data-categoria");

            if (filtro === "todos" || categoria === filtro) {
                tarjeta.style.display = "block";
            } else {
                tarjeta.style.display = "none";
            }

        });

    });

});
// =============================
// BUSCADOR DE PROYECTOS
// =============================

const buscadorProyecto = document.querySelector(".buscador-proyectos input");
const botonBuscarProyecto = document.querySelector(".buscador-proyectos button");

if (buscadorProyecto && botonBuscarProyecto) {

    botonBuscarProyecto.addEventListener("click", function () {

        const texto = buscadorProyecto.value.toLowerCase().trim();

        tarjetasProyecto.forEach(function (tarjeta) {

            const nombre = tarjeta.querySelector("h3").textContent.toLowerCase();
            const categoria = tarjeta.getAttribute("data-categoria").toLowerCase();

            if (
                texto === "" ||
                nombre.includes(texto) ||
                categoria.includes(texto)
            ) {
                tarjeta.style.display = "block";
            } else {
                tarjeta.style.display = "none";
            }

        });

    });

}
// =============================
// VENTANA DE PROYECTOS
// =============================

const enlacesProyecto = document.querySelectorAll(".ver-proyecto");
const modalProyecto = document.getElementById("modal-proyecto");
const cerrarModal = document.getElementById("cerrar-modal");

const tituloModal = document.getElementById("titulo-modal");
const ubicacionModal = document.getElementById("ubicacion-modal");
const descripcionModal = document.getElementById("descripcion-modal");

enlacesProyecto.forEach(function(enlace) {

    enlace.addEventListener("click", function() {

        const tarjeta = enlace.closest(".tarjeta-proyecto");

        const titulo = tarjeta.querySelector("h3").textContent;
        const ubicacion = tarjeta.querySelector(".ubicacion-proyecto").textContent;
        const descripcion = tarjeta.querySelector(".contenido-proyecto p:last-of-type").textContent;

        tituloModal.textContent = titulo;
        ubicacionModal.textContent = ubicacion;
        descripcionModal.textContent = descripcion;

        modalProyecto.style.display = "flex";
    });

});

if (cerrarModal && modalProyecto) {
    cerrarModal.addEventListener("click", function() {
        modalProyecto.style.display = "none";
    });
}
// =============================
// CAMBIO DE IDIOMA
// =============================

function cambiarIdioma(idioma) {

    const elementos = document.querySelectorAll("[data-es][data-en]");

    elementos.forEach(function(elemento) {

        elemento.textContent =
            elemento.getAttribute("data-" + idioma);

    });

    // Cambiar placeholder del buscador
    const campoBuscar = document.getElementById("campoBuscar");

    if (campoBuscar) {

        if (idioma === "en") {
            campoBuscar.placeholder = "Search...";
        } else {
            campoBuscar.placeholder = "Buscar...";
        }

    }

    // Cambiar botón del buscador
    const btnBuscar = document.getElementById("btnBuscar");

    if (btnBuscar) {

        if (idioma === "en") {
            btnBuscar.textContent = "Search";
        } else {
            btnBuscar.textContent = "Buscar";
        }

    }

    // Cerrar menú de idioma
    if (menuIdioma) {
        menuIdioma.style.display = "none";
    }

}
// =============================
// FORMULARIO DE CONTACTO
// =============================

document.addEventListener("DOMContentLoaded", function () {

    const btnEnviar = document.getElementById("btnEnviar");

    if (btnEnviar) {

        btnEnviar.addEventListener("click", function () {

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const tipoConsulta = document.getElementById("tipoConsulta").value;
            const mensaje = document.getElementById("mensaje").value.trim();

            // CAMPOS VACÍOS
            if (
                nombre === "" ||
                correo === "" ||
                telefono === "" ||
                tipoConsulta === "" ||
                mensaje === ""
            ) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            // CORREO INCORRECTO
            const formatoCorreo = /^[^\s@]+@gmail\.com$/;

            if (!formatoCorreo.test(correo)) {
                alert("Por favor, coloca tu correo correctamente.");
                return;
            }

            // TODO CORRECTO
            alert("¡Tu solicitud se envió correctamente!");

        });

    }

});

const btnCotizacion = document.getElementById("btnCotizacion");
const modalCotizacion = document.getElementById("modalCotizacion");
const btnContinuarCotizacion = document.getElementById("btnContinuarCotizacion");
const btnCerrarCotizacion = document.getElementById("btnCerrarCotizacion");

if (btnCotizacion && modalCotizacion) {

    btnCotizacion.addEventListener("click", function(event) {
        event.preventDefault();
        modalCotizacion.style.display = "flex";
    });

    btnCerrarCotizacion.addEventListener("click", function() {
        modalCotizacion.style.display = "none";
    });

    btnContinuarCotizacion.addEventListener("click", function() {
        modalCotizacion.style.display = "none";
        document.getElementById("nombre").focus();
    });
}