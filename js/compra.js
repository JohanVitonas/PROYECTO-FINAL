document.addEventListener("DOMContentLoaded", () => {
    const comprarBtn = document.getElementById("comprar");
    const modal = document.getElementById("modal-compra");
    const cerrarModal = document.getElementById("cerrar-modal");
    const formTarjeta = document.getElementById("form-tarjeta");

    comprarBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    cerrarModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    formTarjeta.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const numero = document.getElementById("numero").value.trim();
        const expiracion = document.getElementById("expiracion").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        let isValid = true;

        // Limpiar mensajes de error
        document.querySelectorAll(".error").forEach(error => error.style.display = "none");

        if (nombre === "") {
            mostrarError("error-nombre", "El nombre en la tarjeta es obligatorio.");
            isValid = false;
        }

        if (!/^\d{16}$/.test(numero)) {
            mostrarError("error-numero", "El número de tarjeta debe tener 16 dígitos.");
            isValid = false;
        }

        if (!/^\d{2}\/\d{2}$/.test(expiracion)) {
            mostrarError("error-expiracion", "Formato inválido. Ejemplo: MM/AA.");
            isValid = false;
        }

        if (!/^\d{3}$/.test(cvv)) {
            mostrarError("error-cvv", "El CVV debe tener 3 dígitos.");
            isValid = false;
        }

        if (isValid) {
            alert("Compra realizada con éxito");
            modal.style.display = "none";
        }
    });

    function mostrarError(id, mensaje) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = mensaje;
        errorElement.style.display = "block";
    }
});
