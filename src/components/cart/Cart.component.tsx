import React, { useState } from 'react';

import cart from '@/assets/img/cart.svg';

import styles from './cart.module.css';

export const Cart = () => {
    const [hasNotAdded, setAdded] = useState(false);

    const toggleCart = () => {
        setAdded(!hasNotAdded);
    };

    return (
        <div>
            <button className={styles.cartButton} onClick={toggleCart}>
                <img className={styles.cartImage} src={cart} alt="cart" />
                {hasNotAdded && <div className={styles.circleCounter}>1</div>}
            </button>
        </div>
    );
};
