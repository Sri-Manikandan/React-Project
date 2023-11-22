import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const CustomizedProducts = () => {
  const products = [
    { id: 1, name: 'Personalized Romantic Couple Mugs', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-personalized-romantic-couple-mugs-199224-m.jpg', price: '$14.79' },
    { id: 2, name: 'Anniversary Personalized Heart Pop-Up Box', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-anniversary-personalized-heart-pop-up-box-148951-m.jpg', price: '$29.99' },
    { id: 3, name: 'Personalized Heart Pendant Chain', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-personalized-heart-pendant-chain-200526-m.jpg', price: '$39.99' },
    { id: 4, name: 'Rose-In-A-Box Personalized Exploding Box', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-rose-in-a-box-personalized-exploding-box-153222-m.jpg', price: '$39.99' },
    { id: 5, name: 'Mighty Thor Personalized Puzzle', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-mighty-thor-personalized-puzzle-190621-m.jpg', price: '$39.99' },
    { id: 6, name: 'Personalized LED Fur Cushion For Anniversary', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-personalized-led-fur-cushion-for-anniversary-166619-m.jpg', price: '$21.89' },
    { id: 7, name: 'You And Me Forever LED Lamp - Personalized - Anniversary', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-you-and-me-forever-led-lamp-personalized-anniversary-240714-m.jpg', price: '$49.99' },
    { id: 8, name: 'Photo Cake for Best Friends (Half Kg)', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-photo-cake-for-best-friends-half-kg--133092-m.jpg', price: '$33.99' },
    { id: 9, name: 'Sweets in the air Personalized Birthday Hamper', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-sweets-in-the-air-personalized-birthday-hamper-170519-m.jpg', price: '$40.99' },
  
  ];

  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
      Customized your birthday and anniversary gift
      </Typography>
      <Grid container spacing={10}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="textSecondary">{product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CustomizedProducts;
