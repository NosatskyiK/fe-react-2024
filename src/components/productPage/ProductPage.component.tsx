import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { SvgCart } from '@/components/svgCart/SvgCart.component.tsx';
import type { Product } from '@/interface/interfaceProductCategory.ts';

import styles from './productPage.module.css';

export const ProductPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { product } = location.state as { product: Product };
    const [imageTitle, setImageTitle] = useState(product ? product.images[0] : '');
    if (!product) {
        return <h2 className={styles.errorMessage}>Product not found!</h2>;
    }
    return (
        <section className={styles.product}>
            <div className={styles.productImage}>
                <div className={styles.secondaryImages}>
                    {product.images.map((item) => (
                        <img
                            key={item}
                            className={`${styles.secondaryImage} ${item === imageTitle ? styles.activeImage : ''}`}
                            src={item}
                            alt="Product"
                            onClick={() => setImageTitle(item)}
                        />
                    ))}
                </div>
                <img className={styles.titleImage} src={imageTitle} alt="Product" />
            </div>
            <div className={styles.productTxt}>
                <div className={styles.title}>
                    <h2 className={styles.productTitle}>{product.title}</h2>
                    <span className={styles.productCategory}>{product.category.name}</span>
                </div>
                <p className={styles.productMainTxt}>{product.description}</p>
                <span className={styles.productPrice}>{product.price} </span>
                <button className={styles.productBuyButton}>
                    <SvgCart />
                    Add to cart
                </button>
            </div>
            <button className={styles.buttonBack} onClick={() => navigate(-1)}>
                Back
            </button>
        </section>
    );
};
