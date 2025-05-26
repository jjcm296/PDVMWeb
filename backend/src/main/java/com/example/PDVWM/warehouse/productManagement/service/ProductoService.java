package com.example.PDVWM.warehouse.productManagement.service;

import com.example.PDVWM.warehouse.inventory.model.Inventario;
import com.example.PDVWM.warehouse.inventory.repository.InventarioRepository;
import com.example.PDVWM.warehouse.productManagement.model.Producto;
import com.example.PDVWM.warehouse.productManagement.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class ProductoService {

    private final ProductoRepository productoRepository;
    private final InventarioRepository inventarioRepository;

    @Autowired
    public ProductoService(ProductoRepository productoRepository,
                           InventarioRepository inventarioRepository) {
        this.productoRepository = productoRepository;
        this.inventarioRepository = inventarioRepository;
    }

    public List<Producto> getAllProductos() {
        return productoRepository.findAll();
    }

    public Producto saveProducto(Producto producto) {
        Producto saved = productoRepository.save(producto);

        // Crear inventario asociado automáticamente
        Inventario inventario = new Inventario();
        inventario.setProducto(saved);
        inventario.setStockActual(0);
        inventario.setStockMinimo(10);

        inventarioRepository.save(inventario);

        return saved;
    }

    public Producto getProductoById(Long id) {
        return productoRepository.findById(id).orElse(null);
    }

    public void deleteProducto(Long id) {
        productoRepository.deleteById(id);
    }

    public Producto findByBarCode(String barCode) {
        return productoRepository.findByCodigo(barCode);
    }

    public List<Producto> findSortedProductos(String sortField, String order) {
        List<String> camposPermitidos = Arrays.asList("nombre", "marca", "idProducto", "categoria.nombre");

        if (sortField == null || sortField.isEmpty() || !camposPermitidos.contains(sortField)) {
            return productoRepository.findAll();
        }

        Sort.Direction direction = order.equalsIgnoreCase("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
        return productoRepository.findAll(Sort.by(direction, sortField));
    }
}
