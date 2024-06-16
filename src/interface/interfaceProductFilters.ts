import type { ChangeEvent } from 'react';

export interface SortListProps {
    onSortChange: (sortCriteria: string) => void;
}

export interface FiltersBarProps {
    setCurrentPage: (currentPage: number) => void;
    setFilter: (filter: number) => void;
    handleQueryParameter: (event: ChangeEvent<HTMLInputElement>) => void;
    query: string;
    handleSearchButtonClick: () => void;
    searchInput: string;
    onSortChange: (selectedOption: string) => void;
}

export interface FiltersButtons {
    name: string;
    categoryId: number;
}
