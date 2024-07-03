import styles from './countProduct.module.css';
interface TypeCountProduct {
    countProduct: number;
    currentCountProduct: number;
}

export const CountProduct: React.FC<TypeCountProduct> = ({ countProduct, currentCountProduct }) => (
    <div className={styles.countContainer}>
        <span>Total amount of products: {countProduct}</span>
        <span>Filtered amount of products: {currentCountProduct}</span>
    </div>
);
