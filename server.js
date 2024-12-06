const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const taskRoutes = require('./src/routes/taskRoutes');
const { errorHandler } = require('./src/middleware/errorMiddleware');
const { logger } = require('./src/middleware/loggerMiddleware');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(logger); // Log incoming requests

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Database connection error:', err));

// Routes
app.use('/api/tasks', taskRoutes);

// Error handler
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
