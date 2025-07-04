package com.example.PDVWM.accountManagement.repository;

import com.example.PDVWM.accountManagement.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    boolean existsByLogin(String login);
    boolean existsByUserName(String userName);
}