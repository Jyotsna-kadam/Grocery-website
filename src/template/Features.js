import React from 'react';
import "./home.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid, TableRow, colors } from '@mui/material';

function Features() {
  return (
    <div>
      <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:40 ,marginBottom: 40}}>Our <span style={{color: 'white', backgroundColor: 'orange'}}>Features</span></h1>
    
      <Container>
          <Grid container spacing={3}>
            <Grid item xs={4}>
          <Card className='card' sx={{ maxWidth: 345, height:420}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="https://dhananajay12.github.io/Grocery-website-single-page/image/feature-img-1.png"
          alt="green iguana"
        />
        <CardContent className='feature-h'>
          <Typography gutterBottom variant="h5" component="div">
            Fresh And Organic
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="centered-btn-container">
        <Button className='feature-btn'>
          Read More
        </Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={4}>
      <Card className='card' sx={{ maxWidth: 345, height:420 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="https://dhananajay12.github.io/Grocery-website-single-page/image/feature-img-2.png"
          alt="green iguana"
        />
        <CardContent className='feature-h'>
          <Typography gutterBottom variant="h5" component="div">
            Free Delivery
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="centered-btn-container">
        <Button className='feature-btn'>
          Read More
        </Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={4}>
    <Card className='card' sx={{ maxWidth: 345, height: 420 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="https://dhananajay12.github.io/Grocery-website-single-page/image/feature-img-3.png"
          alt="green iguana"
        />
        <CardContent className='feature-h'>
          <Typography gutterBottom variant="h5" component="div">
            Easy Payments
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="centered-btn-container">
        <Button className='feature-btn'>
          Read More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
      </Container>

    </div>

  );
}

export default Features;
