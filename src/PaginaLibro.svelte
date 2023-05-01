<script>
    import { getContext } from "svelte";
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";

    export let isbn;

    let libro = {
        isbn: 0,
        titulo: "El Nombre del Viento",
        sinopsis: "",
        numPaginas: 880,
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

    onMount(getLibro);
</script>

<div class="contenedor-libro pt-3">
    <section class="imagen-libro">
        <div class="contenedor-portada">
            <img class="portada-pagina-libro"
                src="../{libro.img}"
                alt="Portada {libro.titulo}"
                width="235"
            />
        </div>
        <div class="contenedor-leer mt-1">
            <div class="boton-leer">
                <div class="texto-leer">Reservar</div>
            </div>
        </div>
    </section>
    <section class="datos-libro">
        <h2>{libro.saga}</h2>
        <h1 class="mt-1">{libro.titulo}</h1>
        <h3 class="mt-1">
            <Link class="enlace" to="/autor/{libro.autor.id}">{libro.autor.nombre} {libro.autor.apellidos}</Link>
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
