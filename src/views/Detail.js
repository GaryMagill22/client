import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";



const Detail = (props) => {
    const navigate = useNavigate();

    const [product, setProduct] = useState({});
    const { id } = useParams('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/` + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);


    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                // removeFromDom(product._id)
                navigate('/')
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1> Product Details</h1>
            <h3>{product.title}</h3>
            <h3>Price: ${product.price}</h3>
            <h4>Description: {product.description}</h4>
            <p><Link to={"/product/" + product._id + "/edit"}>
                Edit
            </Link></p>
            <button onClick={deleteProduct}>
                Delete
            </button>
        </div>
    )
}

export default Detail;

