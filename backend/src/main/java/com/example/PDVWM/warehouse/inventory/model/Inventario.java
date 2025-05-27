package com.example.PDVWM.warehouse.inventory.model;

import com.example.PDVWM.warehouse.productManagement.model.Producto;
import jakarta.persistence.*;

@Entity
@Table(name = "Inventario")
public class Inventario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idInventario;

    @Column(name = "stockActual", nullable = false)
    private int stockActual;

    @Column(name = "stockMinimo", nullable = false)
    private int stockMinimo;

    @OneToOne
    @JoinColumn(name = "idProducto", nullable = false, unique = true)
    private Producto producto;

    public Inventario() {}

    public Inventario(int stockActual, int stockMinimo, Producto producto) {
        this.stockActual = stockActual;
        this.stockMinimo = stockMinimo;
        this.producto = producto;
    }

    public Long getIdInventario() {
        return idInventario;
    }

    public int getStockActual() {
        return stockActual;
    }

    public void setStockActual(int stockActual) {
        this.stockActual = stockActual;
    }

    public int getStockMinimo() {
        return stockMinimo;
    }

    public void setStockMinimo(int stockMinimo) {
        this.stockMinimo = stockMinimo;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}
