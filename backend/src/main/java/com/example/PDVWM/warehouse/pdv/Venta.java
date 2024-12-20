package com.example.PDVWM.warehouse.pdv;

import com.example.PDVWM.warehouse.productManagement.model.Producto;

import java.time.LocalDate;
import java.util.Date;
import java.util.Map;

public class Venta {
    private int idVenta;
    private Date FechaVenta;
    private LocalDate horaVenta;
    private double importe;
    private double importeRecibido;
    private double cambio;

    private Map<Producto, Integer> productosVendidos;

    public int getIdVenta() {
        return idVenta;
    }

    public Date getFechaVenta() {
        return FechaVenta;
    }

    public LocalDate getHoraVenta() {
        return horaVenta;
    }

    public double getImporte() {
        return importe;
    }

    public double getImporteRecibido() {
        return importeRecibido;
    }

    public double getCambio() {
        return cambio;
    }

    private double calcularImporteTotal() {
        double importe = 0;

        for(Map.Entry<Producto, Integer > producto : productosVendidos.entrySet()){
            Producto p = producto.getKey();
            int cantidad = producto.getValue();

            importe += p.getPrecio() * cantidad;
        }

        return importe;
    }



    public double calcularCambio(){
        this.cambio = this.importeRecibido - this.importe;
        return this.cambio;
    }
}
