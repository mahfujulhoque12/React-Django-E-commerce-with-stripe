import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { domain } from '../env';

const BrandsName = () => {
    const [brand,setBrand]=useState()

    useEffect(()=>{
        const getBrands = async() =>{
          await axios.get(`${domain}/api/brandsname/`)
          .then(res => setBrand(res.data))
          .catch(err => console.error(err))
        }
        getBrands()
    },[])

    return (
      <div className="container">
        <div className="row">
            {brand?.map((br)=>
            <div className="col-md-4">
                <h3>Brand Name: <small>{br.title}</small></h3>
                <img src={br.logo} className='img w-25' alt="" />
                <p>{br.details}</p>
                <p>{br.date}</p>
            </div>
        )}
            
        </div>
      </div>
    );
};

export default BrandsName;


