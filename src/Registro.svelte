<script>
    import { getContext } from "svelte";
    import { sesionIniciada } from "./ComprobarSesion.svelte";

    if (sesionIniciada()) {
        window.location.href = "/";
    }

    const URL = getContext("URL");

    let registro = async (usuarioFormulario) => {
        let opciones = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuarioFormulario),
        };
        await fetch(URL.usuarios + "/registro", opciones)
            .then((response) => {
                if (response.ok) {
                    return response;
                } else if (response.status === 404) {
                    return Promise.reject(
                        "Ya existe un usuario con ese correo"
                    );
                } else {
                    return Promise.reject("ERROR: " + response.status);
                }
            })
            .then(() => {
                window.location.href = "/inicio_sesion";
            })
            .catch((error) => {
                document.getElementById("mensaje-error").innerHTML = error;
                console.log(error);
            });
    };

    function validarCampo(campo) {
        if (!campo.trim()) {
            throw new Error(`Los campos no pueden estar vacíos.`);
        }
    }

    async function handleFormSubmit(event) {
        const form = event.target;
        let usuarioFormulario = {
            email: form.email.value,
            password: form.password.value,
            nombre: form.nombre.value,
            apellidos: form.apellidos.value,
            tipoUsuario: {
                id: 2,
                tipo: "estándar",
                permisos: 2,
            },
        };
        try {
            for (let index = 0; index < form.elements.length; index++) {
                const campo = form.elements[index];
                validarCampo(campo.value);
            }

            await registro(usuarioFormulario);
        } catch (error) {
            document.getElementById("mensaje-error").innerHTML = error;
            console.error(error);
        }
    }
</script>

<div class="container pt-5">
    <h1 class="text-center">Registro</h1>
    <section>
        <form class="mx-auto" on:submit|preventDefault={handleFormSubmit}>
            <div class="form-group">
                <label for="email">Email</label>
                <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    required
                    placeholder="Ej.: prueba@gmail.com"
                />
            </div>
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input
                    type="text"
                    class="form-control"
                    name="nombre"
                    id="nombre"
                    required
                />
            </div>
            <div class="form-group">
                <label for="apellidos">Apellidos</label>
                <input
                    type="text"
                    class="form-control"
                    name="apellidos"
                    id="apellidos"
                    required
                />
            </div>
            <div class="form-group">
                <label for="password">Contraseña</label>
                <input
                    type="password"
                    class="form-control"
                    name="password"
                    id="password"
                    required
                />
            </div>
            <input
                type="submit"
                class="btn btn-dark w-100 boton"
                value="Registrarse"
            />
        </form>
        <span class="d-block pt-3" id="mensaje-error" />
    </section>
</div>

<style>
    #mensaje-error {
        color: red;
    }

    label {
        font-size: 1.2em;
    }
</style>
