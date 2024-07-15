import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Login } from '@/components/login/Login.component.tsx';
import { SvgLoginIcon, SvgSignUpIcon } from '@/components/svgAuthentication/SvgAuthentication.component.tsx';

import styles from './signUpPage.module.css';

export const SignUpPage = () => {
    const navigate = useNavigate();
    const [email, setEmailUser] = useState('');
    const [password, setPasswordUser] = useState('');
    const [isValidEmail, setValidEmail] = useState(false);
    const [isValidPassword, setValidPassword] = useState(false);
    return (
        <div className={`${styles.loginContainer} ${styles.flexContainer}`}>
            <h2 className={styles.titleForm}>Sign up</h2>
            <form className={`${styles.form} ${styles.flexContainer}`}>
                <div className={`${styles.inputContainer}`}>
                    <div className={styles.userNameContainer}>
                        <input className={styles.inputName} type="text" name={'firstName'} placeholder={'First name'} required />
                        <input className={styles.inputName} type="text" name={'lastName'} placeholder={'Last name'} required />
                    </div>
                    <div className={styles.authContainer}>
                        <Login
                            email={email}
                            password={password}
                            setEmailUser={setEmailUser}
                            setPasswordUser={setPasswordUser}
                            isValidEmail={isValidEmail}
                            setValidEmail={setValidEmail}
                            isValidPassword={isValidPassword}
                            setValidPassword={setValidPassword}
                            flexDirection="row"
                        />
                    </div>
                </div>
                <div className={`${styles.buttonContainer} ${styles.flexContainer}`}>
                    <button className={styles.buttonLogin} type={'submit'} disabled={!isValidEmail || !isValidPassword}>
                        <SvgSignUpIcon />
                        Sign up
                    </button>
                    <button className={styles.buttonSignUp} onClick={() => navigate('/login/')}>
                        <SvgLoginIcon />
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};
