import React from 'react';

import { Cart } from '@/components/cart/Cart.component.tsx';
import type { productsData } from '@/data/ProductsData.ts';

import styles from './productCard.module.css';

export const ProductCard: React.FC<{ data: typeof productsData }> = ({ data }) => (
    <>
        {data.map((props, index) => (
            <div className={styles.card} key={index}>
                <img className={styles.cardImage} src={props.images} alt="Product" />
                <h2 className={styles.cardTitle}>{props.title}</h2>
                <div className={styles.cardBuy}>
                    <span className={styles.cardPrice}>{props.price} </span>
                    <Cart />
                </div>
            </div>
        ))}
    </>
);
