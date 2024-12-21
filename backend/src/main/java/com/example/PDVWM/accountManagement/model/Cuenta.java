package com.example.PDVWM.accountManagement.model;

import jakarta.persistence.*;

@Entity
@Table(name="Cuenta")
public class Cuenta {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long isComerciante;

    @Column(name="correoElectronico")
    private String correoElectronico;

    @Column(name="userName")
    private String userName;

    @Column(name="contrasena")
    private String contrasena;

    public Cuenta() {}

    public Cuenta(String correoElectronico, String contrasena) {
        this.correoElectronico = correoElectronico;
        this.contrasena = contrasena;
    }
    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getContrasena() {
        return contrasena;
    }
}
