import type { Product } from '@/interface/interfaceProductCategory.ts';

export interface ProductListProps {
    products: Product[];
}

export interface SortListProps {
    onSortChange: (sortCriteria: string) => void;
}

export interface FiltersBarProps {
    onCategoryChange: (onCategoryChange: string) => void;
    onSortChange: (sortCriteria: string) => void;
}
