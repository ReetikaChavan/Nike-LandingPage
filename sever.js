const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// For any request, send back the React app's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'), (err) => {
    if (err) {
      console.error('Error while serving index.html:', err.message);
      res.status(500).send('An error occurred while trying to load the app. Please try again later.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
