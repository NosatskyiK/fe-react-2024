import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SvgLoginIcon, SvgSignUpIcon } from '@/components/svgAuthentication/SvgAuthentication.component.tsx';
import { setBurgerOpen } from '@/store/reducers/burger';
import { openBurgerMenu } from '@/store/selector';

import styles from './AuthenticationButton.module.css';

export const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const burgerOpen = useSelector(openBurgerMenu);
    const logout = () => {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
        if (window.confirm('Are you sure you want to exit?')) {
            navigate('/login/');
            window.location.reload();
        }
    };
    return (
        <button
            className={styles.logout}
            onClick={() => {
                dispatch(setBurgerOpen(!burgerOpen));
                logout();
            }}
        >
            {window.screen.width >= 680 && <SvgLoginIcon />}
            Log out
        </button>
    );
};

export const SignUpButton = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const burgerOpen = useSelector(openBurgerMenu);
    return (
        <button
            className={styles.signUp}
            onClick={() => {
                navigate('signUp');
                dispatch(setBurgerOpen(!burgerOpen));
            }}
        >
            {window.screen.width >= 680 && <SvgSignUpIcon />}
            Sign up
        </button>
    );
};

export const SignUpInActive = () => (
    <button className={styles.signUpInActive} disabled>
        {window.screen.width >= 680 && <SvgSignUpIcon />}
        Sign up
    </button>
);

export const LoginButton = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const burgerOpen = useSelector(openBurgerMenu);
    return (
        <button
            className={styles.loginIn}
            onClick={() => {
                navigate('login');
                dispatch(setBurgerOpen(!burgerOpen));
            }}
        >
            {window.screen.width >= 680 && <SvgLoginIcon />}
            Login
        </button>
    );
};
