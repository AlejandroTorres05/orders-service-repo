# [NOMBRE_SERVICIO] - Microservicio

Este es un microservicio desarrollado en Node.js como parte de una demostración del patrón arquitectónico **API Gateway**.

## 📋 Descripción

Microservicio que maneja [DESCRIPCIÓN_FUNCIONALIDAD] dentro de una arquitectura de microservicios. Forma parte de un sistema distribuido que utiliza un API Gateway para el enrutamiento y gestión de solicitudes.

## 🚀 Tecnologías

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Deployment**: Azure App Service
- **Arquitectura**: Microservicios con API Gateway

## 📡 Endpoints

### Endpoints principales:

- `GET /[ENDPOINT_PRINCIPAL]` - Lista todos los [RECURSOS]
- `GET /[ENDPOINT_PRINCIPAL]/:id` - Obtiene un [RECURSO] específico
- `GET /health` - Estado de salud del servicio

### Respuesta ejemplo:

```json
{
  "service": "[NOMBRE_SERVICIO]",
  "message": "Mensaje descriptivo",
  "data": [...],
  "timestamp": "2025-08-24T15:30:00.000Z"
}
```

## 🛠️ Instalación y ejecución

### Prerrequisitos:

- Node.js 18 o superior
- npm

### Instalación:

```bash
# Clonar el repositorio
git clone [URL_REPOSITORIO]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start
```

### Variables de entorno:

```bash
PORT=3001  # Puerto por defecto
NODE_ENV=production  # Entorno de ejecución
```

## 🌐 Despliegue

### Azure App Service:

Este servicio está configurado para desplegarse automáticamente en Azure App Service.

**URL de producción**: `https://[NOMBRE_SERVICIO].azurewebsites.net`

### Archivos de configuración:

- `package.json` - Dependencias y scripts
- `web.config` - Configuración para IIS en Azure
- `.gitignore` - Archivos excluidos del repositorio

## 🏗️ Arquitectura

Este microservicio forma parte de una arquitectura más amplia:

```
Cliente → API Gateway → [NOMBRE_SERVICIO]
```

### Características:

- **Independiente**: Se ejecuta de forma autónoma
- **Stateless**: Sin estado persistente entre solicitudes
- **Escalable**: Puede replicarse horizontalmente
- **Resiliente**: Manejo de errores y timeouts

## 🔍 Monitoreo

### Health Check:

```bash
curl https://[URL_SERVICIO]/health
```

### Logs:

Los logs se pueden consultar desde:

- Azure Portal → App Service → Log stream
- Consola local durante desarrollo

## 🤝 API Gateway Integration

Este servicio está diseñado para funcionar detrás de un API Gateway que maneja:

- **Routing**: Enrutamiento de solicitudes
- **Authentication**: Autenticación centralizada
- **Rate Limiting**: Control de velocidad de solicitudes
- **Load Balancing**: Distribución de carga

## 📝 Desarrollo

### Estructura del proyecto:

```
├── server.js          # Punto de entrada principal
├── package.json       # Dependencias y configuración
├── web.config         # Configuración Azure/IIS
├── .gitignore         # Archivos excluidos
└── README.md          # Documentación
```

### Agregar nuevos endpoints:

```javascript
app.get('/nuevo-endpoint', (req, res) => {
  res.json({
    service: "[NOMBRE_SERVICIO]",
    message: "Nuevo endpoint",
    data: // tu data aquí
  });
});
```

## 🐛 Solución de problemas

### Errores comunes:

**Puerto ya en uso:**

```bash
# Cambiar puerto en package.json o variable de entorno
PORT=3002 npm start
```

**Dependencias faltantes:**

```bash
npm install
```

**Error 404 en Azure:**

- Verificar que `web.config` esté presente
- Comprobar que `server.js` esté en la raíz
- Revisar logs en Azure Portal

---

**Nota**: Este es un microservicio de demostración para ilustrar conceptos arquitectónicos. En un entorno de producción, considera implementar logging avanzado, métricas, manejo de errores más robusto y pruebas automatizadas.
