package com.example.PDVWM.warehouse.supplies.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "suministro_por_unidad")
public class SuministroPorUnidad extends Suministro {
    @Override
    public void suministrar() {
        // Lógica si aplica
    }
}
