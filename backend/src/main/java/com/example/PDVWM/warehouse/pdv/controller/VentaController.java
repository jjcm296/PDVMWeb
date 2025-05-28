package com.example.PDVWM.warehouse.pdv.controller;

import com.example.PDVWM.warehouse.pdv.dto.VentaRequestDTO;
import com.example.PDVWM.warehouse.pdv.model.Venta;
import com.example.PDVWM.warehouse.pdv.service.VentaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ventas")
public class VentaController {

    private final VentaService ventaService;

    public VentaController(VentaService ventaService) {
        this.ventaService = ventaService;
    }

    @PostMapping
    public ResponseEntity<Venta> registrarVenta(@RequestBody VentaRequestDTO request) {
        Venta venta = ventaService.crearVenta(request);
        return ResponseEntity.ok(venta);
    }
}
