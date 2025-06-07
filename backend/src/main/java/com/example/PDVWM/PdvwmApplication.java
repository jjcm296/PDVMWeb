package com.example.PDVWM;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class PdvwmApplication {

	public static void main(String[] args) {
		// Cargar variables del archivo .env si existe
		Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
		System.setProperty("DATABASE_URL", dotenv.get("DATABASE_URL", ""));
		System.setProperty("DATABASE_USER", dotenv.get("DATABASE_USER", ""));
		System.setProperty("DATABASE_PASSWORD", dotenv.get("DATABASE_PASSWORD", ""));

		SpringApplication.run(PdvwmApplication.class, args);
	}
}
