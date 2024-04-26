import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { domain } from '../env';
import { Box, Container, Grid } from '@mui/material';
import Headline from '../common/Headline';
import AllProducts from '../common/AllProducts';

const CategorysProducts = () => {

    const [categoryProducts, setCategoryProducts] = useState(null);

    const getCategory = async () => {
        await axios.get(`${domain}/api/categoryproduct/`)
            .then(res => {
                setCategoryProducts(res.data,);

            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {

        getCategory()

    }, [])

    return (
        <Grid Container direction='column'>
            {categoryProducts?.map((item,i)=><Box key={i}>
                <>
                <Headline title={item?.title} subtitle='products'></Headline>
                <AllProducts products={item?.products} categoryTitle={item?.title} categoryId={item.id}></AllProducts>
                </>
            </Box>)}
        </Grid>
    );
};

export default CategorysProducts;