import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButon';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, []);
    return (
        <div>
            <Link to={"/"}>
                    Home
            </Link>
            <h2> Products Detail:</h2>
            <h3>Title: {product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>

            <Link to={"/" + product._id + "/edit"}>Edit</Link>
            <DeleteButton 
                    productId={product._id} 
                    successCallback={() => navigate("/")} 
            />
        </div>
    )
}

export default Detail;