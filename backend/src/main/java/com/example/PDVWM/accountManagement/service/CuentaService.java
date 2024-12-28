package com.example.PDVWM.accountManagement.service;

import com.example.PDVWM.accountManagement.model.Cuenta;
import com.example.PDVWM.accountManagement.repository.CuentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import io.github.cdimascio.dotenv.Dotenv;

import javax.mail.*;
import javax.mail.internet.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.Random;

@Service
public class CuentaService {

    @Autowired
    private CuentaRepository cuentaRepository;

    @Autowired
    private final PasswordEncoder passwordEncoder;

    private Map<String, String> codigosVerificacion = new HashMap<>();

    private CuentaService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public Cuenta guardarCuenta(Cuenta cuenta, String codigoIngresado) {
        // Verificar si el código de verificación ingresado es correcto
        if (codigoVerificacionValido(cuenta.getCorreo(), codigoIngresado)) {
            cuenta.setContrasena(passwordEncoder.encode(cuenta.getContrasena()));
            return cuentaRepository.save(cuenta);
        } else {
            throw new RuntimeException("Código de verificación incorrecto");
        }
    }
    public void enviarCodigoVerificacion(String correo) {
        // Cargar las variables del archivo .env
        Dotenv dotenv = Dotenv.load();
        String user = dotenv.get("MAIL_USER");
        String password = dotenv.get("MAIL_PASSWORD");
        String host = dotenv.get("MAIL_HOST");
        String port = dotenv.get("MAIL_PORT");

        //Generar y almacenar correo y codigo de verificación
        String codigoVerificacion = generarCodigoVerificacion();
        codigosVerificacion.put(correo,codigoVerificacion);

        // Propiedades del servidor de correo
        Properties props = new Properties();
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", port);
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.ssl.trust", host);

        // Crear sesión de correo
        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(user, password);
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(user));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(correo));
            message.setSubject("Código de verificación de PDVM");
            message.setText("Su código de verificación es: " + codigoVerificacion);

            Transport.send(message);
            System.out.println("Correo enviado exitosamente");

        } catch (MessagingException e) {
            System.err.println("Error al enviar el correo: " + e.getMessage());
            throw new RuntimeException("No se pudo enviar el correo de verificación", e);
        }
    }
    private String generarCodigoVerificacion() {
        Random random = new Random();
        int codigo = 100000 + random.nextInt(900000);
        return String.valueOf(codigo);
    }
    private boolean codigoVerificacionValido(String correo, String codigoIngresado) {
        String codigoGuardado = codigosVerificacion.get(correo);
        return codigoGuardado != null && codigoGuardado.equals(codigoIngresado);
    }
}