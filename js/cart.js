// Función para cargar productos del carrito desde localStorage y mostrarlos en la tabla
function cargarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const tbody = document.querySelector('.tabla-carrito tbody');
  const totalPrecioElement = document.getElementById('total-precio');
  let totalPrecio = 0;

  tbody.innerHTML = ''; // Limpiar contenido previo

  carrito.forEach(producto => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
          <td><img src="${producto.imagen}" alt="${producto.nombre}" style="width: 50px; height: auto;"></td>
          <td>${producto.nombre}</td>
          <td>$${producto.precio.toLocaleString('es-CO')}</td>
          <td>${producto.cantidad}</td>
          <td><button class="eliminar-btn" data-id="${producto.id}">🗑️</button></td>
      `;

      tbody.appendChild(fila);

      totalPrecio += producto.precio * producto.cantidad;
  });

  // Verificar si se incluye el costo de domicilio
  const checkboxDomicilio = document.getElementById('checkbox-domicilio');
  checkboxDomicilio.addEventListener('change', function() {
      if (this.checked) {
          totalPrecio += 15000;
      } else {
          totalPrecio -= 15000;
      }
      totalPrecioElement.textContent = `$${totalPrecio.toLocaleString('es-CO')}`;
  });

  totalPrecioElement.textContent = `$${totalPrecio.toLocaleString('es-CO')}`;
}

// Función para eliminar un producto del carrito
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('eliminar-btn')) {
      const productoId = e.target.getAttribute('data-id');
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

      carrito = carrito.filter(producto => producto.id != productoId);

      localStorage.setItem('carrito', JSON.stringify(carrito));
      cargarCarrito(); // Recargar la tabla
      alert('Producto eliminado del carrito.');
  }
});

// Función para limpiar campos de pago
function limpiarCampos() {
  document.getElementById('tarjeta').value = '';
  document.getElementById('fecha-exp').value = '';
  document.getElementById('codigo-seguridad').value = '';
  document.getElementById('tipo-tarjeta').value = 'MasterCard';
  document.getElementById('pais-emision').value = 'Colombia';
  document.getElementById('nombre-titular').value = '';
}

// Función para confirmar la compra
document.getElementById('completar-compra').onclick = function() {
  alert('¡Compra completada exitosamente! Gracias por su compra.');
  localStorage.removeItem('carrito'); // Limpiar el carrito después de la compra
  cargarCarrito(); // Recargar la tabla para que quede vacía
};

// Inicializar la carga del carrito al cargar la página
document.addEventListener('DOMContentLoaded', cargarCarrito);
