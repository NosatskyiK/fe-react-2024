import styles from '@/components/pagination/pagination.module.css';
import type { PaginationProps } from '@/interface/interfacePagination.ts';

export const Pagination: React.FC<PaginationProps> = ({ totalPage, currentPage, setCurrentPage }) => {
    const pageNumber = [];
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    for (let index = 1; index <= totalPage; index++) {
        pageNumber.push(
            <button
                className={`${styles.paginationButton} ${index === currentPage ? styles.activeButtonPage : ''}`}
                key={index}
                onClick={() => handlePageChange(index)}
                disabled={index === currentPage}
            >
                {index}
            </button>,
        );
    }
    return (
        <div className={styles.pagination}>
            <button className={styles.paginationButton} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                &#60;
            </button>
            {pageNumber}
            <button
                className={styles.paginationButton}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPage}
            >
                &#62;
            </button>
        </div>
    );
};
