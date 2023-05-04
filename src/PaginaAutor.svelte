<script>
    import { getContext } from "svelte";
    import { onMount } from "svelte";

    export let id;

    let autor = {
        id: 0,
        nombre: "",
        apellidos: "",
        img: "",
        nacido: "",
        web: "",
        twitter: "",
        autorDesde: "",
        biografia: ""
    };

    const URL = getContext("URL");

    let getAutor = async () => {
        const response = await fetch(URL.autores + "/" + id);
        autor = await response.json();
        console.log(autor);
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
    </section>
    <section class="contenedor-datos-autor">
        <h1 class="mb-1">{autor.nombre} {autor.apellidos}</h1>
        <hr class="w-80" />
        <div class="datos-autor mt-1">
            <div class="fl w-30 my-01">Nacido</div>
            <div class="fl w-70 my-01">{autor.nacido}</div>
            <div class="fl w-30 my-01">Página web</div>
            <div class="fl w-70 my-01">
                <a
                    target="_blank"
                    class="enlace verde"
                    href="{autor.web}"
                    >{autor.web}</a
                >
            </div>
            <div class="fl w-30 my-01">Twitter</div>
            <div class="fl w-70 my-01">
                <a
                    target="_blank"
                    class="enlace verde"
                    href="{autor.twitter}">{autor.twitter.substring(20)}</a
                >
            </div>
            <div class="fl w-30 my-01">Géneros</div>
            <div class="fl w-70 my-01">
                <a class="enlace verde" href={'#'}>Ciencia Ficción</a>,
                <a class="enlace verde" href={'#'}>Fantasía</a>
            </div>
            <div class="fl w-30 my-01">Influencias</div>
            <div class="fl w-70 my-01">
                <a class="enlace verde" href={'#'}>George RR Martin</a>,
                <a class="enlace verde" href={'#'}>J.K. Rowling</a>
            </div>
            <div class="fl w-30 my-01">Autor Desde</div>
            <div class="fl w-70 my-01">{autor.autorDesde}</div>
        </div>
        <div class="sobre-autor w-80">
            {@html autor.biografia}
        </div>
    </section>
</div>

<style>
</style>
