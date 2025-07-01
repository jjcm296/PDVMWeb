package com.example.PDVWM.accountManagement.service;

import com.example.PDVWM.accountManagement.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public boolean existsByLogin(String login) {
        return accountRepository.existsByLogin(login);
    }

    public boolean existsByUsername(String username) {
        return accountRepository.existsByUserName(username);
    }

}
