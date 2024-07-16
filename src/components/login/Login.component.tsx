import React, { useEffect, useState } from 'react';

import { clsx } from 'clsx';

import { SvgShowPassword } from '@/components/svgAuthentication/SvgAuthentication.component.tsx';
import type { InterfaceLoginInput } from '@/interface/interfaceLoginInput.ts';

import styles from './login.module.css';

export const Login: React.FC<InterfaceLoginInput> = ({
    email,
    password,
    setPasswordUser,
    setEmailUser,
    isValidEmail,
    isValidPassword,
    setValidPassword,
    setValidEmail,
    flexDirection,
}) => {
    const [isTouchEmailInput, setTouchEmailInput] = useState(false);
    const [isTouchPasswordInput, setTouchPasswordInput] = useState(false);
    const [isShowPassword, setShowPassword] = useState(false);

    const handleInputEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailUser(event.target.value);
        setTouchEmailInput(true);
    };
    const handleInputPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordUser(event.target.value);
        setTouchPasswordInput(true);
    };
    useEffect(() => {
        const isEmailRegx = /^[\w.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,4}$/;
        const isPasswordRegx = /^.{5,12}$/;
        setValidEmail(isEmailRegx.test(email));
        setValidPassword(isPasswordRegx.test(password));
    }, [setValidPassword, setValidEmail, email, password]);
    return (
        <div
            className={clsx(styles.inputContainer, {
                [styles.flexColumn]: flexDirection === 'column',
                [styles.flexRow]: flexDirection === 'row',
            })}
        >
            <input
                className={clsx(styles.inputEmail, {
                    [styles.validInput]: isValidEmail && isTouchEmailInput,
                    [styles.invalidInput]: !isValidEmail && isTouchEmailInput,
                })}
                type="text"
                onChange={handleInputEmailChange}
                value={email}
                name={'loginEmail'}
                placeholder={'Email address'}
            />
            <div className={styles.passwordContainer}>
                <input
                    className={clsx(styles.inputPassword, {
                        [styles.validInput]: isValidPassword && isTouchPasswordInput,
                        [styles.invalidInput]: !isValidPassword && isTouchPasswordInput,
                    })}
                    type={isShowPassword ? 'text' : 'password'}
                    onChange={handleInputPasswordChange}
                    value={password}
                    name={'loginPassword'}
                    placeholder={'Password'}
                />
                <button className={styles.showPasswordButton} type="button" onClick={() => setShowPassword(!isShowPassword)}>
                    <SvgShowPassword />
                </button>
            </div>
        </div>
    );
};
