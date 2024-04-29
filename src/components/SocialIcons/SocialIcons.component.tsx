import facebookImg from '@/assets/img/footerImg/facebook.png';
import instagramImg from '@/assets/img/footerImg/instagram.png';
import linkedInImg from '@/assets/img/footerImg/linkedIn.png';
import { CreateSocialIcon } from '@/components/CreateSocialIcon/CreateSocialIcon.tsx';

import styles from './socialIcons.module.css';

export const SocialIcon = () => (
    <ul className={styles.socialNetwork}>
        <CreateSocialIcon img={facebookImg} url={'https://www.facebook.com/profile.php?id=100015349961940'} altName={'Facebook'} />
        <CreateSocialIcon img={instagramImg} url={'https://www.instagram.com/nosatskyi.k/'} altName={'Instagram'} />
        <CreateSocialIcon img={linkedInImg} url={'https://www.linkedin.com/in/костянтин-носацький-4617722a5/'} altName={'LinkedIn'} />
    </ul>
);
