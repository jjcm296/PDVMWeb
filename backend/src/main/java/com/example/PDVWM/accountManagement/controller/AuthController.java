package com.example.PDVWM.accountManagement.controller;

import com.example.PDVWM.accountManagement.dto.CodeVerificationDTO;
import com.example.PDVWM.accountManagement.dto.VerificationRequestDTO;
import com.example.PDVWM.accountManagement.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/request-code")
    public ResponseEntity<?> requestCode(@RequestBody VerificationRequestDTO dto) {
        authService.sendVerificationCode(dto.getLogin());
        return ResponseEntity.ok("Código de verificación enviado.");
    }

    @PostMapping("/verify-code")
    public ResponseEntity<?> verifyCode(@RequestBody CodeVerificationDTO dto) {
        try {
            Map<String, Object> response = authService.registerNewAccount(dto);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("No se pudo registrar la cuenta: " + e.getMessage());
        }
    }
}