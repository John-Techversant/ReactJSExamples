import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from "../../actions/index";
import styles from './style.module.scss';


const SingleProduct = props => {

    const dispatch = useDispatch();

    const { product } = props;

    const moveToCart = () => {
      dispatch(actions.addProductToCart(product));
    }

    return (
        <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-is-five">
            <div className={["card m-3",styles.cardContainer].join(' ')}>
              <div className={styles.imgContainer}>
              <img alt={product.name} src={product.image} className={styles.img} />
              </div>

              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.productPrice} INR</p>
                <button onClick={moveToCart} className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
        </div>
    )
}


export default SingleProduct;