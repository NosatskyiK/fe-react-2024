import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { clsx } from 'clsx';

import logoMA from '@/assets/img/headerImg/logoMA.png';
import { LoginButton, Logout, SignUpButton, SignUpInActive } from '@/components/authenticationButton/AuthenticationButton.component.tsx';
import { Cart } from '@/components/cart/Cart.component.tsx';
import { SvgDarkThemeIcon, SvgLightThemeIcon } from '@/components/svgTheme/SvgTheme.component.tsx';
import { setTheme } from '@/store/reducers/theme';
import { selectedTheme } from '@/store/selector';

import styles from './header.module.css';

export const HeaderComponent: React.FC = () => {
    const dispatch = useDispatch();
    const activeTheme = useSelector(selectedTheme);
    const [isAuthorizedUser, setAuthorizedUser] = useState(false);

    useEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken');
        if (accessToken === null) {
            setAuthorizedUser(false);
        } else {
            setAuthorizedUser(true);
        }
    }, [isAuthorizedUser]);

    const changeTheme = (theme: string) => {
        dispatch(setTheme(theme));
        localStorage.setItem('themeUser', theme);
    };
    return (
        <header className={styles.header}>
            <img className={styles.logoMA} src={logoMA} alt="Logo Masters academy" />
            <div className={styles.switcherTheme}>
                <button
                    className={clsx(styles.themeDayBtn, { [styles.activeTheme]: activeTheme === 'light' })}
                    onClick={() => {
                        changeTheme('light');
                        localStorage.setItem('themeUser', 'light');
                    }}
                >
                    <SvgLightThemeIcon activeTheme={activeTheme} />
                </button>
                <div className={styles.vertLine}></div>
                <button
                    className={clsx(styles.themeNightBtn, { [styles.activeTheme]: activeTheme === 'dark' })}
                    onClick={() => {
                        changeTheme('dark');
                        localStorage.setItem('themeUser', 'dark');
                    }}
                >
                    <SvgDarkThemeIcon activeTheme={activeTheme} />
                </button>
            </div>
            <nav>
                <ul className={styles.navMenu}>
                    <li className={styles.menuItem}>
                        <NavLink className={({ isActive }) => clsx(styles.menuBtn, { [styles.activePage]: isActive })} to="/">
                            About
                        </NavLink>
                    </li>
                    <li className={styles.menuItem}>
                        <NavLink className={({ isActive }) => clsx(styles.menuBtn, { [styles.activePage]: isActive })} to="/products">
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.accountOptions}>
                <Cart isHeader />
                <div className={styles.userAuthorization}>
                    {isAuthorizedUser ? (
                        <>
                            <Logout />
                            <SignUpInActive />
                        </>
                    ) : (
                        <>
                            <LoginButton />
                            <SignUpButton />
                        </>
                    )}
                </div>
                <div className={styles.burgerMenu}>
                    <div className={styles.burgerLine} />
                    <div className={styles.burgerLine} />
                </div>
            </div>
        </header>
    );
};
