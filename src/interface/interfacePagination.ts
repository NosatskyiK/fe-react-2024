export interface PaginationProps {
    totalPage: number;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
}
