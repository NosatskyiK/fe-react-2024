import React from 'react';

import { ProductCard } from '@/components/productCard/ProductCard.component.tsx';
import { productsData } from '@/data/ProductsData.ts';

import styles from './productList.module.css';

export const ProductList = () => (
    <main className={styles.main}>
        <ProductCard data={productsData} />
    </main>
);
