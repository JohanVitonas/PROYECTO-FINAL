const contenedorTarjetas = document.querySelector("tbody");
const cantidadElement = document.getElementById("cantidad");
const precioElement = document.getElementById("total-precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesContainer = document.querySelector(".tabla-carrito tfoot");

/** Crea las filas de productos en la tabla teniendo en cuenta lo guardado en localStorage */
function crearFilasProductosCarrito() {
  contenedorTarjetas.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("bicicletas"));
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const filaProducto = document.createElement("tr");
      filaProducto.innerHTML = `
        <td><img src="../img/productos/${producto.id}.jpg" alt="${producto.nombre}" class="imagen-producto"></td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td>
          <button class="btn-restar">-</button>
          <span class="cantidad">${producto.cantidad}</span>
          <button class="btn-agregar">+</button>
        </td>
        <td><button class="btn-eliminar">🗑️</button></td>
      `;
      contenedorTarjetas.appendChild(filaProducto);

      // Eventos para restar y sumar cantidades
      filaProducto.querySelector(".btn-restar").addEventListener("click", (e) => {
        const cantidadElement = e.target.parentElement.querySelector(".cantidad");
        cantidadElement.innerText = restarAlCarrito(producto);
        actualizarFilasProductosCarrito();
        actualizarTotales();
      });

      filaProducto.querySelector(".btn-agregar").addEventListener("click", (e) => {
        const cantidadElement = e.target.parentElement.querySelector(".cantidad");
        cantidadElement.innerText = agregarAlCarrito(producto);
        actualizarTotales();
      });

      // Evento para eliminar el producto del carrito
      filaProducto.querySelector(".btn-eliminar").addEventListener("click", () => {
        eliminarDelCarrito(producto);
        crearFilasProductosCarrito();
        actualizarTotales();
      });
    });
  }
  revisarMensajeVacio();
  actualizarTotales();
  actualizarNumeroCarrito();
}

crearFilasProductosCarrito();

/** Actualiza el total de precio y unidades de la página del carrito */
function actualizarTotales() {
  const productos = JSON.parse(localStorage.getItem("bicicletas"));
  let cantidad = 0;
  let precio = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      cantidad += producto.cantidad;
      precio += producto.precio * producto.cantidad;
    });
  }
  cantidadElement.innerText = cantidad;
  precioElement.innerText = `$${precio.toLocaleString()}`;
  if (precio === 0) {
    reiniciarCarrito();
    revisarMensajeVacio();
  }
}

document.getElementById("reiniciar").addEventListener("click", () => {
  contenedorTarjetas.innerHTML = "";
  reiniciarCarrito();
  revisarMensajeVacio();
});

/** Muestra o esconde el mensaje de que no hay nada en el carrito */
function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem("bicicletas"));
  const carritoVacio = !productos || productos.length === 0;
  carritoVacioElement.classList.toggle("escondido", !carritoVacio);
  totalesContainer.classList.toggle("escondido", carritoVacio);
}

/** Funciones auxiliares */
function restarAlCarrito(producto) {
  const productos = JSON.parse(localStorage.getItem("bicicletas"));
  const productoActualizado = productos.find((item) => item.id === producto.id);
  if (productoActualizado && productoActualizado.cantidad > 1) {
    productoActualizado.cantidad--;
  } else {
    eliminarDelCarrito(producto);
  }
  localStorage.setItem("bicicletas", JSON.stringify(productos));
  return productoActualizado ? productoActualizado.cantidad : 0;
}

function agregarAlCarrito(producto) {
  const productos = JSON.parse(localStorage.getItem("bicicletas"));
  const productoActualizado = productos.find((item) => item.id === producto.id);
  if (productoActualizado) {
    productoActualizado.cantidad++;
  }
  localStorage.setItem("bicicletas", JSON.stringify(productos));
  return productoActualizado.cantidad;
}

function eliminarDelCarrito(producto) {
  let productos = JSON.parse(localStorage.getItem("bicicletas"));
  productos = productos.filter((item) => item.id !== producto.id);
  localStorage.setItem("bicicletas", JSON.stringify(productos));
}

function reiniciarCarrito() {
  localStorage.removeItem("bicicletas");
  actualizarNumeroCarrito();
}
