import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material';
import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const av = { backgroundColor: '#b27764' };
  const te = { margin: '10px 0' };
  const btn = { margin: '8px 0' };

  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');

  const log = (event) => {
    event.preventDefault();
    setUser(username);
    setPassword(password);
  };

  const onlog = () => {
    console.log(username);
    console.log(password);
    navigate('/')
  };
  const navigate=useNavigate();

  return (
    <div style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp9352738.jpg")', backgroundSize: 'cover', height: '100vh' }}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
        <Paper elevation={10} style={{ padding: '30px', width: '45vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar style={av}>
            <LockIcon />
          </Avatar>
          <h2 style={{ paddingBottom: '20px' }}>Login</h2>
          <form style={te}>
            <TextField label="Username" placeholder="Enter Username" onChange={log} style={{ paddingBottom: '20px' }} required />
            <TextField label="Password" placeholder="Enter Password" type="password" onChange={(e) => setPassword(e.target.value)} style={{ paddingBottom: '20px' }} required />
            <p fullwidth></p>
            <Button type="submit" variant="contained" color="primary" style={btn} onClick={onlog}>
              Login
            </Button>
          </form>
          <Typography>
            <Link href="#">Forget Password ?</Link>
          </Typography>
          <Typography>
            Do you have an account ?<Link href="#" onClick={()=>navigate('/signup')}>Sign Up ?</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
