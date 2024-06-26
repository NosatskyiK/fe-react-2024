import { Route, Routes } from 'react-router-dom';

import { AboutMe } from '@/components/aboutMe/AboutMe.component.tsx';
import { LayoutPage } from '@/components/layoutComponent/Layout.component.tsx';
import { PageNotFound } from '@/components/pageNotFound/PageNotFound.component.tsx';
import { ProductPage } from '@/components/productPage/ProductPage.component.tsx';
import { Products } from '@/components/products/Products.component.tsx';

import './App.css';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<LayoutPage />}>
                <Route index element={<AboutMe />} />
                <Route path={'products'} element={<Products />} />
                <Route path={'product_page/:id'} element={<ProductPage />} />
                <Route path={'*'} element={<PageNotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
