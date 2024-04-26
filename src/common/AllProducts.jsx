import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import SingleProduct from './SingleProduct';
import { DoubleArrowSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AllProducts = ({ products, showall = false,categoryTitle,categoryId }) => {
    const navigate = useNavigate()

    const showCategoryProducts = ()=>{
        navigate(`single-product/${categoryId}`)
    }


    return (
        <Grid container spacing={2} style={{marginTop:'15px'}}>

            {products?.map((item, i) => (
                <>
                    {
                        showall ? <Grid key={i} item md={6} sm={4}>
                            <SingleProduct item={item} key={i}></SingleProduct>
                        </Grid> :
                            <>
                                {
                                    i < 6 && (
                                        <Grid key={i} item md={2} sm={4}>
                                            <SingleProduct item={item} key={i}></SingleProduct>
                                        </Grid>
                                    )
                                }
                            </>
                    }
                </>


            ))}
            {
               ( products?.length > 6 && !showall) && 
               <Grid item 
               md={2}
               sm={4}
               style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
               }}
               >
                    <Button onClick={showCategoryProducts}>
                        <Typography>
                            See More
                        </Typography>
                        <DoubleArrowSharp></DoubleArrowSharp>
                    </Button>
               </Grid>
            }

        </Grid>
    );
};

export default AllProducts;