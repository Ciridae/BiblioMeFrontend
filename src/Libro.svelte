<script>
    import { Link } from "svelte-routing";

    export let libro = {
        isbn: 0,
        titulo: "",
        sinopsis: "",
        numPaginas: 0,
        img: "",
        estado: "",
        autor: {
            id: 0,
            nombre: "",
            apellidos: "",
            img: "",
        },
        genero: {
            id: 0,
            genero: "",
        },
    };
</script>

<section class="libro">
    <div>
        <img class="portada" src="{libro.img}" alt="Amanecer rojo">
    </div>
    <div class="datos-libro">
        <h1><Link class="enlace" to="/libro/{libro.isbn}">{libro.titulo}</Link></h1>
        <Link class="enlace h4" to="/autor/{libro.autor.id}">{libro.autor.nombre} {libro.autor.apellidos}</Link>
        <div class="contenedor-disponibilidad mt-2">{libro.estado}</div>
    </div>
</section>