import React from 'react';

import { SocialIcon } from '@/components/CreateSocialIcon/SocialIcon.tsx';
import type { socialNetworkData } from '@/data/SocialNetworkData.ts';

import styles from './socialIcons.module.css';

export const SocialIcons: React.FC<{ data: typeof socialNetworkData }> = ({ data }) => (
    <ul className={styles.socialNetwork}>
        {data.map((social, index) => (
            <SocialIcon key={index} img={social.img} url={social.url} altName={social.altName} />
        ))}
    </ul>
);
