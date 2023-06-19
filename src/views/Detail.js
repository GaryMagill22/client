import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/` + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1> Product Details</h1>
            <h3>{product.title}</h3>
            <h3>Price: ${product.price}</h3>
            <h4>Description: {product.description}</h4>
        </div>
    )
}

export default Detail;

