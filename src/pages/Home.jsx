import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import { Container } from '@mui/material';
import TrandingProdcts from '../components/TrandingProdcts';
import CategoryesName from '../components/CategoryesName';
import MostView from '../components/MostView';
import BrandsName from '../components/BrandsName';
import CategorysProducts from '../components/CategorysProducts';

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Container>
                <TrandingProdcts></TrandingProdcts>
                <CategoryesName></CategoryesName>
                <MostView></MostView>
                <CategorysProducts></CategorysProducts>
                <BrandsName></BrandsName>
            </Container>
        </>
    );
};

export default Home;