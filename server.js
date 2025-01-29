const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./backend/routes/userRoutes');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve the static files from the React frontend (build folder)
app.use(express.static(path.join(__dirname, 'build')));

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);

// Serve React frontend for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'), (err) => {
    if (err) {
      console.error('Error while serving index.html:', err.message);
      res.status(500).send('An error occurred while trying to load the app.');
    }
  });
});

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  
  // Dynamically import the open package and open the browser
  const open = (await import('open')).default;
  open('http://localhost:5000'); // Replace with the URL of your React app
});
