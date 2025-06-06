package com.example.PDVWM.warehouse.productManagement.service;

import com.example.PDVWM.warehouse.inventory.model.Inventario;
import com.example.PDVWM.warehouse.inventory.repository.InventarioRepository;
import com.example.PDVWM.warehouse.productManagement.dto.ProductoConStockDTO;
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
        Producto saved = productoRepository.saveAndFlush(producto);
        System.out.println("✅ Producto guardado con ID: " + saved.getIdProducto());

        try {
            Inventario inventario = new Inventario();
            inventario.setProducto(saved);
            inventario.setStockActual(0);
            inventario.setStockMinimo(10);

            inventarioRepository.save(inventario);
            System.out.println("✅ Inventario creado para producto ID: " + saved.getIdProducto());
        } catch (Exception e) {
            System.err.println("❌ Error al crear inventario: " + e.getMessage());
            e.printStackTrace();
        }
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

    public List<ProductoConStockDTO> getProductosConStock() {
        List<Producto> productos = productoRepository.findAll();

        return productos.stream().map(producto -> {
            int stock = 0;
            Inventario inventario = inventarioRepository.findByProducto_IdProducto(producto.getIdProducto());
            if (inventario != null) {
                stock = inventario.getStockActual();
            }

            return new ProductoConStockDTO(
                    producto.getIdProducto(),
                    producto.getNombre(),
                    stock
            );
        }).toList();
    }
}
