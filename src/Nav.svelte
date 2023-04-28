<script>
    import { Link } from "svelte-routing";
</script>

<nav
    class="navbar navbar-light navbar-expand-md bg-faded justify-content-center"
>
    <Link class="navbar-brand d-flex w-50 mr-auto" to="/">
        <img src="images/BiblioMeRecortadaSinFondo.png" height="30" alt="" />
    </Link>
    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar3"
    >
        <span class="navbar-toggler-icon" />
    </button>
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
        <ul class="navbar-nav w-100 justify-content-center">
            <li class="nav-item">
                <Link class="nav-link text-brown" to="/libros">Libros</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link text-brown" to="/autores">Autores</Link>
            </li>
        </ul>
        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
            <li class="nav-item my-auto">
                <Link class="nav-link" to="/libros"
                    ><img
                        src="images/iconoLogin.png"
                        width="30"
                        height="30"
                        alt="Usuario"
                    /></Link
                >
            </li>
        </ul>
    </div>
</nav>

<style>
    nav {
        background-color: #f4f1ea !important;
        padding: 20px;
    }
</style>
