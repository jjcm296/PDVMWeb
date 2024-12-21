package com.example.PDVWM.accountManagement;

import jakarta.persistence.*;

@Entity
@Table(name="Usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idUsuario;

    @Column(name="nombre")
    private String nombre;

    @Column(name="apellidoPaterno")
    private String apellidoPaterno;

    @Column(name="apellidoMaterno")
    private String apellidoMaterno;

    @ManyToOne
    @JoinColumn(name="idCuenta")
    private Cuenta cuenta;
}
