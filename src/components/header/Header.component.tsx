import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clsx } from 'clsx';

import logoMA from '@/assets/img/headerImg/logoMA.png';
import { BurgerMenu } from '@/components/burgerMenu/BurgerMenu.component.tsx';
import { Cart } from '@/components/cart/Cart.component.tsx';
import { Navigation } from '@/components/navigation/Navigation.component.tsx';
import { SwitcherTheme } from '@/components/switherTheme/SwitcherTheme.component.tsx';
import { UserAuthorization } from '@/components/userAuthorization/UserAuthorization.component.tsx';
import { setBurgerOpen } from '@/store/reducers/burger';
import { openBurgerMenu } from '@/store/selector';

import styles from './header.module.css';

export const HeaderComponent = () => {
    const dispatch = useDispatch();
    const burgerOpen = useSelector(openBurgerMenu);
    useEffect(() => {
        document.body.style.overflow = burgerOpen ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [burgerOpen]);
    return (
        <header className={styles.header}>
            <img className={styles.logoMA} src={logoMA} alt="Logo Masters academy" />
            <SwitcherTheme location={'header'} />
            <Navigation location={'header'} />
            <div className={styles.accountOptions}>
                <Cart isHeader />
                <UserAuthorization location={'header'} />
                <button onClick={() => dispatch(setBurgerOpen(!burgerOpen))} className={styles.burgerMenu}>
                    <div className={clsx(styles.burgerLineUp, { [styles.burgerLineUpActive]: burgerOpen === true })} />
                    <div className={clsx(styles.burgerLineDown, { [styles.burgerLineDownActive]: burgerOpen === true })} />
                </button>
            </div>
            {burgerOpen && <BurgerMenu />}
        </header>
    );
};
