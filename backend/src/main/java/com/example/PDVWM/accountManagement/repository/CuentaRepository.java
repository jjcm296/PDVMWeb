package com.example.PDVWM.accountManagement.repository;

import com.example.PDVWM.accountManagement.model.Cuenta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CuentaRepository extends JpaRepository<Cuenta, Long> {
}