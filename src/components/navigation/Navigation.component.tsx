import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { clsx } from 'clsx';

import type { InterfaceBurgerMenu } from '@/interface/interfaceBurgerMenu.ts';
import { setBurgerOpen } from '@/store/reducers/burger';

import styles from './navigation.module.css';

export const Navigation: React.FC<InterfaceBurgerMenu> = ({ location }) => {
    const dispatch = useDispatch();
    return (
        <nav
            className={clsx(styles.navigation, {
                [styles.navigationHeader]: location === 'header',
                [styles.navigationBurger]: location === 'burger',
            })}
        >
            <ul className={styles.navMenu}>
                <li className={styles.menuItem}>
                    <NavLink
                        onClick={() => dispatch(setBurgerOpen(false))}
                        className={({ isActive }) => clsx(styles.menuBtn, { [styles.activePage]: isActive })}
                        to="/"
                    >
                        About
                    </NavLink>
                </li>
                <li className={styles.menuItem}>
                    <NavLink
                        onClick={() => dispatch(setBurgerOpen(false))}
                        className={({ isActive }) => clsx(styles.menuBtn, { [styles.activePage]: isActive })}
                        to="/products"
                    >
                        Products
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
