package com.example.PDVWM.accountManagement.controller;

import com.example.PDVWM.accountManagement.model.Account;
import com.example.PDVWM.accountManagement.service.CuentaService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public String guardarCuenta(@RequestBody Account account, @RequestParam String codigo) {
        try {
            cuentaService.guardarCuenta(account, codigo);
            return "Cuenta registrada exitosamente";
        } catch (RuntimeException e) {
            return "Error: " + e.getMessage();
        }
    }
}