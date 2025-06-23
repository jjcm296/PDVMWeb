package com.example.PDVWM.accountManagement.repository;

import com.example.PDVWM.accountManagement.model.Business;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessRepository extends JpaRepository<Business, Long> {
}
