import { useState } from 'react';

import styles from './cart.module.css';

export const Cart = () => {
    const [hasCount, setCount] = useState(false);
    return (
        <div>
            <button className={styles.cartButton} onClick={() => setCount(!hasCount)}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.cartSvg}>
                    <path
                        className={styles.cartImg}
                        d="M15.17 15.823c-1.104 0-2 .953-2 2.129 0 1.175.896 2.129 2 2.129 1.105 0 2-.953 2-2.13 0-1.175-.895-2.128-2-2.128Zm0 0H7.464c-.46 0-.692 0-.881-.088a1.016 1.016 0 0 1-.42-.359c-.118-.177-.165-.414-.26-.883L3.442 2.266c-.097-.48-.146-.72-.266-.9a1.017 1.017 0 0 0-.418-.36C2.568.92 2.338.92 1.877.92H1.17m3 3.194h12.874c.721 0 1.082 0 1.324.16.212.14.368.36.436.616.077.292-.023.661-.223 1.4l-1.384 5.109c-.12.441-.18.662-.301.825a1.012 1.012 0 0 1-.409.328c-.18.078-.395.078-.824.078H5.9m.27 7.452c-1.105 0-2-.953-2-2.13 0-1.175.895-2.128 2-2.128 1.104 0 2 .953 2 2.129 0 1.175-.896 2.129-2 2.129Z"
                    />
                </svg>
                {hasCount && <div className={styles.circleCounter}>1</div>}
            </button>
        </div>
    );
};
