<script>
    export let busqueda = "";
</script>

<div class="container">
    <div class="pt-2">
        <input id="buscar" class="form-control" type="search" bind:value={busqueda} placeholder="Buscar libro">
    </div>
</div>

<style>
    #buscar {
        width: 300px
    }
</style>