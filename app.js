require('dotenv').config(); // Load environment variables
const express = require('express');
const app = express();

// Get the PORT value from .env, default to 3000 if not set
const PORT = process.env.PORT || 3000;

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, World! Your Node.js app is running inside a Docker container!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
