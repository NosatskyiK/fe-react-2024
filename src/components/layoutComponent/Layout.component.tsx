import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { clsx } from 'clsx';

import { FooterComponent } from '@/components/footer/Footer.component.tsx';
import { HeaderComponent } from '@/components/header/Header.component.tsx';
import { setTheme } from '@/store/reducers/theme';
import { selectedTheme } from '@/store/selector';

export const LayoutPage = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectedTheme);

    useEffect(() => {
        const themeUser = localStorage.getItem('themeUser');
        if (themeUser) {
            dispatch(setTheme(themeUser));
        }
    }, [dispatch]);
    const themeClass = clsx(`${theme}Theme`);
    return (
        <div className={themeClass}>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>
    );
};
