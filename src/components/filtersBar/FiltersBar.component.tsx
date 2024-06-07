import React from 'react';

import searchIcon from '@/assets/img/searchIcon.svg?url';
import { SortList } from '@/components/sortList/SortList.components.tsx';
import type { FiltersBarProps } from '@/interface/interfaceProductFilters.ts';

import styles from './filtersBar.module.css';

export const FiltersBar: React.FC<FiltersBarProps> = ({ onCategoryChange, onSortChange }) => (
    <section className={styles.filtersBar}>
        <div className={styles.searchBar}>
            <input className={styles.searchInput} type="text" placeholder="Search..." />
            <button className={styles.searchButton}>
                <img className={styles.searchIcon} src={searchIcon} alt="search icon" />
            </button>
        </div>
        <div className={styles.filterButtons}>
            <button className={styles.filterButton} onClick={() => onCategoryChange('Electronics')}>
                Electronics
            </button>
            <button className={styles.filterButton} onClick={() => onCategoryChange('Shoes')}>
                Shoes
            </button>
            <button className={styles.filterButton} onClick={() => onCategoryChange('Clothes')}>
                Clothes
            </button>
        </div>
        <SortList onSortChange={onSortChange} />
    </section>
);
