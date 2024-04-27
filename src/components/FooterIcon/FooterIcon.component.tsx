import type SocialNetwork from '@/interface/interfaceSocialNetwork.ts';

import styles from './footerIcon.module.css';

const SocialNetworkData: React.FC<{ data: SocialNetwork[] }> = ({ data }) => (
    <ul className={styles.socialNetwork}>
        {data.map((social, index) => (
            <li key={index} className={styles.socialItem}>
                <a href={social.url}>
                    <img className={styles.socialImg} src={social.img} alt={social.altName} />
                </a>
            </li>
        ))}
    </ul>
);

export default SocialNetworkData;
