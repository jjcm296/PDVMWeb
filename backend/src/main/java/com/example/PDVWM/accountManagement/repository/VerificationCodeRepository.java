package com.example.PDVWM.accountManagement.repository;

import com.example.PDVWM.accountManagement.model.VerificationCode;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Long> {
    Optional<VerificationCode> findByLoginAndCode(String login, String code);
    void deleteByLogin(String login);
}
