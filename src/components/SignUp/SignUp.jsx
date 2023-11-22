// src/Signup.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log('Signing up...');
    navigate('/')
  };

  const containerStyle = {
    padding: '20px',
    marginTop: '50px',
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://wallpapercave.com/wp/wp8374417.jpg")', // Add your image URL here
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensures the background covers the entire viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const navigate=useNavigate();

  return (
    <div style={backgroundStyle}>
      <Container component="main" maxWidth="xs" style={containerStyle}>
        <Paper elevation={10} style={{ padding: '20px' }}>
          <Typography variant="h5">Sign Up</Typography>
          <form>
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSignUp}
              style={{ marginTop: '20px' }}
              
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Signup;
