const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint for Uptime Robot / cron-job.org
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'Ultra-premium instance is active 💀', timestamp: new Date() });
});

// Serve the main application
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Ultra-Premium Weather running on port ${PORT}`);
});
