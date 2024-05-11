import { useState } from 'react';

import { AboutMe } from '@/components/aboutMe/AboutMe.component.tsx';
import { FooterComponent } from '@/components/footer/Footer.component.tsx';
import { HeaderComponent } from '@/components/header/Header.component.tsx';
import { ProductList } from '@/components/productList/ProductList.component.tsx';
import { products } from '@/data/ProductsData.ts';

import './App.css';

function App() {
    const [activePage, setActivePage] = useState('about');

    return (
        <>
            <HeaderComponent onPageChange={setActivePage} activePage={activePage} />
            <>
                {activePage === 'about' && <AboutMe />}
                {activePage === 'products' && <ProductList products={products} />}
            </>
            <FooterComponent />
        </>
    );
}

export default App;
