package com.example.PDVWM.warehouse.inventory.controller;

import com.example.PDVWM.warehouse.inventory.dto.InventarioDTO;
import com.example.PDVWM.warehouse.inventory.model.Inventario;
import com.example.PDVWM.warehouse.inventory.service.InventarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
public class InventarioController {

    private final InventarioService inventarioService;

    public InventarioController(InventarioService inventarioService) {
        this.inventarioService = inventarioService;
    }

    @GetMapping
    public ResponseEntity<List<InventarioDTO>> getDetailedInventory() {
        return ResponseEntity.ok(inventarioService.getDetailedInventory());
    }

    @PostMapping
    public ResponseEntity<Inventario> createInventory(@RequestBody Inventario inventario) {
        return ResponseEntity.ok(inventarioService.createInventory(inventario));
    }

    @PutMapping("/supply/{productId}")
    public ResponseEntity<?> supplyInventory(@PathVariable Long productId, @RequestParam int quantity) {
        boolean result = inventarioService.supply(productId, quantity);
        if (result) return ResponseEntity.ok().build();
        else return ResponseEntity.badRequest().body("Producto no encontrado en el inventario");
    }
}
