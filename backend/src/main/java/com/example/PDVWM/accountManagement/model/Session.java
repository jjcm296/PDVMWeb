package com.example.PDVWM.accountManagement.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "ses sion")
public class Session {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSesion;

    @ManyToOne(optional = false)
    @JoinColumn(name = "idCuenta", referencedColumnName = "idAccount")
    private Account account;

    @Column(name = "refresh_token", nullable = false, unique = true)
    private String refreshToken;

    @Column(name = "fecha_creacion", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "fecha_expiracion", nullable = false)
    private LocalDateTime expiresAt;

    public Session() {}

    public Session(Account account, String refreshToken, LocalDateTime createdAt, LocalDateTime expiresAt) {
        this.account = account;
        this.refreshToken = refreshToken;
        this.createdAt = createdAt;
        this.expiresAt = expiresAt;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getExpiresAt() {
        return expiresAt;
    }

    public void setExpiresAt(LocalDateTime expiresAt) {
        this.expiresAt = expiresAt;
    }
}

