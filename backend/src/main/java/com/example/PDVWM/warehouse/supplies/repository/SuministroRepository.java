package com.example.PDVWM.warehouse.supplies.repository;

import com.example.PDVWM.warehouse.supplies.model.Suministro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SuministroRepository extends JpaRepository<Suministro, Long> {
    @Query("SELECT COALESCE(SUM(s.cantidadSuministrada), 0) FROM Suministro s WHERE s.productoSuministrado.idProducto = :idProducto")
    int sumByProducto(Long idProducto);
}
