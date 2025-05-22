package com.example.PDVWM.warehouse.productManagement.repository;

import com.example.PDVWM.warehouse.productManagement.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    // Obtener producto por código de barras
    @Query("SELECT p FROM Producto p WHERE p.codigoBarra = :codigoBarra")
    Producto findByCodigo(@Param("codigoBarra") String codigoBarra);
}
