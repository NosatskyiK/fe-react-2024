import React, { useState } from 'react';

import { ProductCard } from '@/components/productCard/ProductCard.component.tsx';
import type { ProductListProps } from '@/interface/interfaceProductFilters.ts';

import styles from './productList.module.css';

export const ProductList: React.FC<ProductListProps> = ({ products, selectedCategory, sortCriteria }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredProducts = selectedCategory ? products.filter((product) => product.category.name === selectedCategory) : products;

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortCriteria) {
            case 'Price (High - Low)': {
                return b.price - a.price;
            }
            case 'Price (Low - High)': {
                return a.price - b.price;
            }
            case 'Newest': {
                return new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime();
            }
            case 'Oldest': {
                return new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime();
            }
            default: {
                return 0;
            }
        }
    });

    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <section className={styles.productList}>
                {currentItems.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </section>
            <div className={styles.pagination}>
                <button
                    className={styles.paginationButton}
                    onClick={() => currentPage < totalPages && setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &#60;
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button className={styles.paginationButton} key={index} onClick={() => setCurrentPage(index + 1)}>
                        {index + 1}
                    </button>
                ))}
                <button
                    className={styles.paginationButton}
                    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &#62;
                </button>
            </div>
        </>
    );
};
