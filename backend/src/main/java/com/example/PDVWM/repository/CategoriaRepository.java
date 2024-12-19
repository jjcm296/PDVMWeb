package com.example.PDVWM.repository;

import com.example.PDVWM.model.Categoria;
import com.example.PDVWM.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
    // Obtener por nombre ascendente
    @Query("SELECT c FROM Categoria c ORDER BY c.nombre ASC")
    List<Categoria> findAllByNameAsc();

    // Obtener por nombre descendente
    @Query("SELECT c FROM Categoria c ORDER BY c.nombre DESC")
    List<Categoria> findAllByNameDesc();

}
