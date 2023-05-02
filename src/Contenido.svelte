<script>
    import {Route} from "svelte-routing";
    import Autores from "./Autores.svelte";
    import Inicio from "./Inicio.svelte";
    import Libros from "./Libros.svelte";
    import PaginaLibro from "./PaginaLibro.svelte";
    import PaginaAutor from "./PaginaAutor.svelte";
    import FormularioLogin from "./FormularioLogin.svelte";
</script>

<main class="pb-5">
    <Route path="/" component="{Inicio}"></Route>
    <Route path="/libros" component="{Libros}"></Route>
    <Route path="/autores" component="{Autores}"></Route>
    <Route path="/libro/:isbn" component="{PaginaLibro}"></Route>
    <Route path="/autor/:id" component="{PaginaAutor}"></Route>
    <Route path="/inicio_sesion" component="{FormularioLogin}"></Route>
</main>

<style>
    main {
        min-height: calc(100vh - 89px - 200px);
    }
</style>