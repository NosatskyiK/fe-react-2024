import { ProductCard } from '@/components/productCard/ProductCard.component.tsx';
import type { Data, Product } from '@/interface/interfaceProductCategory.ts';

import styles from './productList.module.css';

export const ProductList: React.FC<Data> = ({ products }) =>
    products.length > 0 ? (
        <section className={styles.productList}>
            {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    ) : (
        <section className={styles.errorText}>
            <h2>Oops!</h2>
            <h3>Unfortunately, such a product has not been found.</h3>
            <span>Please check the name of the product, but it is quite possible that it is not yet in our assortment</span>
        </section>
    );
