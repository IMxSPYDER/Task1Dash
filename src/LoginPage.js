import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Grid,
  Link
} from '@mui/material';
import EverNote from './images/EverNote.png'
import GoogleIcon from './images/GoogleIcon.png';
import AppleIcon from '@mui/icons-material/Apple';
import './LoginC.css'
import { green, grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: grey,
      },
  });

function LoginPage() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className='Main'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '300px',
          margin: '20px 0',
          padding: '20px 80px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          backgroundColor: '#ffffff'
        }}
      >
        <img
          src={EverNote}
          alt="Evernote Logo"
          style={{ width: '100px', height: 'auto' }}
        />

        <div className='Title'>
          Evernote
        </div>
        <Typography variant="subtitle1" >
          Remember everything important.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Button
                dispaly="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                variant="outlined"
                backgroundColor="#fff"
                borderRadius="3px"
                padding="3px"
                fullWidth
                className='btn'
              >
                <div className="icons">
                    <img src={GoogleIcon} alt="" style={{width: '20px', height: '20px', padding:'0 5px 0 0'}} />
                </div>
                <div >
                Continue with Google

                </div>
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<AppleIcon />}
                className='btn'
              >
                Continue with Apple
              </Button>
            </Grid>

          
            <div className="orSecticon">

                <div className='line'> </div>
                <div className='tt'>or</div>
                <div className='line'> </div>

            </div>

            <Grid item xs={12}>
              <TextField
                label="Email address or username"
                variant="outlined"
                fullWidth
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color='success' type="submit" fullWidth>
                Continue
              </Button>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color='success' />}
                label="Remember me for 30 days"
                sx={{ mt: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
                Don't have an account?<br></br>
                <Link href="#" underline="hover" style={{color: "#2e7d32"}}>
                  Create account
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
 </ThemeProvider>
  );
}

export default LoginPage;