import React, { useEffect, useState } from 'react';
import HeaderStrip from './HeaderStrip';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = props => {
    const [pulse,setPulse] = useState(false);
    const cartQuantity = useSelector(store => store.cartProducts.cartProducts.length);

    useEffect(() => {
        setPulse(true);
        setTimeout(() => {
            setPulse(false);
        }, 1000);
    }, [cartQuantity]);

    return (
        <header>
            <HeaderStrip />
            <div className={["row", styles.headerContainer].join(' ')}>
                <div className="col-2 p-2 pl-4 pl-md-5 d-flex align-items-center">
                    <Link to="/">
                        <span className={styles.logo}>ShopWithUs!</span>
                    </Link>
                </div>
                <div className={"col-10 text-right p-3 pr-md-5 " + styles.rightIcons}>
                    <Link to="/">
                        <span className="ml-2 mr-3">Products</span>
                    </Link>
                    <Link to="/mycart">
                        <>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            <span className="ml-2">Cart</span>
                            <span className={styles.step}>
                                <span className={pulse ? styles.pulseButton: ""}>{cartQuantity}</span>
                            </span>
                        </>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;