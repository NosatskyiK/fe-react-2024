import React from 'react';

import searchIcon from '@/assets/img/searchIcon.svg?url';
import { SortList } from '@/components/sortList/SortList.components.tsx';
import type { FiltersBarProps, FiltersButtons } from '@/interface/interfaceProductFilters.ts';

import styles from './filtersBar.module.css';

export const FiltersBar: React.FC<FiltersBarProps> = ({
    query,
    handleQueryParameter,
    setFilter,
    setCurrentPage,
    handleSearchButtonClick,
    searchInput,
    onSortChange,
}) => {
    const filterButtonsObject: FiltersButtons[] = [
        {
            name: 'Shoes',
            categoryId: 4,
        },
        {
            name: 'Electronics',
            categoryId: 2,
        },
        {
            name: 'Clothes',
            categoryId: 1,
        },
    ];
    return (
        <section className={styles.filtersBar}>
            <div className={styles.searchBar}>
                <input
                    className={styles.searchInput}
                    onChange={handleQueryParameter}
                    type="text"
                    value={searchInput}
                    placeholder="Search..."
                />
                <button className={styles.searchButton} onClick={() => handleSearchButtonClick()}>
                    <img className={styles.searchIcon} src={searchIcon} alt="search icon" />
                </button>
            </div>
            <div className={styles.filterButtons}>
                {filterButtonsObject.map((filterButton: FiltersButtons) => (
                    <button
                        key={filterButton.categoryId}
                        onClick={() => {
                            setFilter(filterButton.categoryId);
                            setCurrentPage(1);
                        }}
                        className={styles.filterButton}
                    >
                        {filterButton.name}
                    </button>
                ))}
            </div>
            <SortList onSortChange={onSortChange} />
        </section>
    );
};
