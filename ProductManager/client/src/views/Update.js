import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductForms from '../components/ProductForms';
import DeleteButton from '../components/DeleteButon';

const Update = (props) => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])
    const updateProduct = prod => {
        axios.put('http://localhost:8000/api/product/' + id, prod)
            .then(res => navigate("/")); 
    }
    return (
        <div>
            <Link to={"/"}>
                Home
            </Link> 
            <h1>Update a Product</h1>
            {loaded && (
                <>
                <ProductForms
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                />

                <DeleteButton 
                    productId={product._id} 
                    successCallback={() => navigate("/")} 
                />
                </>
            )}
        </div>
    )
}

export default Update;