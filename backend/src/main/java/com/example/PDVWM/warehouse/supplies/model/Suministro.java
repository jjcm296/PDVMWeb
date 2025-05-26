package com.example.PDVWM.warehouse.supplies.model;

import com.example.PDVWM.warehouse.productManagement.model.Producto;
import jakarta.persistence.*;

import java.time.LocalTime;
import java.util.Date;

@Entity
@Table(name="Suministro")
public abstract class Suministro {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idSuministro;

    @Column(name="fechaSuministro")
    private Date fechaSuministro;

    @Column(name = "horaSuministro")
    private LocalTime horaSuministro;

    @Column(name = "cantidadSuministrada")
    private int cantidadSuministrada;

    @ManyToOne
    @JoinColumn(name="producto_id", nullable = false)
    private Producto productoSuministrado;

    public abstract void suministrar();

    public int getIdSuministro() {
        return idSuministro;
    }

    public void setIdSuministro(int idSuministro) {
        this.idSuministro = idSuministro;
    }

    public Date getFechaSuministro() {
        return fechaSuministro;
    }

    public void setFechaSuministro(Date fechaSuministro) {
        this.fechaSuministro = fechaSuministro;
    }

    public LocalTime getHoraSuministro() {
        return horaSuministro;
    }

    public void setHoraSuministro(LocalTime horaSuministro) {
        this.horaSuministro = horaSuministro;
    }

    public int getCantidadSuministrada() {
        return cantidadSuministrada;
    }

    public void setCantidadSuministrada(int cantidadSuministrada) {
        this.cantidadSuministrada = cantidadSuministrada;
    }

    public Producto getProductoSuministrado() {
        return productoSuministrado;
    }

    public void setProductoSuministrado(Producto productoSuministrado) {
        this.productoSuministrado = productoSuministrado;
    }
}
