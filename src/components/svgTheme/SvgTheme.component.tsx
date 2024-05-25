import React from 'react';

import { clsx } from 'clsx';

import styles from './svgTheme.module.css';

interface SvgThemeIconProps {
    activeTheme: string;
}

export const SvgLightThemeIcon: React.FC<SvgThemeIconProps> = ({ activeTheme }) => (
    <svg className={styles.svgThemeButton} viewBox="0 0 20 20">
        <path
            className={clsx(styles.pathSvgTheme, {
                [styles.activeButtonTheme]: activeTheme === 'light',
                [styles.inactiveButtonTheme]: activeTheme !== 'light',
            })}
            d="M10 3.333V1.667m0 15v1.666M5.345 5.345 4.167 4.167m10.606 10.606 1.179 1.179M3.333 10H1.667m15 0h1.666m-3.56-4.655 1.18-1.178M5.345 14.773l-1.179 1.179M10 14.167a4.167 4.167 0 1 1 0-8.334 4.167 4.167 0 0 1 0 8.334Z"
        />
    </svg>
);

export const SvgDarkThemeIcon: React.FC<SvgThemeIconProps> = ({ activeTheme }) => (
    <svg className={styles.svgThemeButton} viewBox="0 0 20 20">
        <path
            className={clsx(styles.pathSvgTheme, {
                [styles.activeButtonTheme]: activeTheme === 'dark',
                [styles.inactiveButtonTheme]: activeTheme !== 'dark',
            })}
            d="M7.5 5a7.5 7.5 0 0 0 9.679 7.179 7.5 7.5 0 1 1-9.357-9.357A7.499 7.499 0 0 0 7.5 5Z"
        />
    </svg>
);
