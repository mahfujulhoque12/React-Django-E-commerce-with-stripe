import { Card,Box, CardActionArea, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate} from 'react-router-dom';


const SingleCategory = ({item}) => {
    const navigate = useNavigate()

    const showCategoryProducts = ()=>{
        navigate(`single-product/${item.id}`)
    }
    return (
        <CardActionArea onClick={showCategoryProducts}>
            <Card style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#6275A3',
                backgroundImage: `url(${item.image})`,
                backgroundSize:'100%, 100%',
                padding:'5px',
                color:'white'
            }}>
                <Box>
                 
                    <Typography variant='h4'>{item?.title}</Typography>
                   
                </Box>
            </Card>
        </CardActionArea>
         
    );
};

export default SingleCategory;