// Datos de los productos
const productos = [
  { id: 1, nombre: "TrailBlazer X1", precio: 1428290, categoria: "montaña", proveedor: "Sport Pro", stock: 15, imagen: "../img/productos/1.jpg" },
  { id: 2, nombre: "Urban Cruiser 3000", precio: 646631, categoria: "ciudad", proveedor: "City Wheels", stock: 25, imagen: "../img/productos/2.jpg" },
  { id: 3, nombre: "Speedster Elite", precio: 668463, categoria: "carretera", proveedor: "Velocity Co.", stock: 10, imagen: "../img/productos/3.jpg" },
  { id: 4, nombre: "Mountain King", precio: 1035996, categoria: "montaña", proveedor: "Sport Pro", stock: 30, imagen: "../img/productos/4.jpg" },
  { id: 5, nombre: "Metro Glide", precio: 849520, categoria: "ciudad", proveedor: "City Wheels", stock: 20, imagen: "../img/productos/5.jpg" },
  { id: 6, nombre: "Road Runner 500", precio: 531586, categoria: "carretera", proveedor: "Velocity Co.", stock: 12, imagen: "../img/productos/6.jpg" },
  { id: 7, nombre: "TrailMaster 4X", precio: 902601, categoria: "montaña", proveedor: "Sport Pro", stock: 18, imagen: "../img/productos/7.jpg" },
  { id: 8, nombre: "City Cruiser V2", precio: 336092, categoria: "ciudad", proveedor: "City Wheels", stock: 22, imagen: "../img/productos/8.jpg" },
  { id: 9, nombre: "Sprint Supreme", precio: 826621, categoria: "carretera", proveedor: "Velocity Co.", stock: 8, imagen: "../img/productos/9.jpg" },
  { id: 10, nombre: "Mountain Beast", precio: 889915, categoria: "montaña", proveedor: "Sport Pro", stock: 16, imagen: "../img/productos/10.jpg" },
  { id: 11, nombre: "Urban Flyer", precio: 1121912, categoria: "ciudad", proveedor: "City Wheels", stock: 30, imagen: "../img/productos/11.jpg" },
  { id: 12, nombre: "Velocity Tourer", precio: 1317685, categoria: "carretera", proveedor: "Velocity Co.", stock: 14, imagen: "../img/productos/12.jpg" },
  { id: 13, nombre: "Eco Ride", precio: 883667, categoria: "ciudad", proveedor: "City Wheels", stock: 28, imagen: "../img/productos/13.jpg" },
  { id: 14, nombre: "Swift Racer", precio: 682195, categoria: "carretera", proveedor: "Velocity Co.", stock: 7, imagen: "../img/productos/14.jpg" },
  { id: 15, nombre: "Rock Master", precio: 506802, categoria: "montaña", proveedor: "Sport Pro", stock: 17, imagen: "../img/productos/15.jpg" },
  { id: 16, nombre: "Eco Explorer", precio: 759832, categoria: "ciudad", proveedor: "Green Wheels", stock: 20, imagen: "../img/productos/16.jpg" },
  { id: 17, nombre: "Speed King", precio: 1046573, categoria: "carretera", proveedor: "Velocity Co.", stock: 9, imagen: "../img/productos/17.jpg" },
  { id: 18, nombre: "Mountain Conqueror", precio: 1204950, categoria: "montaña", proveedor: "Alpine Sports", stock: 13, imagen: "../img/productos/18.jpg" },
  { id: 19, nombre: "Urban Swift", precio: 401239, categoria: "ciudad", proveedor: "City Wheels", stock: 24, imagen: "../img/productos/19.jpg" },
  { id: 20, nombre: "Road Blaster", precio: 1132567, categoria: "carretera", proveedor: "Velocity Co.", stock: 11, imagen: "../img/productos/20.jpg" },
  { id: 21, nombre: "Trail Blazer Pro", precio: 795467, categoria: "montaña", proveedor: "Sport Pro", stock: 15, imagen: "../img/productos/21.jpg" },
  { id: 22, nombre: "City Sprint", precio: 372194, categoria: "ciudad", proveedor: "City Wheels", stock: 26, imagen: "../img/productos/22.jpg" },
  { id: 23, nombre: "Velocity Racer", precio: 1403982, categoria: "carretera", proveedor: "Velocity Co.", stock: 10, imagen: "../img/productos/23.jpg" },
  { id: 24, nombre: "Peak Master", precio: 1098765, categoria: "montaña", proveedor: "Alpine Sports", stock: 19, imagen: "../img/productos/24.jpg" },
  { id: 25, nombre: "Eco Commuter", precio: 659882, categoria: "ciudad", proveedor: "Green Wheels", stock: 21, imagen: "../img/productos/25.jpg" },
  { id: 26, nombre: "Mountain Cruiser", precio: 980412, categoria: "montaña", proveedor: "Sport Pro", stock: 14, imagen: "../img/productos/26.jpg" },
  { id: 27, nombre: "Urban Rider", precio: 739299, categoria: "ciudad", proveedor: "City Wheels", stock: 27, imagen: "../img/productos/27.jpg" },
  { id: 28, nombre: "Speed Chaser", precio: 1278943, categoria: "carretera", proveedor: "Velocity Co.", stock: 8, imagen: "../img/productos/28.jpg" },
  { id: 29, nombre: "Trail Adventurer", precio: 876421, categoria: "montaña", proveedor: "Alpine Sports", stock: 22, imagen: "../img/productos/29.jpg" },
  { id: 30, nombre: "City Explorer", precio: 475902, categoria: "ciudad", proveedor: "Green Wheels", stock: 18, imagen: "../img/productos/30.jpg" },
  { id: 31, nombre: "Casco Pro", precio: 150000, categoria: "suplemento", proveedor: "Safety Gear", stock: 40, imagen: "../img/productos/31.jpg" },
  { id: 32, nombre: "Guantes MTB", precio: 80000, categoria: "suplemento", proveedor: "Mountain Essentials", stock: 50, imagen: "../img/productos/32.jpg" },
  { id: 33, nombre: "Luz Delantera LED", precio: 120000, categoria: "suplemento", proveedor: "Night Riders", stock: 60, imagen: "../img/productos/33.jpg" },
  { id: 34, nombre: "Bomba de Aire Portátil", precio: 50000, categoria: "repuesto", proveedor: "BikeTools", stock: 100, imagen: "../img/productos/34.jpg" },
  { id: 35, nombre: "Cadena de Repuesto", precio: 95000, categoria: "repuesto", proveedor: "Spare Parts Co.", stock: 75, imagen: "../img/productos/35.jpg" },
  { id: 36, nombre: "Asiento Ergonómico", precio: 180000, categoria: "repuesto", proveedor: "Comfort Ride", stock: 30, imagen: "../img/productos/36.jpg" },
  { id: 37, nombre: "Llantas Antipinchazo", precio: 220000, categoria: "repuesto", proveedor: "Tough Wheels", stock: 25, imagen: "../img/productos/37.jpg" },
  { id: 38, nombre: "Botella de Agua Deportiva", precio: 25000, categoria: "suplemento", proveedor: "HydroSports", stock: 150, imagen: "../img/productos/38.jpg" },
  { id: 39, nombre: "Portabicicletas", precio: 350000, categoria: "repuesto", proveedor: "BikeGear", stock: 20, imagen: "../img/productos/39.jpg" },
  { id: 40, nombre: "Juego de Herramientas Multiuso", precio: 110000, categoria: "repuesto", proveedor: "BikeTools", stock: 50, imagen: "../img/productos/40.jpg" }
];

