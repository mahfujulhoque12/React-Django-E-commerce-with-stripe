import React, { useEffect, useState } from 'react';
import Headline from '../common/Headline';
import axios from 'axios';
import { domain } from '../env';
import { Grid } from '@mui/material';
import SingleCategory from './SingleCategory';

const CategoryesName = () => {
    const [categoryName, setCategoryName] = useState(null);

    useEffect(() => {
        const getCategory = async () => {
            await axios.get( `${domain}/api/categories/`)
            .then(res => {
                setCategoryName(res.data);
            }).catch(error => {
                console.log(error);
            })
        }
        getCategory()
    }, [])

    return (
        <>
            <Grid container spacing={3}>
                <Headline title='all' subtitle='Categories'></Headline>
                {categoryName?.map((item, i) => (
                    <Grid key={i} item xs={6} sm={3} md={2} lg={2}>
                        <SingleCategory item={item}></SingleCategory>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default CategoryesName;