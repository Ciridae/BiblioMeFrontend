<script>
    import { getContext } from "svelte";
    import { onMount } from "svelte";
    import { usuario } from "./store";

    const URL = getContext("URL");

    let login = async (emailPorFormulario, correoPorFormulario) => {
        let usuarioFormulario = {
            email: emailPorFormulario,
            password: correoPorFormulario,
        };
        let opciones = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuarioFormulario),
        };
        const response = await fetch(URL.usuarios + "/login", opciones);
        if (response.ok) {
            let usuarioDevuelto = await response.json();
            console.log(usuarioDevuelto);
            localStorage.setItem("user", usuarioDevuelto);
        }
    };

    async function handleFormSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const emailPorFormulario = form.correo.value;
        const passwordPorFormulario = form.password.value;
        try {
            await login(emailPorFormulario, passwordPorFormulario);
        } catch (error) {
            console.error(error);
        }
    }
</script>

<div class="container pt-5">
    <section>
        <form class="mx-auto" on:submit={handleFormSubmit}>
            <div class="form-group">
                <label for="email">Email</label>
                <input
                    type="text"
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
    </section>
</div>
