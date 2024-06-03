import { useState } from 'react';

import { clsx } from 'clsx';

import { AboutMe } from '@/components/aboutMe/AboutMe.component.tsx';
import { FiltersBar } from '@/components/filtersBar/FiltersBar.component.tsx';
import { FooterComponent } from '@/components/footer/Footer.component.tsx';
import { HeaderComponent } from '@/components/header/Header.component.tsx';
import { ProductList } from '@/components/productList/ProductList.component.tsx';
import { products } from '@/data/ProductsData.ts';

import './App.css';

function App() {
    const [activePage, setActivePage] = useState('about');
    const [theme, setTheme] = useState('light');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [sortCriteria, setSortCriteria] = useState('Price (High - Low)');
    const themeClass = clsx(`${theme}Theme`);

    return (
        <div className={themeClass}>
            <HeaderComponent changeTheme={setTheme} activeTheme={theme} onPageChange={setActivePage} activePage={activePage} />
            <>
                {activePage === 'about' && <AboutMe />}
                {activePage === 'products' && (
                    <>
                        <FiltersBar onCategoryChange={setSelectedCategory} onSortChange={setSortCriteria} />
                        <ProductList products={products} selectedCategory={selectedCategory} sortCriteria={sortCriteria} />
                    </>
                )}
            </>
            <FooterComponent />
        </div>
    );
}

export default App;
