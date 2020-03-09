import React from 'react';
import styles from './style.module.scss';

const Header = props => {
    return (
		<div className={styles.containerDiv + ' d-none d-md-block'}>
			<div className={"container wide " + styles.topHeader}>
				<div className={styles.headerTopContainer}>
					<div className={styles.headerTopRight + " mr-20"}>
						<div className="text-center">
							<img alt="stripeImg 1" src={"/images/cashondelivery.png"} width="15" /><span>{'Cash On Delivery'}</span>
							<img alt="stripeImg 2" src={"/images/samedaydelivery.png"} width="15" /><span>{'Same Day Delivery'}</span>
							<img alt="stripeImg 3" src={"/images/securepayment.png"} width="15" /><span>{'Secure Payment'}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Header;