package com.example.PDVWM.warehouse.supplies.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "SuministroPorcaja")
public class SuministroPorCaja extends Suministro {

    @Override
    public void suministrar() {
        // lógica vacía o real si la tienes
    }
}
