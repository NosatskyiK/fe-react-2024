import React from 'react';

import { ProductCard } from '@/components/productCard/ProductCard.component.tsx';
import type { Product } from '@/interface/interfaceProductCategory.ts';

import styles from './productList.module.css';

export const ProductList: React.FC<{ products: Product[] }> = ({ products }) => (
    <section className={styles.productList}>
        {products.map((product, index) => (
            <ProductCard key={index} product={product} />
        ))}
    </section>
);
