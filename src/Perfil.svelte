<script>
    import { getContext } from "svelte";
    import { onMount } from "svelte";

    const URL = getContext("URL");

    let usuario = {
        id: 0,
        nombre: "",
        apellidos: "",
        email: "",
        password: "",
        tipoUsuario: {
            id: 0,
            tipo: "",
            permisos: 0,
        },
    };

    let reservas;
    let hayDatos;

    const usuarioSesion = localStorage.getItem("user");

    if (!usuarioSesion) {
        window.location.href = "/";
    }

    let getReservas = async () => {
        const response = await fetch(URL.reservas + "/" + usuario.id);
        if (response.ok) {
            reservas = await response.json();
            hayDatos = true;
        } else {
            hayDatos = false;
        }
    };

    usuario = JSON.parse(usuarioSesion);

    onMount(getReservas);
</script>

<div class="contenedor-perfil pt-3">
    <section class="contenedor-datos-perfil">
        <h1 class="mb-1 text-center">
            Usuario: {usuario.nombre}
            {usuario.apellidos}
        </h1>
        <hr class="w-100" />
        <div class="datos-perfil mt-1">
            <div class="fl w-30 my-01"><b>Email</b></div>
            <div class="fl w-70 my-01">{usuario.email}</div>
            <div class="fl w-30 my-01"><b>Tipo</b></div>
            <div class="fl w-70 my-01">{usuario.tipoUsuario.tipo}</div>
        </div>
        <div class="limpiar pt-5">
            <h3>Reservas:</h3>
            {#if hayDatos}
                {#each reservas as reserva}
                    <div>
                        Libro: {reserva.reservaPK.isbn}, Fecha de reserva: {reserva.reservaPK
                            .fechaReserva}
                    </div>
                {/each}
            {:else}
                <div>No has hecho reservas todavía.</div>
            {/if}
        </div>
    </section>
</div>

<style>
    .limpiar {
        clear: both;
    }
</style>
