// install this library first   npm install jsonwebtoken


const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const secretKey = 'your_secret_key'; // Replace with a strong, secret key

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Simulated user data (in a real application, this would come from a database)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check credentials (in a real app, this would involve database queries)
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    res.status(401).json({ message: 'Authentication failed' });
    return;
  }

  // Create a JWT token
  const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

  res.json({ token });
});

// Protected route that requires a valid token
app.get('/protected', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: 'Token is required' });
    return;
  }

  // Verify the token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: 'Token is invalid' });
      return;
    }

    // Token is valid, you can access protected resources
    res.json({ message: 'Welcome to the protected route!', user: decoded });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});