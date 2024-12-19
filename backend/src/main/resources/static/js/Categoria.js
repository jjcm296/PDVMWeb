let categorias = [];
let productos = [];

async function obtenerCategorias() {
    try {
        const respuesta = await fetch('/api/categorias/CategoriasOrdenadasPorNombre');

        if (!respuesta.ok) throw new Error('Error al obtener las categorías');

        categorias = await respuesta.json();

    } catch (error) {
        console.error('Hubo un problema al obtener las categorías:', error);
    }
}

async function obtenerProductos() {
    try {
        const respuesta = await fetch('/productos/ProductosOrdenadosPorNombre');

        if (!respuesta.ok) throw new Error('Error al obtener los productos');

        productos = await respuesta.json();
    } catch (error) {
        console.error('Hubo un problema al obtener los productos', error);
    }
}
// CRUD Categorias
function agregarCategoria() {
    let nombreCategoria = document.getElementById('nombreCategoria').value;

    nombreCategoria = pascalCase(nombreCategoria);

    if (nombreCategoria.trim() === "") {
        alert("El nombre de la categoria no puede estar vacio.");
        return;
    }
    fetch('/api/categorias/guardar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre: nombreCategoria })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al guardar la categoría');
            }
            return response.json();
        })
        .then(async data => {
            alert('Categoría guardada correctamente');
            await mostrarCategorias();
            document.getElementById('formAgregarCategoria').reset();
            console.log(data);
        })
        .catch(error => {
            alert('Hubo un error al guardar la categoría');
            console.log(error);
        });
}

async function mostrarCategorias() {

    const tbody = document.getElementById('tablaCategorias');
    tbody.innerHTML = "";


    var number = 1;

    categorias.forEach(categoria => {
        const row = document.createElement('tr');

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = categoria.nombre;
        celdaNombre.id = 'celdaNombre' + number;

        const div = document.createElement('div');
        div.id = 'div' + number;
        div.className = 'div';

        const botonEditar = document.createElement('button');
        botonEditar.textContent = 'Editar';
        botonEditar.id = 'botonEditarCategoria' + number;
        botonEditar.className = 'botonEditarCategoria';

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.id = 'botonEliminarCategoria' + number;
        botonEliminar.className = 'botonEliminarCategoria';

        div.appendChild(botonEditar);
        div.appendChild(botonEliminar);

        celdaNombre.appendChild(div);

        row.appendChild(celdaNombre);
        tbody.appendChild(row);
        number++;
    });
}

//Bueno

async function ordenarCategorias() {
    const filtrar = document.getElementById('SelectFiltrarCategorias').value;

    switch (filtrar) {
        case 'A-Z':
            await obtenerCategorias();
            await mostrarCategorias();
            break;
        case 'Z-A':
            let respuesta = await fetch('/api/categorias/CategoriasOrdenadasPorNombreDesc');

            if (!respuesta.ok) {console.log("categorias no encontrada");}

            categorias = await respuesta.json();
            await mostrarCategorias();
            break;
    }
}

//CRUD Productos
async function crearProducto() {

    const nombre = pascalCase(document.getElementById('nombre').value.trim());
    const descripcion = pascalCase(document.getElementById('descripcion').value.trim());
    const precio = parseFloat(document.getElementById('precio').value);
    const codigoBarra = document.getElementById('codigoBarras').value.trim();
    const marca = pascalCase(document.getElementById('marca').value.trim());
    const idCategoria = document.getElementById('Categorias').value;

    if (!nombre || isNaN(precio) || !codigoBarra || !marca) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    const productoData = {
        nombre,
        descripcion,
        precio,
        codigoBarra,
        marca,
        categoria: {idCategoria}
    };

    fetch(`/productos`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(productoData)
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message);
                });
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('formAgregarProducto').reset();
            mostraProductos();
            alert('Producto agregado con éxito');
        })
        .catch(error => {
            console.error('Error al agregar el producto:', error);
            alert(`Hubo un problema al agregar el producto: ${error.message}`);
        });
}

async function mostraProductos () {

    const tbody = document.getElementById('tablaProducto');
    tbody.innerHTML = "";

    productos.forEach(producto => {
        const fila = document.createElement('tr');

        const celdaId = document.createElement('td');
        celdaId.textContent = producto.idProducto;
        fila.appendChild(celdaId);

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = producto.nombre;
        fila.appendChild(celdaNombre);

        const celdaCodigoBarra = document.createElement('td');
        celdaCodigoBarra.textContent = producto.codigoBarra;
        fila.appendChild(celdaCodigoBarra);

        const celdaPrecio = document.createElement('td');
        celdaPrecio.textContent = '$' + parseFloat(producto.precio).toFixed(2);
        fila.appendChild(celdaPrecio);

        const celdaCategoria = document.createElement('td');
        celdaCategoria.textContent = producto.categoria.nombre;
        fila.appendChild(celdaCategoria);

        const celdaMarca = document.createElement('td');
        celdaMarca.textContent = producto.marca;
        fila.appendChild(celdaMarca);

        tbody.appendChild(fila);
    });
}

async function ordenarProductos() {
    const filtrar = document.getElementById('SelectFiltrarProductos').value;
    switch (filtrar) {
        case 'A-Z':
            await obtenerProductos();
            await mostraProductos();
            break;
        case 'Z-A':
            productos = await (await fetch('/productos/ProductosOrdenadosPorNombreDescendente')).json();
            await mostraProductos();
            break;
        case 'Categoria ↓':
            productos = await (await fetch('/productos/ProductosOrdenadosPorCategoria')).json();
            await mostraProductos();
            break;
        case 'Categoria ↑':
            productos = await (await fetch('/productos/ProductosOrdenadosPorCategoriaDescendiente')).json();
            await mostraProductos();
            break;
        case 'Marca ↓':
            productos = await (await fetch('/productos/OrdenadosPorMarca')).json();
            await mostraProductos();
            break;
        case 'Marca ↑':
            productos = await( await fetch('/productos/OrdenadosPorMarcaDescendiente')).json();
            await mostraProductos();
            break;
        case 'Código ↓':
            productos = await (await fetch('/productos/OrdenadosPorId')).json();
            await mostraProductos();
            break;
        case 'Código ↑':
            productos = await (await fetch('/productos/OrdenadosPorIdDesc')).json();
            await mostraProductos();
            break;
    }
}

async function cargarCategorias() {
    await obtenerCategorias();

    const selectCategoria = document.getElementById('Categorias');
    selectCategoria.innerHTML = '<option value="">Selecciona una categoría</option>';

    categorias.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria.idCategoria;
        option.textContent = categoria.nombre;
        selectCategoria.appendChild(option);
    });
}

function pascalCase (nombre) {
    return nombre
        .replace(/([^\w\d]+)/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}