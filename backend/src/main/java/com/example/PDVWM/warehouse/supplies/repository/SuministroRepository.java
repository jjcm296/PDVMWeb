package com.example.PDVWM.warehouse.supplies.repository;

import com.example.PDVWM.warehouse.supplies.model.Suministro;
import com.example.PDVWM.warehouse.supplies.model.SuministroPorUnidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuministroRepository extends JpaRepository<Suministro, Integer> {

}

