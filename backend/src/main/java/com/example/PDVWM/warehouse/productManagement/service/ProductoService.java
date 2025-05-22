package com.example.PDVWM.warehouse.productManagement.service;

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

    @Autowired
    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public List<Producto> getAllProductos() {
        return productoRepository.findAll();
    }

    public Producto saveProducto(Producto producto) {
        return productoRepository.save(producto);
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
