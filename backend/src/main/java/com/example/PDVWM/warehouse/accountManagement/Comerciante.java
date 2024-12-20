package com.example.PDVWM.warehouse.accountManagement;

import jakarta.persistence.*;

@Entity
@Table(name="Comerciante")
public class Comerciante {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long isComerciante;

    @Column(name="correoElectronico")
    private String correoElectronico;

    @Column(name="contrasena")
    private String contrasena;

    public Comerciante() {}

    public Comerciante(String correoElectronico, String contrasena) {
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
