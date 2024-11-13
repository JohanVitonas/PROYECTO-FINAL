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
          totalPrecio += 15000; // Costo de domicilio de $15,000
      } else {
          totalPrecio -= 15000;
      }
      totalPrecioElement.textContent = `$${totalPrecio.toLocaleString('es-CO')}`;
  });

  totalPrecioElement.textContent = `$${totalPrecio.toLocaleString('es-CO')}`;
}

// Función para validar los datos de la tarjeta de crédito y otras condiciones de la compra
function validarDatosTarjeta() {
  const tarjeta = document.getElementById('tarjeta').value.trim();
  const fechaExp = document.getElementById('fecha-exp').value.trim();
  const codigoSeguridad = document.getElementById('codigo-seguridad').value.trim();
  const nombreTitular = document.getElementById('nombre-titular').value.trim();

  // Expresión regular para validar la fecha en formato MM/AA
  const fechaExpRegExp = /^(0[1-9]|1[0-2])\/\d{2}$/;

  if (!tarjeta || tarjeta.length < 13 || tarjeta.length > 19 || isNaN(tarjeta)) {
      alert('El número de tarjeta debe tener entre 13 y 19 dígitos numéricos.');
      return false;
  }

  if (!fechaExp || !fechaExpRegExp.test(fechaExp)) {
      alert('La fecha de expiración debe estar en el formato MM/AA.');
      return false;
  }

  if (!codigoSeguridad || codigoSeguridad.length !== 3 || isNaN(codigoSeguridad)) {
      alert('El código de seguridad debe tener exactamente 3 dígitos.');
      return false;
  }

  if (!nombreTitular) {
      alert('El nombre del titular es obligatorio.');
      return false;
  }

  // Validar que la cantidad de productos no exceda 20
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  if (carrito.length > 20) {
      alert('El número de productos en el carrito no puede exceder los 20.');
      return false;
  }

  // Validar que el presupuesto no se sobrepase (ejemplo: $1,000,000)
  const totalPrecio = carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  if (totalPrecio > 1000000) {
      alert('El total del carrito excede el presupuesto permitido.');
      return false;
  }

  return true;
}

// Función para confirmar la compra con promesa
document.getElementById('completar-compra').onclick = function() {
  if (validarDatosTarjeta()) {
      this.disabled = true; // Deshabilitar el botón para evitar múltiples envíos

      new Promise((resolve, reject) => {
          // Simular tiempo de respuesta aleatorio entre 2 a 3 segundos
          const tiempo = Math.random() * (3000 - 2000) + 2000;
          setTimeout(() => {
              // Simular éxito de la transacción
              const exito = Math.random() > 0.2; // 80% de probabilidad de éxito
              if (exito) {
                  resolve('Pago realizado con éxito.');
              } else {
                  reject('Hubo un error al procesar el pago.');
              }
          }, tiempo);
      })
      .then(mensaje => {
          alert(mensaje);
          localStorage.removeItem('carrito'); // Limpiar el carrito después de la compra
          cargarCarrito(); // Recargar la tabla para que quede vacía
          window.location.href = '../html/index.html'; // Redirigir al usuario a la página inicial
      })
      .catch(error => {
          alert(error);
          this.disabled = false; // Rehabilitar el botón si hay un error
      });
  }
};

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

// Inicializar la carga del carrito al cargar la página
document.addEventListener('DOMContentLoaded', cargarCarrito);

// Función para alternar la visibilidad del código de seguridad
function alternarVisibilidad() {
  const codigoSeguridadInput = document.getElementById('codigo-seguridad');
  const icono = document.querySelector('.btn-ocultar');

  if (codigoSeguridadInput.type === 'password') {
      codigoSeguridadInput.type = 'text';
      icono.textContent = '🙈'; // Cambiar el ícono a uno de "ocultar"
  } else {
      codigoSeguridadInput.type = 'password';
      icono.textContent = '👁️'; // Cambiar el ícono a uno de "mostrar"
  }
}
