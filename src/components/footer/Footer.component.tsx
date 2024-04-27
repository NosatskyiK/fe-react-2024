import FooterIconComponent from '@/components/FooterIcon/FooterIcon.component.tsx';
import SocialNetworkData from '@/data/socialNetworkData.ts';

import styles from './footer.module.css';

export const FooterComponent = () => (
    <footer className={styles.footer}>
        <hr className={styles.horizontalLine} />
        <FooterIconComponent data={SocialNetworkData} />
        <p className={styles.footerDescription}>
            Made with &#x1f497; on course&nbsp;
            <a className={styles.footerLinkMA} href="https://www.mastersacademy.education/frontend-react-it">
                &lsquo;Intro to React&rsquo; from Masters Academy in 2024,
            </a>
            &nbsp;by Kostiantyn Nosatskyi
        </p>
    </footer>
);
