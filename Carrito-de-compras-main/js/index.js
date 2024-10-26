const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en bicicletas.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaBicicleta = document.createElement("div");
    nuevaBicicleta.classList = "tarjeta-producto"
    nuevaBicicleta.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Bicicleta 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevaBicicleta);
    nuevaBicicleta.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(bicicletas);

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Aquí puedes cargar más productos
    cargarMasProductos();
  }
});

function cargarMasProductos() {
  // Lógica para agregar más productos al contenedor
  crearTarjetasProductosInicio(bicicletas.slice(15)); // Ejemplo: cargando más elementos
}
