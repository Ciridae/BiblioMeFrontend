<script>
    import { Route } from "svelte-routing";
    import Inicio from "./Inicio.svelte";
    import Libros from "./Libros.svelte";
    import PaginaLibro from "./PaginaLibro.svelte";
    import PaginaAutor from "./PaginaAutor.svelte";
    import Login from "./Login.svelte";
    import Logout from "./Logout.svelte";
    import Perfil from "./Perfil.svelte";
</script>

<main class="pb-5">
    <Route path="/" component={Inicio} />
    <Route path="/libros" component={Libros} />
    <Route path="/libro/:isbn" component={PaginaLibro} />
    <Route path="/autor/:id" component={PaginaAutor} />
    <Route path="/inicio_sesion" component={Login} />
    <Route path="/cerrar_sesion" component={Logout} />
    <Route path="/perfil" component={Perfil} />
</main>

<style>
    main {
        min-height: calc(100vh - 89px - 150px);
    }
</style>
