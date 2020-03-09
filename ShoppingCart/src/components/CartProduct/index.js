import React from 'react';
import styles from './style.module.scss';
import { useDispatch } from 'react-redux';
import { deleteProductFromCart } from '../../actions/cartActions';

const CartProduct = props => {

  const { product } = props;

  const dispatch = useDispatch();

  const delProduct = () => {
    dispatch(deleteProductFromCart(product._id));
  }

  return (
    <div className="row">
      <div className={["col-12 p-3 d-flex", styles.productRow].join(' ')}>
        <div className="col-2">
          <img src={product.image} alt={product.name} className={["img-fluid",  styles.productImg].join(' ')} />
        </div>
        <div className={[styles.productTitle, "col-4"].join(' ')}>
          <span>{product.name}</span>
        </div>
        <div>
          {product.productPrice} INR
        </div>
        <div className={styles.deleteCartItem}>
          <i className="fa fa-times" onClick={delProduct} aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}



export default CartProduct;