import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Home = () => {
  
  const products = [
    { id: 1, name: 'Personalized Birthday Chocolate Hamper', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-personalized-birthday-chocolate-hamper-170514-m.jpg', price: '$19.99' },
    { id: 2, name: 'Chocolate Gift Box With Lantern And Personalized Card', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-chocolate-gift-box-with-lantern-and-personalized-card-153138-m.jpg', price: '$29.99' },
    { id: 3, name: 'Promise Personalized Heart Pop-Up Box With Treats', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-promise-personalized-heart-pop-up-box-with-treats-154040-m.jpg', price: '$39.99' },
    { id: 4, name: 'Rose-In-A-Box Personalized Exploding Box', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-rose-in-a-box-personalized-exploding-box-153222-m.jpg', price: '$39.99' },
    { id: 5, name: 'Mighty Thor Personalized Puzzle', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-mighty-thor-personalized-puzzle-190621-m.jpg', price: '$39.99' },
    { id: 6, name: 'Personalized Love Puzzle with Candy', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-personalized-love-puzzle-with-candy-204126-m.jpg', price: '$39.99' },
    { id: 7, name: 'Sleek Silver Essentials Combo For Men', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-sleek-silver-essentials-combo-for-men-267683-m.jpg', price: '$39.99' },
    { id: 8, name: 'Travel Mode Personalized Set with Scarf', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-travel-mode-personalized-set-with-scarf-192696-m.jpg', price: '$39.99' },
    { id: 9, name: 'Spider-Man Forever Personalized Cushion', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-spider-man-forever-personalized-cushion-186820-m.jpg', price: '$39.99' },
  ];

  return (
      <Container>
        <Typography variant="h1" align="center" gutterBottom >
        The best gifts are made with Love.
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

export default Home;
