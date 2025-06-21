# Frontend de VenCloud

Este es el frontend del sistema de vencloud desarrollado con **Vite + React**. Se conecta a un backend desplegado en **Render**, y el cliente se encuentra desplegado en **Vercel**.

## 🚀 Tecnologías utilizadas

- Vite
- React
- React Router DOM
- Axios
- Heroicons
- FontAwesome

## ⚙️ Variables de entorno

### Para desarrollo local (`.env`)
VITE_BACKEND_URL=http://localhost:8080

### Para producción (`.env.production`)
VITE_BACKEND_URL=https://pdv-zabi.onrender.com

## 📦 Instalación

### Clona el repositorio
git clone https://github.com/jjcm296/PDVMWeb.git

### Entra a la carpeta del frontend
cd front

### Instala las dependencias
npm install

## 🧪 Comandos disponibles

### Levanta el servidor de desarrollo
npm run dev

### Compila para producción
npm run build

### Previsualiza la versión compilada
npm run preview

### Linting
npm run lint

## 🚀 Despliegue automático (CI/CD)

Este proyecto usa despliegue continuo con Vercel:

### Se despliega automáticamente cuando haces push a las ramas main o develop.

### Otras ramas están ignoradas mediante la configuración de vercel.json.

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "ignoreCommand": "if [ \"$VERCEL_GIT_BRANCH\" != \"main\" ] && [ \"$VERCEL_GIT_BRANCH\" != \"develop\" ]; then exit 1; fi"
}
```

## 🌐 Producción

### Frontend: https://pdv-web-psi.vercel.app/
### Backend: https://pdv-zabi.onrender.com
