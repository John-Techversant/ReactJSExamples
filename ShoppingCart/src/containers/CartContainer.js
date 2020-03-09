import React from "react"
import { useSelector } from 'react-redux';
import CartProduct from "../components/CartProduct/index"

function CartContainer(props) {

    const products = useSelector(store => store.cartProducts.cartProducts);

    return (
    <div>
        {   
           products && products.length ?
            products.map(product => <CartProduct product={ product}/>)
            :  
            <div style={{
                color:"rgb(125, 125, 125)",
            }} className="text-center p-5 h4">
                -- No Products in cart --
            </div>
        }
    </div>)
}

export default CartContainer;