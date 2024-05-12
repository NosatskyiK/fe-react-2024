import React from 'react';

import { Cart } from '@/components/cart/Cart.component.tsx';
import type { Product } from '@/interface/interfaceProductCategory.ts';

import styles from './productCard.module.css';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className={styles.card}>
        <img className={styles.cardImage} src={product.images} alt="Product" />
        <h2 className={styles.cardTitle}>{product.title}</h2>
        <div className={styles.cardBuy}>
            <span className={styles.cardPrice}>{product.price} </span>
            <Cart />
        </div>
    </div>
);
