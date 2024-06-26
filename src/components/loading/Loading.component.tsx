import styles from '@/components/loading/loading.module.css';

export const Loading = () => (
    <div className={styles.containerLoader}>
        <span className={styles.loader}>Loading...</span>
        <div className={styles.loadingLine}></div>
    </div>
);
