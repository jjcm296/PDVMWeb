package com.example.PDVWM.warehouse.productManagement.controller;

import com.example.PDVWM.warehouse.productManagement.model.Categoria;
import com.example.PDVWM.warehouse.productManagement.model.Producto;
import com.example.PDVWM.warehouse.productManagement.repository.CategoriaRepository;
import com.example.PDVWM.warehouse.productManagement.service.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    private final ProductoService productoService;
    private final CategoriaRepository categoriaRepository;

    @Autowired
    public ProductoController(ProductoService productoService, CategoriaRepository categoriaRepository) {
        this.productoService = productoService;
        this.categoriaRepository = categoriaRepository;
    }

    // Crear producto
    @PostMapping
    public Producto createProducto(@RequestBody Producto producto) {
        Categoria categoria = categoriaRepository.findById(producto.getCategoria().getIdCategoria())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoría no encontrada"));

        producto.setCategoria(categoria);
        return productoService.saveProducto(producto);
    }

    // Obtener todos los productos (con ordenamiento opcional)
    @GetMapping
    public List<Producto> getProductos(
            @RequestParam(required = false) String sort,
            @RequestParam(defaultValue = "asc") String order
    ) {
        return productoService.findSortedProductos(sort, order);
    }

    // Buscar por código de barras
    @GetMapping("/barcode/{codigo}")
    public Producto getProductByBarCode(@PathVariable String codigo) {
        return productoService.findByBarCode(codigo);
    }

    // Obtener producto por ID
    @GetMapping("/{id}")
    public Producto getProductoById(@PathVariable Long id) {
        Producto producto = productoService.getProductoById(id);
        if (producto == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Producto no encontrado");
        }
        return producto;
    }

    // Eliminar producto por ID
    @DeleteMapping("/{id}")
    public void deleteProducto(@PathVariable Long id) {
        Producto producto = productoService.getProductoById(id);
        if (producto == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Producto no encontrado");
        }
        productoService.deleteProducto(id);
    }
}
