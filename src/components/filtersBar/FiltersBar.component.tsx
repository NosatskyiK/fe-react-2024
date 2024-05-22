import React from 'react';

import searchIcon from '@/assets/img/searchIcon.svg';
import { SortList } from '@/components/sortList/SortList.components.tsx';

import styles from './filtersBar.module.css';

export const FiltersBar = () => (
    <section className={styles.filtersBar}>
        <div className={styles.searchBar}>
            <input className={styles.searchInput} type="text" placeholder="Search..." />
            <button className={styles.searchButton}>
                <img src={searchIcon} alt="search icon" />
            </button>
        </div>
        <div className={styles.filterButtons}>
            <button className={styles.filterButton}>Electronics</button>
            <button className={styles.filterButton}>Shoes</button>
            <button className={styles.filterButton}>Clothes</button>
        </div>
        <SortList />
    </section>
);
