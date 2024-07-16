import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { clsx } from 'clsx';

import { SvgCart } from '@/components/svgCart/SvgCart.component.tsx';

import styles from './cart.module.css';

interface CartProps {
    isHeader?: boolean;
}

export const Cart: React.FC<CartProps> = ({ isHeader }) => {
    const navigate = useNavigate();
    const [hasCount, setCount] = useState(false);
    const addCountCircle = () => {
        setCount(!hasCount);
    };
    const redirectPage = () => {
        navigate('/cartPage');
    };
    const verifyUser = async (accessToken: string | null) => {
        try {
            const response = await axios.get('https://ma-backend-api.mocintra.com/api/v1/auth/verify', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            if (response.status === 200) return true;
        } catch (error) {
            console.error('Authentication verification failed:', error);
        }
        return false;
    };
    const handleCartClick = async () => {
        const keyUser = sessionStorage.getItem('accessToken');
        try {
            const isAuthenticated = await verifyUser(keyUser);
            if (isAuthenticated) {
                isHeader ? redirectPage() : addCountCircle();
            } else {
                navigate('/login');
            }
        } catch (error) {
            console.error('Error during authentication:', error);
            navigate('/login');
        }
    };

    const onClickHandlerCart = () => {
        handleCartClick().catch((error) => {
            console.error('Error during handleCartClick:', error);
        });
    };
    return (
        <div>
            <button className={clsx(isHeader ? styles.cartBtn : styles.cartButton)} onClick={onClickHandlerCart}>
                <SvgCart />
                {hasCount && <div className={styles.circleCounter}>1</div>}
            </button>
        </div>
    );
};
