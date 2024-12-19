package com.example.PDVWM.model;


import jakarta.persistence.*;

@Entity
@Table(name="Inventario")
public class Inventario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idInventario;

    @Column(name="stockActual")
    private int stockActual;

    @Column(name="stockMinimo")
    private int strockMinimo;

    public Inventario() {}


}
