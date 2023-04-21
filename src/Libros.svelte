<script>
    import { getContext } from "svelte";
    import { data } from "./store";
    import { onMount } from "svelte";
    // import Buscar from "./Buscar.svelte";
    import Libro from "./Libro.svelte";
    // import Boton from "./Boton.svelte";

    const URL = getContext("URL");
    let datosFiltrados = [];
    let patron = "";

    let getLibros = async () => {
        const response = await fetch(URL.libros);
        $data = await response.json();
    };

    onMount(getLibros);

    $: datosFiltrados = $data.filter((libro) =>
        RegExp(patron, "i").test(libro.titulo)
    );
</script>
