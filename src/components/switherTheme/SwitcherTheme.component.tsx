import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clsx } from 'clsx';

import { SvgDarkThemeIcon, SvgLightThemeIcon } from '@/components/svgTheme/SvgTheme.component.tsx';
import type { InterfaceBurgerMenu } from '@/interface/interfaceBurgerMenu.ts';
import { setTheme } from '@/store/reducers/theme';
import { selectedTheme } from '@/store/selector';

import styles from './switcherTheme.module.css';

export const SwitcherTheme: React.FC<InterfaceBurgerMenu> = ({ location }) => {
    const dispatch = useDispatch();
    const activeTheme = useSelector(selectedTheme);
    const changeTheme = (theme: string) => {
        dispatch(setTheme(theme));
        localStorage.setItem('themeUser', theme);
    };
    return (
        <div
            className={clsx(styles.switcherTheme, {
                [styles.switcherThemeHeader]: location === 'header',
                [styles.switcherThemeBurger]: location === 'burger',
            })}
        >
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
    );
};
