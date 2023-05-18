<script>
    import { getContext } from "svelte";
    import { data } from "./store";
    import { onMount } from "svelte";
    import Libro from "./Libro.svelte";
    import { sesionIniciada } from "./ComprobarSesion.svelte";
    import Buscar from "./Buscar.svelte";

    if (!sesionIniciada()) {
        window.location.href = "/";
    }

    let datosFiltrados = [];
    let patron = "";

    const URL = getContext("URL");

    let getLibros = async () => {
        const response = await fetch(URL.libros);
        $data = await response.json();
    };

    onMount(getLibros);

    $: datosFiltrados = $data.filter((libro) => {
        RegExp(patron, "i").test(libro.titulo)
    })
</script>

<Buscar bind:busqueda={patron} />

<div class="libros">
    {#each datosFiltrados as libro}
        <Libro bind:libro />
    {/each}
</div>
