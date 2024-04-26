import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { domain } from '../env';
import { Container, Grid, Typography } from '@mui/material';
import AllProducts from '../common/AllProducts';

const SingleCategoryProducts = () => {
    const [product,setProduct]=useState()
    const {id}=useParams()

    useEffect(()=>{
        const getProduct = async()=>{
           await axios.get(`${domain}/api/singlecategorie/${id}/`)
           .then((res)=>
            setProduct(res.data[0])
            );

        }
        getProduct()
    },[])

    return (
      <Container>
        <Grid container direction='column' alignItems='center'>
        <Typography variant='h3'>{product?.title}</Typography>
        <Typography variant='p'>{product?.details}</Typography>

        <img src={product?.image} alt="iamge" style={{width:'50%',padding:'10px'}} />
        <AllProducts products={product?.products} showall={true}></AllProducts>
        </Grid>
      </Container>
    );
};

export default SingleCategoryProducts;