package com.example.PDVWM.warehouse.inventory.service;

import com.example.PDVWM.warehouse.inventory.model.Inventario;
import com.example.PDVWM.warehouse.inventory.repository.InventarioRepository;
import com.example.PDVWM.warehouse.inventory.dto.InventarioDTO;
import com.example.PDVWM.warehouse.pdv.repository.VentaRepository;
import com.example.PDVWM.warehouse.supplies.repository.SuministroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class InventarioService {

    @Autowired
    private InventarioRepository inventarioRepo;

    @Autowired
    private VentaRepository ventaRepo;

    @Autowired
    private SuministroRepository suministroRepo;

    public List<InventarioDTO> getDetailedInventory() {
        return inventarioRepo.findAll().stream().map(inv -> {
            String nombre = inv.getProducto().getNombre();
            int stock = inv.getStockActual();
            int minimo = inv.getStockMinimo();

            int totalVentas = ventaRepo.sumByProducto(inv.getProducto().getIdProducto());
            int totalSuministros = suministroRepo.sumByProducto(inv.getProducto().getIdProducto());

            return new InventarioDTO(nombre, stock, minimo, totalVentas, totalSuministros);
        }).collect(Collectors.toList());
    }

    public Inventario createInventory(Inventario inventario) {
        return inventarioRepo.save(inventario);
    }

    public boolean supply(Long productId, int quantity) {
        Inventario inventario = inventarioRepo.findByProducto_IdProducto(productId);
        if (inventario == null) return false;
        inventario.setStockActual(inventario.getStockActual() + quantity);
        inventarioRepo.save(inventario);
        return true;
    }
}
