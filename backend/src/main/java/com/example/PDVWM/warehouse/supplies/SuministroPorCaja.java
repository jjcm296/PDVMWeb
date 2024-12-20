package com.example.PDVWM.warehouse.supplies;

public class SuministroPorCaja extends Suministro {
    private int unidadPorCaja;
    private int cantidadDeCajas;

    @Override
    public void suministrar(){

    }
    private void calcularCantidadSuministrada(){
        setCantidadSuministrada((unidadPorCaja*cantidadDeCajas));
    }

    public int getUnidadPorCaja() {
        return unidadPorCaja;
    }

    public void setUnidadPorCaja(int unidadPorCaja) {
        this.unidadPorCaja = unidadPorCaja;
    }

    public int getCantidadDeCajas() {
        return cantidadDeCajas;
    }

    public void setCantidadDeCajas(int cantidadDeCajas) {
        this.cantidadDeCajas = cantidadDeCajas;
    }
}
