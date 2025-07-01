package com.example.PDVWM.accountManagement.service;

import com.example.PDVWM.accountManagement.dto.CodeVerificationDTO;
import com.example.PDVWM.accountManagement.model.*;
import com.example.PDVWM.accountManagement.model.Session;
import com.example.PDVWM.accountManagement.repository.AccountRepository;
import com.example.PDVWM.accountManagement.repository.BusinessRepository;
import com.example.PDVWM.accountManagement.repository.SessionRepository;
import com.example.PDVWM.accountManagement.repository.UserRepository;
import io.github.cdimascio.dotenv.Dotenv;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.*;
import java.time.LocalDateTime;
import java.util.*;

@Service
public class AuthService {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private SessionRepository sessionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BusinessRepository businessRepository;


    @Autowired
    private JwtService jwtService;

    @Autowired
    private final PasswordEncoder passwordEncoder;

    private Map<String, String> verificationCodes = new HashMap<>();


    public AuthService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public Map<String, Object> registerNewAccount(CodeVerificationDTO dto) {
        if (dto.getUsername() == null || dto.getPassword() == null || dto.getCode() == null ||
                dto.getName() == null || dto.getFirstLastName() == null || dto.getBusinessName() == null) {
            throw new IllegalArgumentException("Faltan datos obligatorios");
        }

        // Crear cuenta
        Account account = new Account();
        account.setLogin(dto.getLogin());
        account.setUsername(dto.getUsername());
        account.setPassword(dto.getPassword());
        account.setRole(dto.getRole() != null ? dto.getRole() : Role.COMERCIANTE);

        Account savedAccount = saveAccount(account, dto.getCode());

        // Crear negocio
        Business business = new Business();
        business.setName(dto.getBusinessName());
        businessRepository.save(business);

        // Crear usuario asociado
        User user = new User();
        user.setName(dto.getName());
        user.setFirstLastName(dto.getFirstLastName());
        user.setSecondLastName(dto.getSecondLastName());
        user.setAccount(savedAccount);
        user.setBusiness(business);
        userRepository.save(user);

        // Tokens
        String accessToken = jwtService.generateToken(savedAccount);
        String refreshToken = jwtService.generateRefreshToken(savedAccount);

        return Map.of(
                "accessToken", accessToken,
                "refreshToken", refreshToken,
                "role", savedAccount.getRole(),
                "username", savedAccount.getUsername()
        );
    }


    @Transactional
    protected Account saveAccount(Account account, String enteredCode) {
        if (isVerificationCodeValid(account.getLogin(), enteredCode)) {
            account.setPassword(passwordEncoder.encode(account.getPassword()));
            Account savedAccount = accountRepository.save(account);

            // Generar y guardar refresh token
            String refreshToken = jwtService.generateRefreshToken(savedAccount);
            Session session = new Session(
                    savedAccount,
                    refreshToken,
                    LocalDateTime.now(),
                    LocalDateTime.now().plusDays(7)
            );
            sessionRepository.save(session);

            return savedAccount;
        } else {
            throw new RuntimeException("Invalid verification code");
        }
    }

    public void sendVerificationCode(String email) {
        Dotenv dotenv = Dotenv.load();
        String user = dotenv.get("MAIL_USER");
        String password = dotenv.get("MAIL_PASSWORD");
        String host = dotenv.get("MAIL_HOST");
        String port = dotenv.get("MAIL_PORT");

        String verificationCode = generateVerificationCode();
        verificationCodes.put(email, verificationCode);

        Properties props = new Properties();
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", port);
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.ssl.trust", host);

        javax.mail.Session session = javax.mail.Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(user, password);
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(user));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
            message.setSubject("PDVM Verification Code");
            message.setText("Your verification code is: " + verificationCode);

            Transport.send(message);
            System.out.println("Email sent successfully");

        } catch (MessagingException e) {
            System.err.println("Error sending email: " + e.getMessage());
            throw new RuntimeException("Could not send verification email", e);
        }
    }

    private String generateVerificationCode() {
        Random random = new Random();
        int code = 100000 + random.nextInt(900000);
        return String.valueOf(code);
    }

    private boolean isVerificationCodeValid(String email, String enteredCode) {
        String storedCode = verificationCodes.get(email);
        return storedCode != null && storedCode.equals(enteredCode);
    }

    public Map<String, Object> refreshAccessToken(String refreshToken) {
        Session session = sessionRepository.findByRefreshToken(refreshToken)
                .orElseThrow(() -> new IllegalArgumentException("Sesión no encontrada para el token proporcionado."));

        if (session.getExpiresAt().isBefore(LocalDateTime.now())) {
            sessionRepository.delete(session);
            throw new IllegalArgumentException("El token de actualización ha expirado.");
        }

        if (!jwtService.validateToken(refreshToken)) {
            throw new IllegalArgumentException("El token de actualización no es válido.");
        }

        Account account = session.getAccount();
        String newAccessToken = jwtService.generateAccessToken(account);

        Map<String, Object> response = new HashMap<>();
        response.put("accessToken", newAccessToken);

        return response;
    }
}
