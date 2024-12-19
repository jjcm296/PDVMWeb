async function mostrarAgregarProducto() {
    await cargarCategorias();
    await contenidoFiltrarProductos();
    document.getElementById('inputAgregarProducto').style.display = 'block';
}
function cancelarAgregarProducto() {
    document.getElementById('inputAgregarProducto').style.display = 'none';

}
async function mostrarSeccionCategorias() {
    await mostrarCategorias();
    document.getElementById('inputAgregarProducto').style.display = 'none';
    document.getElementById('productos').style.display = 'none';
    document.getElementById('Scategoria').style.display = 'block';
}

async function  mostrarApartadoProductos() {
    await mostraProductos();
    document.getElementById('inputAgregarCategoria').style.display = 'none';
    document.getElementById('Scategoria').style.display = 'none';
    document.getElementById('productos').style.display = 'block';
}
function  mostrarAgregarCategoria() {
    document.getElementById('inputAgregarCategoria').style.display = 'block'
}
function cancelarAgregarCategoria() {
    document.getElementById('inputAgregarCategoria').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", async function () {
    await obtenerProductos();
    await mostraProductos();
    contenidoFiltrarProductos();
    contenidoFiltrarCategoria();

    // Mostrar la sección PDV por defecto al cargar la página
        document.getElementById('pdv').style.display = 'block';

    // Funcionalidad para el menú de navegación
    const links = document.querySelectorAll('.menu-link');

    links.forEach(link => {

        link.addEventListener('click', function (event) {

            event.preventDefault();

            const targetId = link.getAttribute('data-target');


            // Ocultar todas las secciones
            const allSections = document.querySelectorAll('.section');
            allSections.forEach(section => {
                section.style.display = 'none'; // Oculta todas las secciones
            });

            // Mostrar la sección correspondiente
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block'; // Muestra la sección seleccionada
                document.getElementById('Scategoria').style.display = 'none';
            }
        });
    });


    // Funcionalidad para eliminar todos los productos del carrito
    document.querySelector('.eliminarCarrito').addEventListener('click', function () {
        const cartTableBody = document.querySelector('.carrito-scroll table tbody'); // Selecciona el cuerpo de la tabla del carrito
        cartTableBody.innerHTML = ''; // Elimina todo el contenido
    });

    // Funcionalidad para aceptar la venta
    document.querySelector('.accept-sale-btn').addEventListener('click', function () {
        const paymentInput = document.querySelector('#payment');
        const totalAmount = document.querySelector('.total-amount');

        const paymentAmount = parseFloat(paymentInput.value);
        const totalAmountValue = parseFloat(totalAmount.textContent.replace('$', '').replace(',', ''));

        if (paymentAmount >= totalAmountValue) {
            alert('Venta Aceptada!');
            paymentInput.value = '';
            totalAmount.textContent = '$0.00';
        } else {
            alert('El monto ingresado es insuficiente.');
        }
    });

    // Funcionalidad para eliminar productos individuales
    const eliminarProductoBtns = document.querySelectorAll('.eliminaProducto');

    eliminarProductoBtns.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr'); // Encuentra la fila más cercana
            if (row) {
                row.remove(); // Elimina la fila correspondiente
            }
        });
    });
})

function contenidoFiltrarProductos () {

    const filtror = ['A-Z', 'Z-A', 'Categoria ↓', 'Categoria ↑', 'Marca ↓', 'Marca ↑', 'Código ↓', 'Código ↑'];

    const selectProductos = document.getElementById('SelectFiltrarProductos');
    filtror.forEach(filtro => {
        const option = document.createElement('option');
        option.value = filtro;
        option.textContent = filtro;
        selectProductos.appendChild(option);
    });
}

function contenidoFiltrarCategoria () {
    const filtro = ['A-Z', 'Z-A'];

    const selectProductos = document.getElementById('SelectFiltrarCategorias');
    filtro.forEach(filtrar => {
        const option = document.createElement('option');
        option.value = filtrar;
        option.textContent = filtrar;
        selectProductos.appendChild(option);
    });
}
