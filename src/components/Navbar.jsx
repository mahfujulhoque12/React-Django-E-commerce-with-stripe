import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const gohome = () => {
    navigate('/')
  }
    return (
      <AppBar position='sticky'>
        
        <Toolbar >
          <Button onClick={gohome} color='inherit'>
          <Typography>Badon-Shop</Typography>
          </Button>
        </Toolbar>
      
       
      </AppBar>
    );
};

export default Navbar;