<script>
    export let busqueda = "";
</script>

<div class="container">
    <div class="w-25 pt-2">
        <label for="buscar">Buscar:</label>
        <input id="buscar" class="form-control" type="search" bind:value={busqueda}>
    </div>
</div>