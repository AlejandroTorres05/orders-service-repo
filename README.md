# ORDER SERVICE - Microservicio

Este es un microservicio desarrollado en Node.js como parte de una demostración del patrón arquitectónico **API Gateway**.

## 📋 Descripción

Microservicio que simula la gestión de órdenes dentro de un sistema distribuido de software dentro de una arquitectura de microservicios. Forma parte de un sistema distribuido que utiliza un API Gateway para el enrutamiento y gestión de solicitudes.

## 🚀 Tecnologías

- **Runtime**: Node.js 22+
- **Framework**: Express.js
- **Deployment**: Azure App Service
- **Arquitectura**: Microservicios con API Gateway

## 🛠️ Instalación y ejecución

### Prerrequisitos:

- Node.js 22 o superior
- npm

### Instalación:

```bash
# Clonar el repositorio
git clone https://github.com/AlejandroTorres05/orders-service-repo

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

**URL de producción**: `https://orders-service-ct-a7fadza8aqasb2fb.eastus2-01.azurewebsites.net`

### Archivos de configuración:

- `package.json` - Dependencias y scripts
- `web.config` - Configuración para IIS en Azure
- `.gitignore` - Archivos excluidos del repositorio

## 🏗️ Arquitectura

Este microservicio forma parte de una arquitectura más amplia:

```
Cliente → API Gateway → Orders Service
```

### Características:

- **Independiente**: Se ejecuta de forma autónoma
- **Stateless**: Sin estado persistente entre solicitudes
- **Escalable**: Puede replicarse horizontalmente

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

**Nota**: Este es un microservicio de demostración para ilustrar conceptos arquitectónicos. En un entorno de producción, debería considerar implementar logging avanzado, métricas, manejo de errores más robusto y pruebas automatizadas.
