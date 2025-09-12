const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy', 
    service: '${{ values.name }}',
    version: process.env.VERSION ? process.env.VERSION : '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to ${{ values.name }}',
    description: '${{ values.description }}',
    serviceType: '${{ values.serviceType }}',
    endpoints: ['/health']
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`${{ values.name }} service running on port ${PORT}`);
  console.log(`Service type: ${{ values.serviceType }}`);
  if ('${{ values.serviceType }}' === 'external' && '${{ values.prefixDomain }}') {
    console.log(`External access: https://${{ values.prefixDomain }}.linkedfarma.com.br`);
  }
});

module.exports = app;
