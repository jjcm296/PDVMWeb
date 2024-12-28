package com.example.PDVWM.accountManagement.controller;

import com.example.PDVWM.accountManagement.model.Cuenta;
import com.example.PDVWM.accountManagement.service.CuentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cuenta")
public class CuentaController {

    @Autowired
    private CuentaService cuentaService;

    @PostMapping("/verificarCorreo")
    public String verificarCorreo(@RequestParam String correo) {
        cuentaService.enviarCodigoVerificacion(correo);
        return "Código de verificación enviado a " + correo;
    }

    @PostMapping("/guardar")
    public String guardarCuenta(@RequestBody Cuenta cuenta, @RequestParam String codigo) {
        try {
            cuentaService.guardarCuenta(cuenta, codigo);
            return "Cuenta registrada exitosamente";
        } catch (RuntimeException e) {
            return "Error: " + e.getMessage();
        }
    }
}