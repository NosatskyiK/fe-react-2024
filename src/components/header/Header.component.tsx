import React from 'react';
import { NavLink } from 'react-router-dom';

import { clsx } from 'clsx';

import cartWhite from '@/assets/img/headerImg/cartWhite.png';
import login from '@/assets/img/headerImg/login.png';
import logoMA from '@/assets/img/headerImg/logoMA.png';
import signUp from '@/assets/img/headerImg/signUp.png';
import { SvgDarkThemeIcon, SvgLightThemeIcon } from '@/components/svgTheme/SvgTheme.component.tsx';
import type { InterfacePageChange } from '@/interface/interfacePageChange.ts';

import styles from './header.module.css';

export const HeaderComponent: React.FC<InterfacePageChange> = ({ changeTheme, activeTheme }) => (
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
            <button className={styles.cartBtn}>
                <img className={styles.cartWhite} src={cartWhite} alt="cart of user" />
            </button>
            <div className={styles.userAuthorization}>
                <button className={styles.loginIn}>
                    <img className={styles.loginInImg} src={login} alt="Login" />
                    Login
                </button>
                <button className={styles.signUp}>
                    <img className={styles.loginInImg} src={signUp} alt="sign up" />
                    Sign up
                </button>
            </div>
            <div className={styles.burgerMenu}>
                <div className={styles.burgerLine} />
                <div className={styles.burgerLine} />
            </div>
        </div>
    </header>
);
