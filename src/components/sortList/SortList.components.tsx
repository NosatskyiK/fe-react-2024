import React, { useState } from 'react';

import styles from './sortList.module.css';

export const SortList = () => {
    const [willShowList, setShowList] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Price (High - Low)');

    const toggleList = () => setShowList(!willShowList);

    const listItems = ['Price (High - Low)', 'Price (Low - High)', 'Newest', 'Oldest'];

    return (
        <div className={styles.sort}>
            <span className={styles.sortLabel}>Sort by:</span>
            <div className={styles.sortList}>
                <button className={styles.listCurrent} onClick={toggleList}>
                    {selectedValue}
                </button>
                {willShowList && (
                    <div className={styles.listBody}>
                        {listItems.map((item) => (
                            <div
                                key={item}
                                className={styles.listItem}
                                onClick={() => {
                                    setSelectedValue(item);
                                    toggleList();
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
