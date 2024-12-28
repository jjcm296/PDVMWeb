package com.example.PDVWM.accountManagement.model;

import jakarta.persistence.*;

@Entity
@Table(name="Usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idUsuario;

    @Column(name="nombre")
    private String nombre;

    @Column(name="apellidoPaterno")
    private String apellidoPaterno;

    @Column(name="apellidoMaterno")
    private String apellidoMaterno;

    @Column(name="idCuenta", nullable = false)
    private Long idCuenta;

    public Usuario(){}

    public Usuario( String nombre, String apellidoPaterno, String apellidoMaterno, Long idCuenta) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.idCuenta = idCuenta;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidoPaterno() {
        return apellidoPaterno;
    }

    public void setApellidoPaterno(String apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    }

    public String getApellidoMaterno() {
        return apellidoMaterno;
    }

    public void setApellidoMaterno(String apellidoMaterno) {
        this.apellidoMaterno = apellidoMaterno;
    }
}
