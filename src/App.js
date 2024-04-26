import { Container, Typography } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SingleCategoryProducts from './pages/SingleCategoryProducts';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route  element={<Home></Home>} path='/'></Route>
        <Route  element={<SingleCategoryProducts></SingleCategoryProducts>} path='/single-product/:id'></Route>
        <Route element={<ProductDetails></ProductDetails>} path='/product-details/:id'></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;

