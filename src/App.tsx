import { Route, Routes } from 'react-router-dom';

import { AboutMe } from '@/components/aboutMe/AboutMe.component.tsx';
import { CartPage } from '@/components/cartPage/CartPage.component.tsx';
import { LayoutPage } from '@/components/layoutComponent/Layout.component.tsx';
import { LoginPage } from '@/components/loginPage/LoginPage.component.tsx';
import { PageNotFound } from '@/components/pageNotFound/PageNotFound.component.tsx';
import { ProductPage } from '@/components/productPage/ProductPage.component.tsx';
import { Products } from '@/components/products/Products.component.tsx';
import { SignUpPage } from '@/components/signUpPage/signUpPage.component.tsx';

import './App.css';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<LayoutPage />}>
                <Route index element={<AboutMe />} />
                <Route path={'products'} element={<Products />} />
                <Route path={'product_page/:id'} element={<ProductPage />} />
                <Route path={'login'} element={<LoginPage />} />
                <Route path={'signUp'} element={<SignUpPage />} />
                <Route path={'cartPage'} element={<CartPage />} />
                <Route path={'*'} element={<PageNotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
