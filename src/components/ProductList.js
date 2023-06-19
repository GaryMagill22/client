import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



const ProductList = (props) => {
    const { product } = props;
    const { removeFromDom } = props;



    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {product.map((product, i) => (
                    <p><Link to={`/product/${product._id}`} key={i}>{product.title}</Link></p>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;

