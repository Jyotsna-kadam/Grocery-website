import React from 'react'
import "./home.css";
import { FaBasketShopping } from 'react-icons/fa6';
import { Container, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function Footer() {
  return (
    <div className='foot'>
        <Container className='footer'>
        <Grid container spacing={3}>
            <Grid item xs={4}>
      <h1><FaBasketShopping className='basket'/>Groco</h1>
      <Typography>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Dolore Nisi Maiores Mollitia Provident!</Typography>
      <FacebookIcon/> <TwitterIcon/> <InstagramIcon/> <LinkedInIcon/>
      </Grid>

      <Grid item xs={4}>
      <h2>Contact Info</h2>
      <ArrowForwardIcon/>
      <Typography>+123-1332-1323</Typography>
      </Grid>

      <Grid item xs={4}>
      <h3>Newsletter</h3>
      <Typography>Subscribe For Latest Updates</Typography>
      <Box
      component="form"
      sx={{ m: 1, width: '25ch'}}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
      </Grid>

      </Grid>
      </Container>

    </div>
  )
}

export default Footer
