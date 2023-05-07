<script>
    const usuarioSesion = localStorage.getItem("user");

    if (!usuarioSesion) {
        window.location.href = "/";
    }

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

    usuario = JSON.parse(usuarioSesion);
</script>

<div class="contenedor-perfil pt-3">
    <section class="contenedor-datos-perfil">
        <h1 class="mb-1 text-center">
            Usuario: {usuario.nombre}
            {usuario.apellidos}
        </h1>
        <hr class="w-100" />
        <div class="datos-perfil mt-1">
            <div class="fl w-30 my-01">Email</div>
            <div class="fl w-70 my-01">{usuario.email}</div>
            <div class="fl w-30 my-01">Tipo</div>
            <div class="fl w-70 my-01">{usuario.tipoUsuario.tipo}</div>
        </div>
    </section>
</div>
