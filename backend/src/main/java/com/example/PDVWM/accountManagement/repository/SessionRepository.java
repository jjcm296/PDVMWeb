package com.example.PDVWM.accountManagement.repository;

import com.example.PDVWM.accountManagement.model.Session;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SessionRepository extends JpaRepository<Session, Long> {
    Optional<Session> findByRefreshToken(String refreshToken);
    void deleteByRefreshToken(String refreshToken);
}

