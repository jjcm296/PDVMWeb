package com.example.PDVWM.accountManagement.model;

import jakarta.persistence.*;

@Entity
@Table(name="Cuenta")
public class Cuenta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="userName")
    private String userName;

    @Column(name="correoElectronico")
    private String correoElectronico;

    @Column(name="contrasena")
    private String contrasena;

    public Cuenta() {}

    public Cuenta(String userName, String correoElectronico, String contrasena) {
        this.userName = userName;
        this.correoElectronico = correoElectronico;
        this.contrasena = contrasena;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getCorreo() {
        return correoElectronico;
    }
}