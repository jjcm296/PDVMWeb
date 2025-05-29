package com.example.PDVWM.warehouse.inventory.dto;

public class InventarioDTO {
    private String nombreProducto;
    private int stockActual;
    private int stockMinimo;
    private int totalVentas;
    private int totalSuministros;

    public InventarioDTO(String nombreProducto, int stockActual, int stockMinimo, int totalVentas, int totalSuministros) {
        this.nombreProducto = nombreProducto;
        this.stockActual = stockActual;
        this.stockMinimo = stockMinimo;
        this.totalVentas = totalVentas;
        this.totalSuministros = totalSuministros;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public int getStockActual() {
        return stockActual;
    }

    public int getStockMinimo() {
        return stockMinimo;
    }

    public int getTotalVentas() {
        return totalVentas;
    }

    public int getTotalSuministros() {
        return totalSuministros;
    }
}
