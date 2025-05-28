package com.example.PDVWM.warehouse.pdv.model;

import com.example.PDVWM.warehouse.productManagement.model.Producto;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Entity
public class Venta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idVenta;

    private LocalDateTime fechaHora;

    private double importe;
    private double importeRecibido;
    private double cambio;

    @ElementCollection
    @CollectionTable(name = "venta_productos", joinColumns = @JoinColumn(name = "venta_id"))
    @MapKeyJoinColumn(name = "producto_id")
    @Column(name = "cantidad")
    private Map<Producto, Integer> productosVendidos = new HashMap<>();

    // Getters y setters

    public Long getIdVenta() {
        return idVenta;
    }

    public LocalDateTime getFechaHora() {
        return fechaHora;
    }

    public void setFechaHora(LocalDateTime fechaHora) {
        this.fechaHora = fechaHora;
    }

    public double getImporte() {
        return importe;
    }

    public void setImporte(double importe) {
        this.importe = importe;
    }

    public double getImporteRecibido() {
        return importeRecibido;
    }

    public void setImporteRecibido(double importeRecibido) {
        this.importeRecibido = importeRecibido;
    }

    public double getCambio() {
        return cambio;
    }

    public void setCambio(double cambio) {
        this.cambio = cambio;
    }

    public Map<Producto, Integer> getProductosVendidos() {
        return productosVendidos;
    }

    public void setProductosVendidos(Map<Producto, Integer> productosVendidos) {
        this.productosVendidos = productosVendidos;
    }
}
