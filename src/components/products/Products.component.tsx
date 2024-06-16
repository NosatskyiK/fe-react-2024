import React, { useEffect, useState } from 'react';

import { FiltersBar } from '@/components/filtersBar/FiltersBar.component.tsx';
import { Loading } from '@/components/loading/Loading.component.tsx';
import { Pagination } from '@/components/pagination/Pagination.component.tsx';
import { ProductList } from '@/components/productList/ProductList.component.tsx';

export const Products = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [totalPage, setTotalPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const countProductsOnPage = 8;
    const [isLoading, setLoading] = useState(true);
    const [filter, setFilter] = useState(0);
    // eslint-disable-next-line sonarjs/no-duplicate-string
    const [sortOption, setSortOption] = useState('Price (High - Low)');

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const response = await fetch(`https://ma-backend-api.mocintra.com/api/v1/products`);
                const result = await response.json();
                setTotalPage(Math.ceil(result.total / countProductsOnPage));
            } catch (error) {
                console.error(`Error get all products:`, error);
            }
        };
        getAllProducts();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const offset = (currentPage - 1) * countProductsOnPage;
                const sortField = getSortFieldFromOption(sortOption);
                const sortOrder = getSortOrderFromOption(sortOption);
                const response = await fetch(
                    `https://ma-backend-api.mocintra.com/api/v1/products?title=${query}&limit=${countProductsOnPage}&offset=${offset}&categoryId=${filter}&sortField=${sortField}&sortOrder=${sortOrder}`,
                );
                const result = await response.json();
                setData(result.products);
                setTimeout(() => setLoading(false), 1000);
            } catch (error) {
                console.error(`Error fetching data:`, error);
            }
        };
        fetchData();
    }, [currentPage, query, filter, sortOption]);
    const handleQueryParameter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };

    const handleSearchButtonClick = () => {
        setQuery(searchInput);
        setCurrentPage(1);
    };
    const handleSortChange = (selectedOption: string) => {
        setSortOption(selectedOption);
        setCurrentPage(1);
    };
    const getSortFieldFromOption = (option: string) => {
        switch (option) {
            case 'Price (High - Low)':
            case 'Price (Low - High)': {
                return 'price';
            }
            case 'Newest':
            case 'Oldest': {
                return 'creationAt';
            }
            default: {
                return 'price';
            }
        }
    };
    const getSortOrderFromOption = (option: string) => {
        switch (option) {
            case 'Price (High - Low)': {
                return 'desc';
            }
            case 'Price (Low - High)': {
                return 'asc';
            }
            case 'Newest': {
                return 'desc';
            }
            case 'Oldest': {
                return 'asc';
            }
            default: {
                return 'desc';
            }
        }
    };

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <FiltersBar
                        query={query}
                        handleQueryParameter={handleQueryParameter}
                        setFilter={setFilter}
                        setCurrentPage={setCurrentPage}
                        handleSearchButtonClick={handleSearchButtonClick}
                        searchInput={searchInput}
                        onSortChange={handleSortChange}
                    />
                    <ProductList products={data} />
                    {data.length > 0 && <Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                </>
            )}
        </>
    );
};
