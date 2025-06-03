# Usa la imagen oficial de Java 17
FROM eclipse-temurin:17-jdk

# Crea un directorio para la app
WORKDIR /app

# Copia los archivos del proyecto
COPY . .

# Da permisos al wrapper
RUN chmod +x mvnw

# Compila el proyecto con Maven
RUN ./mvnw clean package -DskipTests

# Expone el puerto que usas en Spring Boot
EXPOSE 8080

# Ejecuta el JAR generado
CMD ["java", "-jar", "target/PDVWM-0.0.1-SNAPSHOT.jar"]