let productosMostrados = 0;
const incremento = 15;

function crearTarjetaProducto(producto) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta-producto');

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio.toLocaleString('es-CO')}</p>
        <p>Categoría: ${producto.categoria}</p>
        <p>Proveedor: ${producto.proveedor}</p>
        <button class="ver-detalle-btn" data-id="${producto.id}">Ver Detalle</button>
    `;

    return tarjeta;
}

function cargarProductos() {
    const productosContainer = document.getElementById('productos-container');

    if (productosMostrados >= productos.length) {
        window.removeEventListener('scroll', manejarScroll);
        return;
    }

    const productosParaMostrar = productos.slice(productosMostrados, productosMostrados + incremento);

    productosParaMostrar.forEach(producto => {
        productosContainer.appendChild(crearTarjetaProducto(producto));
    });

    productosMostrados += incremento;
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('ver-detalle-btn')) {
        const productoId = e.target.getAttribute('data-id');
        const producto = productos.find(p => p.id == productoId);
        mostrarDetalle(producto);
    }
});

function mostrarDetalle(producto) {
    const modal = document.getElementById('detalle-producto');
    const contenidoDetalle = document.getElementById('contenido-detalle');

    contenidoDetalle.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p><strong>Precio:</strong> $${producto.precio.toLocaleString('es-CO')}</p>
        <p><strong>Categoría:</strong> ${producto.categoria}</p>
        <p><strong>Proveedor:</strong> ${producto.proveedor}</p>
        <p><strong>Stock Disponible:</strong> ${producto.stock}</p>
        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" min="1" max="${producto.stock}" value="1">
        <button id="agregar-carrito">Agregar al carrito</button>
    `;

    modal.style.display = 'flex';

    document.querySelector('.cerrar-modal').onclick = function() {
        modal.style.display = 'none';
    };

    document.getElementById('agregar-carrito').onclick = function() {
        agregarAlCarrito(producto);
        modal.style.display = 'none';
    };
}


