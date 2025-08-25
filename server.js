const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

// Middleware para JSON
app.use(express.json());

// Ruta principal del servicio
app.get('/orders', (req, res) => {
  res.json({
    service: "orders-service", 
    message: "¡Hola desde el servicio de órdenes!", 
    data: [
      { 
        id: 1, 
        userId: 1, 
        items: [
          { productId: 1, name: "Laptop Dell", quantity: 1, price: 899.99 }
        ],
        total: 899.99,
        status: "Entregada",
        date: "2025-08-20"
      },
      { 
        id: 2, 
        userId: 2, 
        items: [
          { productId: 2, name: "Mouse Logitech", quantity: 2, price: 25.50 },
          { productId: 3, name: "Teclado Mecánico", quantity: 1, price: 120.00 }
        ],
        total: 171.00,
        status: "En tránsito",
        date: "2025-08-22"
      },
      { 
        id: 3, 
        userId: 3, 
        items: [
          { productId: 4, name: "Monitor 24\"", quantity: 1, price: 199.99 }
        ],
        total: 199.99,
        status: "Procesando",
        date: "2025-08-24"
      }
    ],
    timestamp: new Date().toISOString()
  });
});

// Ruta para obtener una orden específica
app.get('/orders/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const orders = [
    { 
      id: 1, 
      userId: 1, 
      items: [
        { productId: 1, name: "Laptop Dell", quantity: 1, price: 899.99 }
      ],
      total: 899.99,
      status: "Entregada",
      date: "2025-08-20"
    },
    { 
      id: 2, 
      userId: 2, 
      items: [
        { productId: 2, name: "Mouse Logitech", quantity: 2, price: 25.50 },
        { productId: 3, name: "Teclado Mecánico", quantity: 1, price: 120.00 }
      ],
      total: 171.00,
      status: "En tránsito",
      date: "2025-08-22"
    },
    { 
      id: 3, 
      userId: 3, 
      items: [
        { productId: 4, name: "Monitor 24\"", quantity: 1, price: 199.99 }
      ],
      total: 199.99,
      status: "Procesando",
      date: "2025-08-24"
    }
  ];
  
  const order = orders.find(o => o.id === orderId);
  
  if (order) {
    res.json({
      service: "orders-service",
      message: `Orden encontrada: #${order.id}`,
      data: order,
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(404).json({
      service: "orders-service",
      message: "Orden no encontrada",
      error: `No existe orden con ID ${orderId}`
    });
  }
});

// Ruta para obtener órdenes por usuario
app.get('/orders/user/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const orders = [
    { 
      id: 1, 
      userId: 1, 
      items: [
        { productId: 1, name: "Laptop Dell", quantity: 1, price: 899.99 }
      ],
      total: 899.99,
      status: "Entregada",
      date: "2025-08-20"
    },
    { 
      id: 2, 
      userId: 2, 
      items: [
        { productId: 2, name: "Mouse Logitech", quantity: 2, price: 25.50 },
        { productId: 3, name: "Teclado Mecánico", quantity: 1, price: 120.00 }
      ],
      total: 171.00,
      status: "En tránsito",
      date: "2025-08-22"
    },
    { 
      id: 3, 
      userId: 3, 
      items: [
        { productId: 4, name: "Monitor 24\"", quantity: 1, price: 199.99 }
      ],
      total: 199.99,
      status: "Procesando",
      date: "2025-08-24"
    }
  ];
  
  const userOrders = orders.filter(o => o.userId === userId);
  
  res.json({
    service: "orders-service",
    message: `Órdenes del usuario ${userId}`,
    data: userOrders,
    total: userOrders.length,
    timestamp: new Date().toISOString()
  });
});

// Ruta de salud del servicio
app.get('/health', (req, res) => {
  res.json({
    status: "OK", 
    service: "orders-service",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Ruta raíz
app.get('/', (req, res) => {
  res.json({
    service: "orders-service",
    message: "Servicio de órdenes funcionando correctamente",
    endpoints: [
      "GET /orders - Lista todas las órdenes",
      "GET /orders/:id - Obtiene una orden específica",
      "GET /orders/user/:userId - Obtiene órdenes de un usuario",
      "GET /health - Estado del servicio"
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Orders Service corriendo en puerto ${PORT}`);
  console.log(`📋 Endpoints disponibles:`);
  console.log(`   GET http://localhost:${PORT}/orders`);
  console.log(`   GET http://localhost:${PORT}/orders/:id`);
  console.log(`   GET http://localhost:${PORT}/orders/user/:userId`);
  console.log(`   GET http://localhost:${PORT}/health`);
});