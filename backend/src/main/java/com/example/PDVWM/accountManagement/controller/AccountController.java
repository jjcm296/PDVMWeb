package com.example.PDVWM.accountManagement.controller;

import com.example.PDVWM.accountManagement.dto.AccountAvailabilityRequestDTO;
import com.example.PDVWM.accountManagement.dto.AccountAvailabilityResponseDTO;
import com.example.PDVWM.accountManagement.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/check-availability")
    public ResponseEntity<Map<String, Boolean>> checkAvailability(@RequestBody AccountAvailabilityRequestDTO dto) {
        Map<String, Boolean> result = new HashMap<>();
        result.put("loginAvailable", !accountService.existsByLogin(dto.getLogin()));
        result.put("usernameAvailable", !accountService.existsByUsername(dto.getUsername()));
        return ResponseEntity.ok(result);
    }

}
