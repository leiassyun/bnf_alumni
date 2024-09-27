// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const alumniRoutes = require('./routes/alumniRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (replace with your MongoDB connection string if needed)
mongoose.connect('mongodb://localhost:27017/bnf_alumni', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Use the alumni routes
app.use('/', alumniRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
