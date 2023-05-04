<div class="container pt-5">
    <section>
        <form class="mx-auto" action="Login.svelte">
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
