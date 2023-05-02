<script>
    import { getContext } from "svelte";
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";

    export let isbn;

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
        },
        genero: { id: 0, genero: "" },
    };

    const URL = getContext("URL");

    let getLibro = async () => {
        const response = await fetch(URL.libros + "/" + isbn);
        libro = await response.json();
        console.log(libro);
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
                .then((res) => console.log(res))
                .catch((error) => console.log(error));
        }
    }

    function libroDisponible() {
        if (libro.estado === "Disponible") {
            return true;
        } else {
            return false;
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
            <button on:click={reservar} class="boton-leer">
                <div class="texto-leer">{libro.estado}</div>
            </button>
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
            <div class="fl w-30"><b>Nº Páginas</b></div>
            <div class="fl w-70">
                <span class="genero-libro desde-izquierda mr-1"
                    >{libro.numPaginas}</span
                >
            </div>
        </div>
    </section>
</div>
