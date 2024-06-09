import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Cart } from '@/components/cart/Cart.component.tsx';
import type { Product } from '@/interface/interfaceProductCategory.ts';

import styles from './productCard.module.css';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={product.images[0]} alt="Product" />
            <button className={styles.cardButton} onClick={() => navigate(`/product_page/${product.id}`)}>
                <h2 className={styles.cardTitle}>{product.title}</h2>
            </button>
            <div className={styles.cardBuy}>
                <span className={styles.cardPrice}>{product.price} </span>
                <Cart />
            </div>
        </div>
    );
};
