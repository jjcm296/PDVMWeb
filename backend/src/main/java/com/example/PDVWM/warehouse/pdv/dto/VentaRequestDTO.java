package com.example.PDVWM.warehouse.pdv.dto;

import java.util.List;

public class VentaRequestDTO {

    public static class ProductoCantidad {
        private Long idProducto;
        private int cantidad;

        // Getters y setters
        public Long getIdProducto() { return idProducto; }
        public void setIdProducto(Long idProducto) { this.idProducto = idProducto; }

        public int getCantidad() { return cantidad; }
        public void setCantidad(int cantidad) { this.cantidad = cantidad; }
    }

    private List<ProductoCantidad> productos;
    private double importeRecibido;

    // Getters y setters
    public List<ProductoCantidad> getProductos() { return productos; }
    public void setProductos(List<ProductoCantidad> productos) { this.productos = productos; }

    public double getImporteRecibido() { return importeRecibido; }
    public void setImporteRecibido(double importeRecibido) { this.importeRecibido = importeRecibido; }
}
