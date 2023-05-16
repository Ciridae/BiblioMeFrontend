<script>
    import { getContext } from "svelte";
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";
    import { sesionIniciada } from "./ComprobarSesion.svelte";

    export let isbn;

    if (!sesionIniciada()) {
        window.location.href = "/";
    }

    let usuario = {
        id: 0,
        nombre: "",
        apellidos: "",
        email: "",
        password: "",
        tipoUsuario: {
            id: 0,
            tipo: "",
            permisos: 0,
        },
    };

    let libro = {
        isbn: 0,
        titulo: "",
        sinopsis: "",
        numPaginas: 0,
        img: "",
        estado: "",
        saga: "",
        autor: {
            id: 0,
            nombre: "",
            apellidos: "",
            img: "",
            nacido: "",
            web: "",
            twitter: "",
            autorDesde: "",
            biografia: "",
        },
        genero: {
            id: 0,
            genero: "",
        },
    };

    const URL = getContext("URL");

    const usuarioSesion = localStorage.getItem("user");

    if (!usuarioSesion) {
        window.location.href = "/";
    }

    usuario = JSON.parse(usuarioSesion);

    let getLibro = async () => {
        const response = await fetch(URL.libros + "/" + isbn);
        libro = await response.json();
    };

    function reservar() {
        if (libro.estado == "Disponible") {
            libro.estado = "Reservado";
            let opciones = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(libro),
            };
            fetch(URL.libros + "/" + libro.isbn, opciones)
                .then((res) => {
                    console.log(res);

                    let fechaHoraActual = new Date();
                    // Obtener la fecha actual en formato de cadena (YYYY-MM-DD)
                    let fechaActual = fechaHoraActual
                        .toISOString()
                        .substring(0, 10);
                    // Obtener la hora actual en formato de cadena (HH:MM:SS)
                    let horaActual = fechaHoraActual.toLocaleTimeString();
                    let fechaHora = fechaActual + " " + horaActual;

                    let reserva = {
                        reservaPK: {
                            libro: libro,
                            usuario: usuario,
                            fechaReserva: fechaHora,
                        },
                    };
                    let opcionesReserva = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(reserva),
                    };
                    fetch(URL.reservas, opcionesReserva)
                        .then((res) => console.log(res))
                        .catch((error) => console.log(error));
                })
                .catch((error) => console.log(error));
        }
    }

    onMount(getLibro);
</script>

<div class="contenedor-libro pt-3">
    <section class="imagen-libro">
        <div class="contenedor-portada">
            <img
                class="portada-pagina-libro"
                src="../{libro.img}"
                alt="Portada {libro.titulo}"
                width="235"
            />
        </div>
        <div class="contenedor-leer mt-1">
            {#if libro.estado == "Disponible"}
                <button on:click={reservar} class="boton-leer">
                    <div class="texto-leer">Reservar</div>
                </button>
            {:else}
                <button class="boton-leer">
                    <div class="texto-leer">{libro.estado}</div>
                </button>
            {/if}
        </div>
    </section>
    <section class="datos-libro">
        <h2>{libro.saga}</h2>
        <h1 class="mt-1">{libro.titulo}</h1>
        <h3 class="mt-1">
            <Link class="enlace" to="/autor/{libro.autor.id}"
                >{libro.autor.nombre} {libro.autor.apellidos}</Link
            >
        </h3>
        <div class="mt-3">
            <p class="sinopsis">{libro.sinopsis}</p>
        </div>
        <div class="mt-3">
            <div class="fl w-30"><b>Género</b></div>
            <div class="fl w-70">
                <span class="genero-libro desde-izquierda mr-1"
                    >{libro.genero.genero}</span
                >
            </div>
            <div class="fl w-30"><b>Páginas</b></div>
            <div class="fl w-70">
                <span class="genero-libro desde-izquierda mr-1"
                    >{libro.numPaginas}</span
                >
            </div>
        </div>
    </section>
</div>
