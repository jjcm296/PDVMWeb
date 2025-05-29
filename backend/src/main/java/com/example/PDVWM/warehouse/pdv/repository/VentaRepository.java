package com.example.PDVWM.warehouse.pdv.repository;

import com.example.PDVWM.warehouse.pdv.model.Venta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VentaRepository extends JpaRepository<Venta, Long> {

    @Query("SELECT COALESCE(SUM(VALUE(vp)), 0) FROM Venta v JOIN v.productosVendidos vp WHERE KEY(vp).idProducto = :idProducto")
    int sumByProducto(@Param("idProducto") Long idProducto);
}
