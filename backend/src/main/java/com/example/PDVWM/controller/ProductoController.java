package com.example.PDVWM.controller;

import com.example.PDVWM.model.Categoria;
import com.example.PDVWM.model.Producto;
import com.example.PDVWM.repository.CategoriaRepository;
import com.example.PDVWM.repository.ProductoRepository;
import com.example.PDVWM.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Autowired
    private ProductoRepository productoRepository;

    // Crear un nuevo producto
    @PostMapping
    public Producto createProducto(@RequestBody Producto producto) {
        // Buscar la categoría por idCategoria
        Categoria categoria = categoriaRepository.findById(producto.getCategoria().getIdCategoria()).orElse(null);
        if (categoria != null) {
            producto.setCategoria(categoria);
            return productoRepository.save(producto);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoría no encontrada");
        }
    }

    //Metodos para obtener un producto por código de barras
    @GetMapping("/productoPorCodigoBarra")
    public Producto getProductByBarCode(@RequestBody String barCode) {
        return productoService.findByBarCode(barCode);
    }

    // Métodos para obetener los productos
    @GetMapping("/ProductosOrdenadosPorNombre")
    public List<Producto> getAllProductosByNameAsc() {
        return productoService.findAllByNameAsc();
    }

    @GetMapping("/ProductosOrdenadosPorNombreDescendente")
    public List<Producto> getAllProductosByNameDesc() {
        return productoService.findAllByNameDesc();
    }

    @GetMapping("/ProductosOrdenadosPorCategoria")
    public List<Producto> getAllProductosByCategoria() {
        return productoService.findAllByCategory();
    }

    @GetMapping("/ProductosOrdenadosPorCategoriaDescendiente")
    public List<Producto> getAllProductosByCategoriaDesc() {
        return productoService.findAllByCategoryDesc();
    }

    @GetMapping("/OrdenadosPorMarca")
    public List<Producto> getAllProductosByBrand() {
        return productoService.findAllByBrand();
    }

    @GetMapping("/OrdenadosPorMarcaDescendiente")
    public List<Producto> getAllProductosByBrandDesc() {
        return productoService.findAllByBrandDesc();
    }

    @GetMapping("/OrdenadosPorId")
    public List<Producto> getAllProductosById() {
        return productoService.findAllById();
    }

    @GetMapping("/OrdenadosPorIdDesc")
    public List<Producto> getAllProductosByIdDesc() {
        return productoService.findAllByProductIdDesc();
    }
}
