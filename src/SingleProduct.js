import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";




const SingleProduct = () => {
  const [product, setProduct] = useState("");

  const location = useLocation();
  const navigate = useNavigate()
  console.log(location.state.id);
  const id = location.state.id;

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);


  function payment(){
    navigate('/payment')
  }
  return (
    <div>
      <img src={product.image} style={{width:"30%", height:"25%"}}></img>
      <div>{product.description}</div>
     <h4> {product.price} </h4>
      <button onClick={payment} style={{color:'blue'}}>Buy</button>
    </div>
  );
};

export default SingleProduct;
