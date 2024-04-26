import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { domain } from './../env';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHome } from '@fortawesome/free-solid-svg-icons';
import { faEye as farEye } from '@fortawesome/free-regular-svg-icons';

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProductDetail] = useState([])

    useEffect(() => {
        const getproductdetails = async () => {
            await axios.get(`${domain}/api/productDetails/${id}/`)
                .then(res =>setProductDetail(res.data[0]))
        }
        getproductdetails()
    }, [])

    return (
        <>
        <div className='container'>
          <div className="row mt-4 mb-5">
            <div className="col-md-4">
              <img style={{ width: '100%', height: "100%" }} src={product?.image} className='img' alt="" />
            </div>
            <div className="col-md-8">
              <h4>{product?.title}</h4>
              {product?.category?.map((item, index) => (
                <button key={index} className='btn btn-outline-light text-dark'>{item.title}</button>
              ))}
          
                {
                       <div className='mt-4'>
                
                       <button className='btn btn-outline-info'>{product?.brand?.title}</button>
                       </div>
                  }
             
                {
                  product?.discount >0 && <h5 className='text-info'> discount : {product?.discount} % off</h5>
                }
                 {
                  product?.oldprice && <h5 className='text-danger'> Old Price: <del>{product?.oldprice} tk</del></h5>
                }
                 {
                  product?.price && <h5>Now price : {product?.price} tk</h5>
                }
                <button className='btn btn-info'>add to card</button>
               <h6 className='mt-3'>View : {product?.view}  
               
                     <FontAwesomeIcon icon={faEye} className='ms-1' />
               </h6>
               <p><b>Product Details:</b> {product?.details} {} </p>

               <h5 className='text-center'>Review</h5>
               <hr />
               <textarea name="" id="" className='w-100' placeholder='add your review here'>
             
               </textarea>
               <button className='btn btn-success'>submit</button>
               {product?.review?.map((item)=>{
                console.log(item,'----------');
                return(
                  <div>
                    <h5>title: {item?.title}</h5>
                    <h6>address: {item?.customer?.address}</h6>
                    <h6>username: {item?.customer?.username}</h6>
                    <h6>name :{item?.customer?.name}</h6>
                    <h6>pone {item?.customer?.mobile}</h6>


                  </div>
                )
               })}
            </div>
          </div>
        </div>
      </>
      
      

    );
};

export default ProductDetails;