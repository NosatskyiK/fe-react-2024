import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Login } from '@/components/login/Login.component.tsx';
import { SvgLoginIcon, SvgSignUpIcon } from '@/components/svgAuthentication/SvgAuthentication.component.tsx';

import styles from './loginPage.module.css';
export const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmailUser] = useState('');
    const [password, setPasswordUser] = useState('');
    const [isErrorMessage, setErrorMessage] = useState('');
    const [isValidEmail, setValidEmail] = useState(false);
    const [isValidPassword, setValidPassword] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('https://ma-backend-api.mocintra.com/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) throw new Error('Login failed');

            const data = await response.json();

            sessionStorage.setItem('accessToken', data.access_token);
            sessionStorage.setItem('refreshToken', data.refresh_token);
            navigate('/');
            window.location.reload();
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('Invalid email or password. Please try again.');
        }
    };
    return (
        <div className={`${styles.loginContainer} ${styles.flexContainer}`}>
            <h2 className={styles.titleForm}>Login</h2>
            <form onSubmit={handleSubmit} className={`${styles.form} ${styles.flexContainer}`}>
                <Login
                    email={email}
                    password={password}
                    setEmailUser={setEmailUser}
                    setPasswordUser={setPasswordUser}
                    isValidEmail={isValidEmail}
                    setValidEmail={setValidEmail}
                    isValidPassword={isValidPassword}
                    setValidPassword={setValidPassword}
                    flexDirection="column"
                />
                <div className={`${styles.buttonContainer} ${styles.flexContainer}`}>
                    <button className={styles.buttonLogin} type={'submit'} disabled={!isValidEmail || !isValidPassword}>
                        <SvgLoginIcon />
                        Login
                    </button>
                    <button onClick={() => navigate('/signUp/')} className={styles.buttonSignUp}>
                        <SvgSignUpIcon />
                        Sign up
                    </button>
                    {isErrorMessage && <span>{isErrorMessage}</span>}
                </div>
            </form>
        </div>
    );
};
