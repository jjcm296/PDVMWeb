package com.example.PDVWM.warehouse.inventory.repository;

import com.example.PDVWM.warehouse.inventory.model.Inventario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventarioRepository extends JpaRepository<Inventario, Long> {
    Inventario findByProducto_IdProducto(Long idProducto);
}