function agregarAlCarrito(producto) {
    const cantidad = document.getElementById('cantidad').value;

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("La cantidad debe ser un número positivo.");
        return;
    }

    const productoCarrito = {
        ...producto,
        cantidad: parseInt(cantidad)
    };

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const indiceExistente = carrito.findIndex(item => item.id === productoCarrito.id);
    if (indiceExistente > -1) {
        carrito[indiceExistente].cantidad += productoCarrito.cantidad;
    } else {
        carrito.push(productoCarrito);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.nombre}, Added to the cart! 🛒`);
}

document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    window.addEventListener('scroll', manejarScroll);
});

function manejarScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        cargarProductos();
    }
}

document.getElementById('cancelar-compra').onclick = function() {
    window.location.href = '../html/registry.html';
};

document.getElementById('completar-compra').onclick = function() {
    window.location.href = '../html/cart.html';
};

document.getElementById('filtrar-btn').onclick = function() {
    const categoriaSeleccionada = document.getElementById('filtro-categoria').value.toLowerCase();
    const nombreIngresado = document.getElementById('filtro-nombre').value.toLowerCase();

    let productosFiltrados = productos;

    if (categoriaSeleccionada) {
        productosFiltrados = productosFiltrados.filter(producto => producto.categoria.toLowerCase() === categoriaSeleccionada);
    }

    if (nombreIngresado) {
        productosFiltrados = productosFiltrados.filter(producto => producto.nombre.toLowerCase().includes(nombreIngresado));
    }

    mostrarProductosFiltrados(productosFiltrados);
};

function mostrarProductosFiltrados(productosFiltrados) {
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = '';

    if (productosFiltrados.length === 0) {
        const mensaje = document.createElement('p');
        mensaje.textContent = 'No se encontraron productos para los filtros seleccionados.';
        mensaje.style.textAlign = 'center';
        productosContainer.appendChild(mensaje);
        return;
    }

    productosFiltrados.forEach(producto => {
        productosContainer.appendChild(crearTarjetaProducto(producto));
    });
}

document.getElementById('limpiar-filtros').onclick = function() {
    document.getElementById('filtro-categoria').value = '';
    document.getElementById('filtro-nombre').value = '';
    productosMostrados = 0; 
    cargarProductos(); 
};


function cargarProductos() {
    const productosContainer = document.getElementById('productos-container');

    if (productosMostrados >= productos.length) {
        if (!document.getElementById('mensaje-fin-productos')) {
            const mensajeFinal = document.createElement('div');
            mensajeFinal.id = 'mensaje-fin-productos';
            mensajeFinal.textContent = 'No hay más productos para cargar.';
            mensajeFinal.style.textAlign = 'center';
            mensajeFinal.style.fontSize = '1.5rem';
            mensajeFinal.style.color = '#333';
            mensajeFinal.style.padding = '15px';
            mensajeFinal.style.marginTop = '20px';

            productosContainer.appendChild(mensajeFinal);
        }
        window.removeEventListener('scroll', manejarScroll);
        return;
    }

    const productosParaMostrar = productos.slice(productosMostrados, productosMostrados + incremento);

    productosParaMostrar.forEach(producto => {
        productosContainer.appendChild(crearTarjetaProducto(producto));
    });

    productosMostrados += incremento;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('completar-compra').innerHTML = `
        <img src="../img/iconos/shopping-cart.png" alt="Carrito" class="icono-carrito">
        Completar Compra
    `;
});
