package com.example.PDVWM.accountManagement.dto;

public class AccountAvailabilityResponseDTO {
    private boolean loginExists;
    private boolean usernameExists;

    public AccountAvailabilityResponseDTO(boolean loginExists, boolean usernameExists) {
        this.loginExists = loginExists;
        this.usernameExists = usernameExists;
    }
}
