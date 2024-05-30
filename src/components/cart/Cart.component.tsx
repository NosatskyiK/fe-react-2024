import { useState } from 'react';

import { SvgCart } from '@/components/svgCart/SvgCart.component.tsx';

import styles from './cart.module.css';

export const Cart = () => {
    const [hasCount, setCount] = useState(false);
    return (
        <div>
            <button className={styles.cartButton} onClick={() => setCount(!hasCount)}>
                <SvgCart />
                {hasCount && <div className={styles.circleCounter}>1</div>}
            </button>
        </div>
    );
};
