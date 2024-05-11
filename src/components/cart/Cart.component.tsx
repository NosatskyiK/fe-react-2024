import { useState } from 'react';

import cart from '@/assets/img/cart.svg';

import styles from './cart.module.css';

export const Cart = () => {
    const [hasCount, setCount] = useState(false);
    return (
        <div>
            <button className={styles.cartButton} onClick={() => setCount(!hasCount)}>
                <img className={styles.cartImage} src={cart} alt="cart" />
                {hasCount && <div className={styles.circleCounter}>1</div>}
            </button>
        </div>
    );
};
