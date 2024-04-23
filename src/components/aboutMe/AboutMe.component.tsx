import title from '@/assets/img/title.png';

import styles from './aboutMe.module.css';

export const AboutMe = function () {
    return (
        <main className={styles.home}>
            <div className={styles.txt}>
                <h1 className={styles.txtTitle}>About me</h1>
                <p className={styles.txtParagraph}>
                    Hi! My name is Kostiantyn Nosatskyi and I&apos;m a Junior Frontend Developer. I am already familiar with main Web
                    Technologies like React, HTML, CSS, JavaScript and Git version control system.
                </p>
                <p className={styles.txtParagraph}>
                    This page was developed during the course&nbsp;
                    <a className={styles.link} href="https://www.mastersacademy.education/frontend-react-it">
                        &lsquo;Intro to React&rsquo;
                    </a>
                    &nbsp;from Masters Academy in 2024.
                </p>
                <p className={styles.txtParagraph}>
                    This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                    small project for the portfolio.
                </p>
                <p className={styles.txtParagraph}>
                    You can contact me via&nbsp;
                    <a className={styles.link} href="https://t.me/kostyaa_n">
                        Telegram
                    </a>
                    &nbsp;and check out my&nbsp;
                    <a className={styles.link} href="https://github.com/NosatskyiK">
                        GitHub
                    </a>
                    &nbsp;.
                </p>
            </div>
            <div className={styles.containerImg}>
                <img className={styles.img} src={title} alt="title img" />
            </div>
        </main>
    );
};
