import type { Product } from '@/interface/interfaceProductCategory.ts';

export interface ProductListProps {
    products: Product[];
    selectedCategory: string | null;
    sortCriteria: string;
}

export interface SortListProps {
    onSortChange: (sortCriteria: string) => void;
}

export interface FiltersBarProps {
    onCategoryChange: (category: string | null) => void;
    onSortChange: (sortCriteria: string) => void;
}
