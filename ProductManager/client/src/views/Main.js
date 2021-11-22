import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForms from '../components/ProductForms';
import ProductList from '../components/ProductList';



const Main = () =>{

    const [ product, setProduct ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res =>{
                setProduct(res.data);
                setLoaded(true)
        });
    }, []);
    
    //const removeFromDom = prodId => {
    //    setProduct(product.filter(prod => prod._id !== prodId));
    //}

    const createProduct = (prod) => {
        axios.post("http://localhost:8000/api/product/new", prod)
            .then((res) => {
                setProduct([...product, res.data]);
            });
      };

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForms
            onSubmitProp={createProduct}
            initialTitle=""
            initialPrice=""
            initialDescription=""
          />
            <hr/>
            <h1>All Products: </h1>
            {loaded && <ProductList product={product} setProduct={setProduct}/>}
        </div>
    )
}

export default  Main;