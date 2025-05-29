package com.example.PDVWM.warehouse.pdv.service;

import com.example.PDVWM.warehouse.inventory.model.Inventario;
import com.example.PDVWM.warehouse.inventory.repository.InventarioRepository;
import com.example.PDVWM.warehouse.pdv.dto.VentaRequestDTO;
import com.example.PDVWM.warehouse.pdv.model.Venta;
import com.example.PDVWM.warehouse.pdv.repository.VentaRepository;
import com.example.PDVWM.warehouse.productManagement.model.Producto;
import com.example.PDVWM.warehouse.productManagement.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
public class VentaService {

    private final VentaRepository ventaRepository;
    private final ProductoRepository productoRepository;
    private final InventarioRepository inventarioRepository;

    public VentaService(VentaRepository ventaRepository,
                        ProductoRepository productoRepository,
                        InventarioRepository inventarioRepository) {
        this.ventaRepository = ventaRepository;
        this.productoRepository = productoRepository;
        this.inventarioRepository = inventarioRepository;
    }

    public Venta crearVenta(VentaRequestDTO request) {
        Map<Producto, Integer> productosVendidos = new HashMap<>();
        double totalCalculado = 0;

        for (VentaRequestDTO.ProductoCantidad item : request.getProductos()) {
            Producto producto = productoRepository.findById(item.getIdProducto())
                    .orElseThrow(() -> new RuntimeException("Producto no encontrado con ID: " + item.getIdProducto()));

            Inventario inventario = inventarioRepository.findByProducto_IdProducto(producto.getIdProducto());
            if (inventario == null) {
                throw new RuntimeException("No se encontró inventario para el producto: " + producto.getNombre());
            }

            if (inventario.getStockActual() < item.getCantidad()) {
                throw new RuntimeException("Stock insuficiente para el producto: " + producto.getNombre());
            }

            // Disminuir stock
            inventario.setStockActual(inventario.getStockActual() - item.getCantidad());
            inventarioRepository.save(inventario);

            productosVendidos.put(producto, item.getCantidad());
            totalCalculado += producto.getPrecio() * item.getCantidad();
        }

        Venta venta = new Venta();
        venta.setFechaHora(LocalDateTime.now());
        venta.setProductosVendidos(productosVendidos);
        venta.setImporte(totalCalculado);
        venta.setImporteRecibido(request.getImporteRecibido());
        venta.setCambio(request.getImporteRecibido() - totalCalculado);

        int total = productosVendidos.values().stream()
                .mapToInt(Integer::intValue)
                .sum();

        venta.setTotalProductosVendidos(total);

        return ventaRepository.save(venta);
    }
}
