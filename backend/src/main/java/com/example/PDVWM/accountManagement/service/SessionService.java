package com.example.PDVWM.accountManagement.service;

import com.example.PDVWM.accountManagement.model.Session;
import com.example.PDVWM.accountManagement.repository.SessionRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SessionService {

    private final SessionRepository sessionRepository;

    public SessionService(SessionRepository sessionRepository) {
        this.sessionRepository = sessionRepository;
    }

    public Optional<Session> findByRefreshToken(String refreshToken) {
        return sessionRepository.findByRefreshToken(refreshToken);
    }

    public void saveSession(Session session) {
        sessionRepository.save(session);
    }

    public void deleteSession(Session session) {
        sessionRepository.delete(session);
    }
}
