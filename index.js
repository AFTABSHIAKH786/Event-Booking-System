const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
