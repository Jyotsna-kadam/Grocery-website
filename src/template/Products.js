import React from 'react'
import "./home.css";
import { Button, Card, CardActionArea, CardActions, CardMedia, Container, Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';


function Products() {
  return (
    <div>
      <h2 className='prod-h'>
        Our <span style={{color: 'white', backgroundColor: 'orange'}}> Products</span>
      </h2>

      <Container>
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Card className='prod-card' sx={{ maxWidth: 345, height:300}}>
                    <CardActionArea className='prod-content'>
                        <CardMedia
                        component="img"
                        height="150"
                        image="https://dhananajay12.github.io/Grocery-website-single-page/image/product-4.png"
                        />
                        <Typography>Fresh Cabbage</Typography>
                        <Typography>$4.99/ -- 10.99/-</Typography>
                    </CardActionArea>
                    <CardActions className='prod-star'>
                        <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarHalfIcon/> 
                    </CardActions>
                    <CardActions className='prod-btn-item'>
                        <Button className='prod-btn'>
                            Add To Cart
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card className='prod-card' sx={{ maxWidth: 345, height:300}}>
                    <CardActionArea className='prod-content'>
                        <CardMedia
                        component="img"
                        height="150"
                        image="https://dhananajay12.github.io/Grocery-website-single-page/image/product-4.png"
                        />
                        <Typography>Fresh Cabbage</Typography>
                        <Typography>$4.99/ -- 10.99/-</Typography>
                    </CardActionArea>
                    <CardActions className='prod-star'>
                        <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarHalfIcon/> 
                    </CardActions>
                    <CardActions className='prod-btn-item'>
                        <Button className='prod-btn'>
                            Add To Cart
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card className='prod-card' sx={{ maxWidth: 345, height:300}}>
                    <CardActionArea className='prod-content'>
                        <CardMedia
                        component="img"
                        height="150"
                        image="https://dhananajay12.github.io/Grocery-website-single-page/image/product-4.png"
                        />
                        <Typography>Fresh Cabbage</Typography>
                        <Typography>$4.99/ -- 10.99/-</Typography>
                    </CardActionArea>
                    <CardActions className='prod-star'>
                        <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarHalfIcon/> 
                    </CardActions>
                    <CardActions className='prod-btn-item'>
                        <Button className='prod-btn'>
                            Add To Cart
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            
        </Grid>
      </Container>
    </div>
  )
}

export default Products
