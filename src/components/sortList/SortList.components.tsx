import React, { useState } from 'react';

import type { SortListProps } from '@/interface/interfaceProductFilters.ts';

import styles from './sortList.module.css';

export const SortList: React.FC<SortListProps> = ({ onSortChange }) => {
    const [willShowList, setShowList] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Price (High - Low)');

    const listItems = ['Price (High - Low)', 'Price (Low - High)', 'Newest', 'Oldest'];

    const handleSortChange = (item: string) => {
        setSelectedValue(item);
        setShowList(false);
        onSortChange(item);
    };

    return (
        <div className={styles.sort}>
            <span className={styles.sortLabel}>Sort by:</span>
            <div className={styles.sortList}>
                <button className={styles.listCurrent} onClick={() => setShowList(!willShowList)}>
                    {selectedValue}
                </button>
                {willShowList && (
                    <ul className={styles.listBody}>
                        {listItems.map((item) => (
                            <li key={item} className={styles.listItem} onClick={() => handleSortChange(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
