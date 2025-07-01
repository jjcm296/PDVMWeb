
# 🧾 PDVWM - Backend

Sistema de Punto de Venta Web para Comerciantes, desarrollado con Java y Spring Boot. Este backend proporciona autenticación segura con JWT, manejo de sesiones, verificación por correo, y gestión inicial de cuentas y negocios.

## 🚀 Tecnologías

- Java 17
- Spring Boot
- Spring Data JPA
- Spring Security
- JWT (JSON Web Tokens)
- PostgreSQL
- Dotenv Java
- JavaMail
- Maven

## 📌 Funcionalidades actuales

✅ Registro de cuenta de comerciante con validación por código enviado al correo  
✅ Inicio de sesión con generación de `accessToken` y `refreshToken`  
✅ Verificación del código enviado por correo electrónico  
✅ Manejo de sesiones y almacenamiento del refresh token  
✅ Endpoint para renovar el `accessToken` si ha expirado  


## 🧪 Endpoints

### 🔐 Autenticación

| Método | Endpoint                          | Descripción                                                                 | Body requerido                                                                                                    | Respuesta esperada                                                                                      |
|--------|-----------------------------------|-----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| POST   | `/api/auth/request-code`          | Envía un código de verificación al correo del usuario.                      | ![imagen](https://github.com/user-attachments/assets/3b6d1f4f-2c68-4bdf-a659-a00f6be85513) | `"Código de verificación enviado."`                                                                    |
| POST   | `/api/auth/verify-code`           | Verifica el código y registra una nueva cuenta.                             | ![imagen](https://github.com/user-attachments/assets/2ec2b139-83f5-4f3f-b43c-94395228a34e)| `{ "accessToken": "...", "refreshToken": "...", "Role": { ... } }`                                   |
| POST   | `/api/auth/refresh-token`         | Genera un nuevo access token a partir del refresh token.                    | ![imagen](https://github.com/user-attachments/assets/a059071d-7574-47df-83e5-601fd060fdb5) | `{ "accessToken": "..." }`                                                                              |

### 👤 Gestión de cuenta

| Método | Endpoint                          | Descripción                                       | Body requerido | Respuesta esperada |
|--------|-----------------------------------|---------------------------------------------------|----------------|---------------------|
| POST   | `/api/account/check-availability` | Verifica si el `login` y/o `username` ya existen. |![imagen](https://github.com/user-attachments/assets/b552ef69-1de3-4e21-a68a-ee929a7dd8e5)| ` { "loginAvailable": true, "usernameAvailable": false }    ` |
