package com.example.PDVWM.model;

import java.time.LocalTime;
import java.util.Date;

public class Alerta {
    private int idAlerta;
    private String mensaje;
    private String tipoAlerta;
    private Date fechaAlerta;
    private LocalTime horaAlerta;
    private boolean estadoAlerta;

    public Alerta(String mensaje, String tipoAlerta){
        this.mensaje = mensaje;
        this.tipoAlerta = tipoAlerta;
    }

    public String getMensaje() {
        return mensaje;
    }

    public String getTipoAlerta() {
        return tipoAlerta;
    }

    public Date getFechaAlerta() {
        return fechaAlerta;
    }

    public LocalTime getHoraAlerta() {
        return horaAlerta;
    }

    public boolean isEstadoAlerta() {
        return estadoAlerta;
    }
}
