import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Product.css'
// import {NavLink} from 'react-router-dom'

const Product = () => {
  const [product, setPruduct] = useState([]);
  const navigate = useNavigate();
  const URL = "https://fakestoreapi.com/products/";
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        // console.log(res);
        setPruduct(res.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  const showProduct = (id) => {
    // console.log(id);
    navigate(`/product/${id}`, { state: { id: id } });
  };
  return (
    <div className="cantiner">
      {product.map((product, index) => {
        // console.log(product.data)
        return (
          <div className="col-md-6" key={index}>
            <img
              src={product.image}
              height="400px"
              width="400px"
              onClick={Product}
            />
            {/* <Link to=""></Link> */}
            {/* <Link to= 'product/${id}' state={product.id} >View Product</Link> */}
            <button onClick={() => showProduct(product.id)}>
              View Product
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
