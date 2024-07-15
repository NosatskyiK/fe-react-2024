import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SvgLoginIcon, SvgSignUpIcon } from '@/components/svgAuthentication/SvgAuthentication.component.tsx';

import styles from './AuthenticationButton.module.css';

export const Logout = () => {
    const navigate = useNavigate();
    const logout = () => {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
        if (window.confirm('Are you sure you want to exit?')) {
            navigate('/login/');
            window.location.reload();
        }
    };
    return (
        <button className={styles.logout} onClick={logout}>
            <SvgLoginIcon />
            Log out
        </button>
    );
};

export const SignUpButton = () => {
    const navigate = useNavigate();
    return (
        <button className={styles.signUp} onClick={() => navigate('signUp')}>
            <SvgSignUpIcon />
            Sign up
        </button>
    );
};

export const SignUpInActive = () => (
    <button className={styles.signUpInActive} disabled>
        <SvgSignUpIcon />
        Sign up
    </button>
);

export const LoginButton = () => {
    const navigate = useNavigate();
    return (
        <button className={styles.loginIn} onClick={() => navigate('login')}>
            <SvgLoginIcon />
            Login
        </button>
    );
};
