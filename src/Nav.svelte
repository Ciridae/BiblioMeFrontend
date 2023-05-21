<script>
    import { Link } from "svelte-routing";
    import { sesionIniciada } from "./ComprobarSesion.svelte";
</script>

<nav
    class="navbar navbar-light navbar-expand-md bg-faded justify-content-center"
>
    <Link class="navbar-brand d-flex w-50 mr-auto" to="/">
        <img src="/images/BiblioMeRecortadaSinFondo.png" height="30" alt="Logo Bibliome" />
    </Link>
    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar"
    >
        <span class="navbar-toggler-icon" />
    </button>
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar">
        {#if sesionIniciada()}
            <ul class="navbar-nav w-100 justify-content-center">
                <li class="nav-item text-center">
                    <Link class="nav-link text-brown enlace-navegador" to="/libros">Libros</Link>
                </li>
            </ul>
            <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                <li class="nav-item dropdown my-auto">
                    <button
                        class="nav-link dropdown-toggle boton-dropdown mx-auto"
                        type="button"
                        title="boton"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <img
                            src="/images/iconoLogin.png"
                            width="30"
                            height="30"
                            alt="Usuario"
                        />
                    </button>
                    <div
                        class="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <Link class="dropdown-item" to="/perfil">Perfil</Link>
                        <div class="dropdown-divider" />
                        <Link class="dropdown-item" to="/cerrar_sesion"
                            >Cerrar sesión</Link
                        >
                    </div>
                </li>
            </ul>
        {:else}
            <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                <li class="nav-item my-auto">
                    <Link class="nav-link" to="/inicio_sesion"
                        ><img
                            src="/images/iconoLogin.png"
                            width="30"
                            height="30"
                            alt="Usuario"
                        /></Link
                    >
                </li>
            </ul>
        {/if}
    </div>
</nav>

<style>
    nav {
        background-color: #f4f1ea !important;
        padding: 20px;
    }

    .boton-dropdown {
        background-color: #f4f1ea;
        border: 0;
    }
</style>
