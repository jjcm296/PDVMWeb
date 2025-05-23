package com.example.PDVWM.warehouse.productManagement.repository;

import com.example.PDVWM.warehouse.productManagement.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

    @Query("SELECT c FROM Categoria c ORDER BY c.nombre ASC")
    List<Categoria> findAllByNameAsc();

    @Query("SELECT c FROM Categoria c ORDER BY c.nombre DESC")
    List<Categoria> findAllByNameDesc();
}
