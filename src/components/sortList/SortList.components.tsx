import React, { useState } from 'react';

import styles from './sortList.module.css';

export const SortList = () => {
    const [willShowList, setShowList] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Price (High - Low)');

    const listItems = ['Price (High - Low)', 'Price (Low - High)', 'Newest', 'Oldest'];

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
                            <li
                                key={item}
                                className={styles.listItem}
                                onClick={() => {
                                    setSelectedValue(item);
                                    setShowList(!willShowList);
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
