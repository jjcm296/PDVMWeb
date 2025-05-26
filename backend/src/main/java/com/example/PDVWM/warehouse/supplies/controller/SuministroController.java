package com.example.PDVWM.warehouse.supplies.controller;

import com.example.PDVWM.warehouse.supplies.service.SuministroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/suministros")
public class SuministroController {

    @Autowired
    private SuministroService suministroService;

    @PostMapping
    public ResponseEntity<?> registrar(@RequestBody Map<String, Object> request) {
        Long productoId = Long.valueOf(request.get("productoId").toString());
        int cantidad = Integer.parseInt(request.get("cantidad").toString());

        boolean ok = suministroService.registrarSuministro(productoId, cantidad);
        return ok ? ResponseEntity.ok("Suministro registrado correctamente.")
                : ResponseEntity.badRequest().body("No se pudo registrar el suministro.");
    }
}

