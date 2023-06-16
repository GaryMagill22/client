import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    // Submit Handler
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/product/new', {
            title,
            price,
            description
        })
            .then(res => console.log('Response: ', res))
            .catch(err => console.log('Error: ', err))
    }





    return (
        <div className="container" style={{ margin: "0 auto", width: "500px", padding: "20px" }}>
            <form onSubmit={onSubmitHandler} >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        Price:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description:
                    </label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                    Create
                </button>
            </form>
        </div>
    );
};


export default ProductForm