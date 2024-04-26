import { AddShoppingCart } from '@mui/icons-material';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({item}) => {
 const navigate = useNavigate()
 const productDetails = ()=>{
    navigate(`/product-details/${item?.id}`)
 }
    return (
       <Card>
        <CardActionArea onClick={productDetails}>
        <CardMedia
        component='img'
        image={item?.image}
        height='150px'
        >         
        </CardMedia>
        </CardActionArea>
        <CardActionArea onClick={productDetails}>
            <CardContent>
                <Typography align='center' variant='h6'>{item?.title}</Typography>

                <Typography align='center'>
                    {
                        item?.oldprice && 
                        <Box component='span'
                        style={{
                            fontWeight: 'bold',
                            fontSize: 'large',
                            textDecoration:'line-through',
                            color:'red',
                            padding:'5px',
                        }}
                        >
                            { item?.oldprice}TK
                        </Box>
                    }
                    <Box component='span'
                        style={{
                            fontWeight: 'bold',
                            fontSize: 'large',
                            padding:'5px',
                        }}
                        >
                            { item?.price}TK
                        </Box>
                </Typography>
                
            </CardContent>
        </CardActionArea>
        <CardActions style={{justifyContent:'center'}}>
            <Button endIcon={<AddShoppingCart></AddShoppingCart>} variant='outlined' size='large' color='primary'>
                Add to cart
            </Button>
        </CardActions>
       </Card>

    );
};

export default SingleProduct;