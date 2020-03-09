import React from "react"
import { useSelector } from 'react-redux';
import * as actions from "../actions";
import SingleProduct from "../components/Product"

function ProductsContainer(props) {
    const products = useSelector(store => store.products.products);

    return (
    <div className="d-flex flex-wrap">
        {products && products.length?
            products.map((product, i) => <SingleProduct key={product._id} product={product}/>)
            : null
        }
    </div>
    )
}

export default ProductsContainer;