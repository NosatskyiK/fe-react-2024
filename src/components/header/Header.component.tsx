import cartWhite from '@/assets/img/headerImg/cartWhite.png';
import login from '@/assets/img/headerImg/login.png';
import logoMA from '@/assets/img/headerImg/logoMA.png';
import moon from '@/assets/img/headerImg/moon.png';
import signUp from '@/assets/img/headerImg/signUp.png';
import sun from '@/assets/img/headerImg/sun.png';

import styles from './header.module.css';
export const HeaderComponent = () => (
    <header className={styles.header}>
        <img className={styles.logoMA} src={logoMA} alt="Logo Masters academy" />
        <div className={styles.switcherTheme}>
            <button className={styles.themeDayBtn}>
                <img className={styles.themeDayImg} src={sun} alt="Switcher day theme" />
            </button>
            <div className={styles.vertLine}></div>
            <button className={styles.themeNightBtn}>
                <img className={styles.themeDayImg} src={moon} alt="Switcher night theme" />
            </button>
        </div>
        <nav>
            <ul className={styles.navMenu}>
                <li className={styles.menuItem}>
                    <a className={`${styles.menuLink} ${styles.activePage}`} href="/">
                        {/* I added the slash because the GitHub linter doesn't skip the hash */}
                        About
                    </a>
                </li>
                <li className={styles.menuItem}>
                    <a className={styles.menuLink} href="/">
                        Products
                    </a>
                </li>
            </ul>
        </nav>
        <div className={styles.accountOptions}>
            <button className={styles.cartBtn}>
                <img className={styles.cartWhite} src={cartWhite} alt="cart of user" />
            </button>
            <div className={styles.userAuthorization}>
                <button className={styles.loginIn}>
                    <img className={styles.loginInImg} src={login} alt="Login" />
                    Login
                </button>
                <button className={styles.signUp}>
                    <img className={styles.loginInImg} src={signUp} alt="sign up" />
                    Sign up
                </button>
            </div>
            <div className={styles.burgerMenu}>
                <div className={styles.burgerLine} />
                <div className={styles.burgerLine} />
            </div>
        </div>
    </header>
);
