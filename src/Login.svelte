<script>
    import { getContext } from "svelte";
    import { sesionIniciada } from "./ComprobarSesion.svelte";
    import { Link } from "svelte-routing";

    if (sesionIniciada()) {
        window.location.href = "/";
    }

    const URL = getContext("URL");

    let login = async (emailPorFormulario, correoPorFormulario) => {
        let usuarioFormulario = {
            email: emailPorFormulario,
            password: correoPorFormulario,
        };
        let opciones = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuarioFormulario),
        };
        await fetch(URL.usuarios + "/login", opciones)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 404) {
                    return Promise.reject("Email o contraseña incorrecta");
                } else {
                    return Promise.reject("ERROR: " + response.status);
                }
            })
            .then((data) => {
                let usuarioDevuelto = data;
                localStorage.setItem("user", JSON.stringify(usuarioDevuelto));
                window.location.href = "/";
            })
            .catch((error) => {
                document.getElementById("mensaje-error").innerHTML = error;
                console.log(error);
            });
    };

    function validarPassword(password) {
        if (!password.trim()) {
            throw new Error(`El campo password no puede estar vacío.`);
        }
    }

    async function handleFormSubmit(event) {
        const form = event.target;
        const emailPorFormulario = form.email.value;
        const passwordPorFormulario = form.password.value;
        try {
            validarPassword(passwordPorFormulario);
            await login(emailPorFormulario, passwordPorFormulario);
        } catch (error) {
            document.getElementById("mensaje-error").innerHTML = error;
        }
    }
</script>

<div class="container pt-5">
    <h1 class="text-center">Inicio de sesión</h1>
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
                value="Iniciar sesión"
            />
        </form>
        <div class="pt-2 pr-3">
            <Link class="enlace" to="/registro">Crear cuenta</Link>
        </div>
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
