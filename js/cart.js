function cargarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const tbody = document.querySelector('.tabla-carrito tbody');
  const totalPrecioElement = document.getElementById('total-precio');
  let totalPrecio = 0;

  tbody.innerHTML = ''; 

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

function validarDatosTarjeta() {
  const tarjeta = document.getElementById('tarjeta').value.trim();
  const fechaExp = document.getElementById('fecha-exp').value.trim();
  const codigoSeguridad = document.getElementById('codigo-seguridad').value.trim();
  const nombreTitular = document.getElementById('nombre-titular').value.trim();

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

  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  if (carrito.length > 20) {
      alert('El número de productos en el carrito no puede exceder los 20.');
      return false;
  }

  const totalPrecio = carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  if (totalPrecio > 1000000) {
      alert('El total del carrito excede el presupuesto permitido.');
      return false;
  }

  return true;
}

document.getElementById('completar-compra').onclick = function() {
  if (validarDatosTarjeta()) {
      this.disabled = true; 

      new Promise((resolve, reject) => {
          const tiempo = Math.random() * (3000 - 2000) + 2000;
          setTimeout(() => {
              const exito = Math.random() > 0.2; 
              if (exito) {
                  resolve('Pago realizado con éxito.');
              } else {
                  reject('Hubo un error al procesar el pago.');
              }
          }, tiempo);
      })
      .then(mensaje => {
          alert(mensaje);
          localStorage.removeItem('carrito'); 
          cargarCarrito(); 
          window.location.href = '../html/index.html'; 
      })
      .catch(error => {
          alert(error);
          this.disabled = false; 
      });
  }
};

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('eliminar-btn')) {
      const productoId = e.target.getAttribute('data-id');
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

      carrito = carrito.filter(producto => producto.id != productoId);

      localStorage.setItem('carrito', JSON.stringify(carrito));
      cargarCarrito(); 
      alert('Producto eliminado del carrito.');
  }
});

function limpiarCampos() {
  document.getElementById('tarjeta').value = '';
  document.getElementById('fecha-exp').value = '';
  document.getElementById('codigo-seguridad').value = '';
  document.getElementById('tipo-tarjeta').value = 'MasterCard';
  document.getElementById('pais-emision').value = 'Colombia';
  document.getElementById('nombre-titular').value = '';
}

document.addEventListener('DOMContentLoaded', cargarCarrito);

function alternarVisibilidad() {
  const codigoSeguridadInput = document.getElementById('codigo-seguridad');
  const icono = document.querySelector('.btn-ocultar');

  if (codigoSeguridadInput.type === 'password') {
      codigoSeguridadInput.type = 'text';
      icono.textContent = '🙈'; 
  } else {
      codigoSeguridadInput.type = 'password';
      icono.textContent = '👁️'; 
  }
}
