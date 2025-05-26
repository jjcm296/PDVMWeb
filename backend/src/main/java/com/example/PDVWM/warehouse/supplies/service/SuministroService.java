package com.example.PDVWM.warehouse.supplies.service;

import com.example.PDVWM.warehouse.inventory.model.Inventario;
import com.example.PDVWM.warehouse.inventory.repository.InventarioRepository;
import com.example.PDVWM.warehouse.productManagement.model.Producto;
import com.example.PDVWM.warehouse.productManagement.repository.ProductoRepository;
import com.example.PDVWM.warehouse.supplies.model.SuministroPorUnidad;
import com.example.PDVWM.warehouse.supplies.repository.SuministroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.Date;

@Service
public class SuministroService {

    @Autowired
    private SuministroRepository suministroRepo;

    @Autowired
    private ProductoRepository productoRepo;

    @Autowired
    private InventarioRepository inventarioRepo;

    public boolean registrarSuministro(Long productoId, int cantidad) {
        Producto producto = productoRepo.findById(productoId).orElse(null);
        if (producto == null) return false;

        Inventario inventario = inventarioRepo.findByProducto_IdProducto(productoId);
        if (inventario == null) return false;

        // Crear suministro
        SuministroPorUnidad suministro = new SuministroPorUnidad();
        suministro.setProductoSuministrado(producto);
        suministro.setCantidadSuministrada(cantidad);
        suministro.setFechaSuministro(new Date());
        suministro.setHoraSuministro(LocalTime.now());

        suministroRepo.save(suministro);

        // Actualizar inventario
        inventario.setStockActual(inventario.getStockActual() + cantidad);
        inventarioRepo.save(inventario);

        return true;
    }
}
