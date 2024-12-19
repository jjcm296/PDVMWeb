function mostrarProductosInventario () {

    const tablaInventario = document.getElementById('tablaInventario');
    tablaInventario.innerHTML = "";

    productos.forEach(producto => {
        const fila = document.createElement('tr');

        const celdaProducto = document.createElement('td');
        celdaProducto.textContent = producto.nombre;
        fila.appendChild(celdaProducto);

        const celdaCodigoBarras = document.createElement('td');
        celdaCodigoBarras.textContent = producto.codigoBarra;
        fila.appendChild(celdaCodigoBarras);

        const celdaVendido = document.createElement('td');
        celdaVendido.textContent = "20";
        fila.appendChild(celdaVendido);

        const celdaSuministro = document.createElement('td');
        celdaSuministro.textContent = "20";
        fila.appendChild(celdaSuministro);

        const celdaStock = document.createElement('td');
        celdaStock.textContent = "20";
        fila.appendChild(celdaStock);

        tablaInventario.appendChild(fila);
    });
}