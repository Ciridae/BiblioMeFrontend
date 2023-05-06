<script>
  import { setContext } from "svelte";
  import { Router } from "svelte-routing";
  import Nav from "./Nav.svelte";
  import Contenido from "./Contenido.svelte";
  import Footer from "./Footer.svelte";

  const URL = {
    libros: "http://localhost:4343/libros",
    autores: "http://localhost:4343/autores",
    usuarios: "http://localhost:4343/usuarios",
    reservas: "http://localhost:4343/reservas",
  };
  setContext("URL", URL);
</script>

<Router>
  <Nav />
  <Contenido />
  <Footer />
</Router>
