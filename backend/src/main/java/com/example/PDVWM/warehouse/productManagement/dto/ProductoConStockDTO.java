package com.example.PDVWM.warehouse.productManagement.dto;

public class ProductoConStockDTO {
    private Long idProducto;
    private String nombre;
    private int stockActual;

    public ProductoConStockDTO(Long idProducto, String nombre, int stockActual) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.stockActual = stockActual;
    }

    public Long getIdProducto() {
        return idProducto;
    }

    public String getNombre() {
        return nombre;
    }

    public int getStockActual() {
        return stockActual;
    }

    public void setIdProducto(Long idProducto) {
        this.idProducto = idProducto;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setStockActual(int stockActual) {
        this.stockActual = stockActual;
    }
}
