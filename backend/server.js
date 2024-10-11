const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const quizRoutes = require('./routes/quizRoutes');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize express app
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// API routes
app.use('/api/quizzes', quizRoutes);

// Error Handler Middleware (must be after the routes)
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send(`
      <center>
          <h1>Welcome to the Quiz-Application!</h1>
          <br>
          <p>
              Get Quiz-Application: 
          <a href="https://github.com/RonakPatel2468/QUIZ_APPLICATION.git" target="_blank">Repository:QUIZ_APPLICATION </a>
          </p>
      </center>
  `);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
