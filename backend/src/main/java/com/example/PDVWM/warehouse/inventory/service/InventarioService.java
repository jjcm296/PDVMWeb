package com.example.PDVWM.warehouse.inventory.service;

import com.example.PDVWM.warehouse.inventory.model.Inventario;
import com.example.PDVWM.warehouse.inventory.repository.InventarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InventarioService {
    @Autowired
    private InventarioRepository inventarioRepo;

    public boolean suministrar(Long productoId, int cantidad) {
        Inventario inventario = inventarioRepo.findByProducto_IdProducto(productoId);
        if (inventario == null) return false;

        inventario.setStockActual(inventario.getStockActual() + cantidad);
        inventarioRepo.save(inventario);
        return true;
    }

}
