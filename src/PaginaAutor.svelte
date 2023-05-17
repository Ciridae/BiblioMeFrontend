<script>
    import { getContext } from "svelte";
    import { onMount } from "svelte";
    import { sesionIniciada } from "./ComprobarSesion.js";
    import { Link } from "svelte-routing";

    export let id;

    if (!sesionIniciada()) {
        window.location.href = "/";
    }

    let autor = {
        id: 0,
        nombre: "",
        apellidos: "",
        img: "",
        nacido: "",
        web: "",
        twitter: "",
        autorDesde: "",
        biografia: "",
    };

    let librosPorAutor = [];

    const URL = getContext("URL");

    let getAutor = async () => {
        let response = await fetch(URL.autores + "/" + id);
        autor = await response.json();

        let opcionesLibrosPorAutor = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(autor),
        };

        response = await fetch(
            URL.libros + "/por_autor/" + id,
            opcionesLibrosPorAutor
        );

        librosPorAutor = await response.json();
    };

    onMount(getAutor);
</script>

<div class="contenedor-autor pt-3">
    <section class="imagen-autor">
        <div class="contenedor-imagen-autor">
            <img
                class="imagen-autor"
                src="../{autor.img}"
                alt="{autor.nombre} {autor.apellidos}"
                width="235"
            />
        </div>
        <div class="pt-3">
            <h3>Libros:</h3>
            {#each librosPorAutor as libroPorAutor}
                <Link class="enlace d-block" to="/libro/{libroPorAutor.isbn}">{libroPorAutor.titulo}</Link>
            {/each}
        </div>
    </section>
    <section class="contenedor-datos-autor">
        <h1 class="mb-1">{autor.nombre} {autor.apellidos}</h1>
        <hr class="w-80" />
        <div class="datos-autor mt-1">
            <div class="my-01">Nacido</div>
            <div class="my-01">{autor.nacido}</div>
            <div class="my-01">Página web</div>
            <div class="my-01">
                <a target="_blank" class="enlace verde" href={autor.web}
                    >{autor.web}</a
                >
            </div>
            <div class="my-01">Twitter</div>
            <div class="my-01">
                <a target="_blank" class="enlace verde" href={autor.twitter}
                    >{autor.twitter.substring(20)}</a
                >
            </div>
            <div class="my-01">Autor Desde</div>
            <div class="my-01">{autor.autorDesde}</div>
        </div>
        <div class="sobre-autor w-80">
            {@html autor.biografia}
        </div>
    </section>
</div>

<style>
</style>
