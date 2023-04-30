<script>
  export let isbn;
</script>

<h1>ISBN: {isbn}</h1>

<div class="contenedor-libro">
  <section class="imagen-libro">
      <div class="contenedor-portada">
          <img src="../images/portadas/amanecer_rojo.jpg" alt="Portada Amanecer Rojo" width="235">
      </div>
      <div class="contenedor-leer mt-1">
          <div class="boton-leer">
              <div class="texto-leer">Leer</div>
          </div>
      </div>
  </section>
  <section class="datos-libro">
      <h2>Saga Amanecer Rojo #1</h2>
      <h1 class="mt-1">Amanecer Rojo</h1>
      <h3 class="mt-1"><a class="enlace" href="autor_pierce.html">Pierce Brown</a></h3>
      <div class="mt-3">
          <span class="estrellas">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
          </span>
          <span class="media ml-2">4.26</span>
      </div>
      <div class="mt-3">
          <p class="sinopsis">Ideas como libertad o igualdad murieron junto con la Tierra. Ahora, en Marte, el
              equilibrio se sustenta en un férreo sistema de castas representadas por colores, en el que los
              dorados son la
              élite gobernante.
          </p>
          <p class="sinopsis my-2">Pero Darrow no es un dorado, es un rojo.</p>
          <p class="sinopsis">Para sobrevivir debe ocultar su verdad
              sin olvidar que cada muerte, cada paso en la batalla, es por la libertad.</p>
      </div>
      <div class="mt-3">
          <div class="fl w-30"><b>Géneros</b></div>
          <div class="fl w-70">
              <span class="genero-libro desde-izquierda mr-1">Ciencia Ficción</span>
              <span class="genero-libro desde-izquierda mr-1">Fantasía</span>
              <span class="genero-libro desde-izquierda mr-1">Ficción</span>
              <span class="genero-libro desde-izquierda mr-1">Aventura</span>
              <span class="genero-libro desde-izquierda">Espacio</span>
          </div>
      </div>
  </section>
</div>