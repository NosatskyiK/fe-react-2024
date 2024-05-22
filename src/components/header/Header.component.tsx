import React from 'react';

import cartWhite from '@/assets/img/headerImg/cartWhite.png';
import login from '@/assets/img/headerImg/login.png';
import logoMA from '@/assets/img/headerImg/logoMA.png';
import signUp from '@/assets/img/headerImg/signUp.png';
import type { InterfacePageChange } from '@/interface/interfacePageChange.ts';

import styles from './header.module.css';

export const HeaderComponent: React.FC<InterfacePageChange> = ({ onPageChange, activePage, changeTheme, activeTheme }) => (
    <header className={styles.header}>
        <img className={styles.logoMA} src={logoMA} alt="Logo Masters academy" />
        <div className={styles.switcherTheme}>
            <button
                className={`${styles.themeDayBtn} ${activeTheme === 'light' ? styles.activeTheme : ''}`}
                onClick={() => changeTheme('light')}
            >
                <svg className={styles.svgThemeButton} viewBox="0 0 20 20">
                    <path
                        className={`${styles.pathSvgTheme} ${activeTheme === 'light' ? styles.activeButtonTheme : styles.inactiveButtonTheme}`}
                        d="M10 3.333V1.667m0 15v1.666M5.345 5.345 4.167 4.167m10.606 10.606 1.179 1.179M3.333 10H1.667m15 0h1.666m-3.56-4.655 1.18-1.178M5.345 14.773l-1.179 1.179M10 14.167a4.167 4.167 0 1 1 0-8.334 4.167 4.167 0 0 1 0 8.334Z"
                    />
                </svg>
            </button>
            <div className={styles.vertLine}></div>
            <button className={styles.themeNightBtn} onClick={() => changeTheme('dark')}>
                <svg className={styles.svgThemeButton} viewBox="0 0 20 20">
                    <path
                        className={`${styles.pathSvgTheme} ${activeTheme === 'dark' ? styles.activeButtonTheme : styles.inactiveButtonTheme}`}
                        d="M7.5 5a7.5 7.5 0 0 0 9.679 7.179 7.5 7.5 0 1 1-9.357-9.357A7.499 7.499 0 0 0 7.5 5Z"
                    />
                </svg>
            </button>
        </div>
        <nav>
            <ul className={styles.navMenu}>
                <li className={styles.menuItem}>
                    <button
                        className={`${styles.menuBtn} ${activePage === 'about' ? styles.activePage : ''}`}
                        onClick={() => onPageChange('about')}
                    >
                        About
                    </button>
                </li>
                <li className={styles.menuItem}>
                    <button
                        className={`${styles.menuBtn} ${activePage === 'products' ? styles.activePage : ''}`}
                        onClick={() => onPageChange('products')}
                    >
                        Products
                    </button>
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
