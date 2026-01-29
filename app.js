const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from PM2 Deployment!',
    timestamp: new Date().toISOString(),
    deployment: 'Traditional VM via Ansible'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});