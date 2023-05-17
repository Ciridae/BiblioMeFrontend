<script>
    import { getContext } from "svelte";
    import { onMount } from "svelte";
    import { sesionIniciada } from "./ComprobarSesion.js";

    if (!sesionIniciada()) {
        window.location.href = "/";
    }

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

    usuario = JSON.parse(usuarioSesion);

    let getReservas = async () => {
        let opcionesReservas = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario),
        };
        const response = await fetch(
            URL.reservas + "/" + usuario.id,
            opcionesReservas
        );
        if (response.ok) {
            reservas = await response.json();
            hayDatos = true;
        } else {
            hayDatos = false;
        }
    };

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
                    <div class="pt-2">
                        Libro: <b>{reserva.reservaPK.libro.titulo}</b>, Fecha de
                        reserva: <b>{reserva.reservaPK.fechaReserva}</b>
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
