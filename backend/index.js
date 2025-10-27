const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
