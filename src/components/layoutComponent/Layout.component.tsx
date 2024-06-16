import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { clsx } from 'clsx';

import { FooterComponent } from '@/components/footer/Footer.component.tsx';
import { HeaderComponent } from '@/components/header/Header.component.tsx';

export const LayoutPage = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const themeUser = localStorage.getItem('themeUser');
        if (themeUser) {
            setTheme(themeUser);
        }
    }, []);
    const themeClass = clsx(`${theme}Theme`);
    return (
        <div className={themeClass}>
            <HeaderComponent changeTheme={setTheme} activeTheme={theme} />
            <Outlet />
            <FooterComponent />
        </div>
    );
};
