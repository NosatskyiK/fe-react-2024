import { SocialIcons } from '@/components/SocialIcons/SocialIcons.component.tsx';
import { socialNetworkData } from '@/data/SocialNetworkData.ts';

import styles from './footer.module.css';

export const FooterComponent = () => (
    <footer className={styles.footer}>
        <hr className={styles.horizontalLine} />
        <SocialIcons data={socialNetworkData} />
        <p className={styles.footerDescription}>
            Made with &#x1f497; on course&nbsp;
            <a className={styles.footerLinkMA} href="https://www.mastersacademy.education/frontend-react-it">
                &lsquo;Intro to React&rsquo; from Masters Academy in 2024,
            </a>
            &nbsp;by Kostiantyn Nosatskyi
        </p>
    </footer>
);
