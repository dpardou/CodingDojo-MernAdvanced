import React from 'react'
import { Link } from '@reach/router';
import DeleteButton from './DeleteButon';

const ProductList = (props) => {

    const { product, setProduct } = props;

    const removeFromDom = (prodId) => {
        console.log(prodId)
        setProduct(product.filter(prod=>prod._id !== prodId));
    }

    return (
        <div>
            {product.map((prod, idx)=>{
                return (
                    <p key={idx}> 
                        <Link to={"/" + prod._id}>
                            {prod.title}
                        </Link>
                        |<Link to={"/" + prod._id + "/edit"}>
                            Edit
                        </Link> 
                        <DeleteButton 
                            productId={prod._id} 
                            successCallback={()=>removeFromDom(prod._id)} 
                        />
                    </p>
                )
            })}
        </div>
    )
}

export default ProductList;