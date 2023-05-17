<script>
    import { getContext } from "svelte";
    import { data } from "./store";
    import { onMount } from "svelte";
    import Libro from "./Libro.svelte";
    import { sesionIniciada } from "./ComprobarSesion.js";

    if (!sesionIniciada()) {
        window.location.href = "/";
    }

    const URL = getContext("URL");

    let getLibros = async () => {
        const response = await fetch(URL.libros);
        $data = await response.json();
    };

    onMount(getLibros);
</script>

<div class="libros">
    {#each $data as libro}
        <Libro bind:libro />
    {/each}
</div>
