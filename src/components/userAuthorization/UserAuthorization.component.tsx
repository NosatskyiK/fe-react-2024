import React, { useEffect, useState } from 'react';

import { clsx } from 'clsx';

import { LoginButton, Logout, SignUpButton, SignUpInActive } from '@/components/authenticationButton/AuthenticationButton.component.tsx';
import type { InterfaceBurgerMenu } from '@/interface/interfaceBurgerMenu.ts';

import styles from './userAuthorization.module.css';
export const UserAuthorization: React.FC<InterfaceBurgerMenu> = ({ location }) => {
    const [isAuthorizedUser, setAuthorizedUser] = useState(false);

    useEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken');
        if (accessToken === null) {
            setAuthorizedUser(false);
        } else {
            setAuthorizedUser(true);
        }
    }, [isAuthorizedUser]);
    return (
        <div
            className={clsx(styles.userAuthorization, {
                [styles.userAuthorizationHeader]: location === 'header',
                [styles.userAuthorizationBurger]: location === 'burger',
            })}
        >
            {isAuthorizedUser ? (
                <div className={styles.authorizationButton}>
                    <Logout />
                    <SignUpInActive />
                </div>
            ) : (
                <div className={styles.authorizationButton}>
                    <LoginButton />
                    <SignUpButton />
                </div>
            )}
        </div>
    );
};
