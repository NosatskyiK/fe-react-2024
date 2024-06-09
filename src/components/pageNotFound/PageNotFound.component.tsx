import { Link } from 'react-router-dom';

import styles from './pageNotFound.module.css';

export const PageNotFound = () => (
    <section className={styles.errorText}>
        <h2>Oops!</h2>
        <h3>404 - page not found!</h3>
        <span>Maybe we are just working on this page, or maybe it doesn&apos;t exist at all...( </span>
        <span>let&apos;s start all over shall we? </span>
        <Link className={styles.backButton} to={'/'}>
            start all over again
        </Link>
    </section>
);
