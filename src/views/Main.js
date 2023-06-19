import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';



// Loading all of the products - only outputting the list of products once we have gotten response from the api



const Main = (props) => {
    const { removeFromDom } = props;

    // setting the states
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    // Fetching the data, (products)
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
                console.log(res.data)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <ProductForm />
            <hr />
            {loaded && <ProductList product={product} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;



