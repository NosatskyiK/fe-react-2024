import React from 'react';

import cartWhite from '@/assets/img/headerImg/cartWhite.png';
import login from '@/assets/img/headerImg/login.png';
import logoMA from '@/assets/img/headerImg/logoMA.png';
import moon from '@/assets/img/headerImg/moon.png';
import signUp from '@/assets/img/headerImg/signUp.png';
import sun from '@/assets/img/headerImg/sun.png';
import type { InterfacePageChange } from '@/interface/interfacePageChange.ts';

import styles from './header.module.css';

export const HeaderComponent: React.FC<InterfacePageChange> = ({ onPageChange, activePage }) => (
    <header className={styles.header}>
        <img className={styles.logoMA} src={logoMA} alt="Logo Masters academy" />
        <div className={styles.switcherTheme}>
            <button className={styles.themeDayBtn}>
                <img className={styles.themeDayImg} src={sun} alt="Switcher day theme" />
            </button>
            <div className={styles.vertLine}></div>
            <button className={styles.themeNightBtn}>
                <img className={styles.themeDayImg} src={moon} alt="Switcher night theme" />
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
