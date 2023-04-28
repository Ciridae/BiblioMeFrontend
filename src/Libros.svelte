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
        console.log($data);
    };

    onMount(getLibros);

    $: datosFiltrados = $data.filter((libro) =>
        RegExp(patron, "i").test(libro.titulo)
    );
</script>

<div class="libros">
    <section class="libro">
        <div>
            <img class="portada" src="images/portadas/amanecer_rojo.jpg" alt="Amanecer rojo">
        </div>
        <div class="datos-libro">
            <h1><a class="enlace" href="libro.html">Amanecer Rojo</a></h1>
            <h3><a class="enlace h4" href="autor_pierce.html">Pierce Brown</a></h3>
            <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </span>
        </div>
    </section>
</div>
