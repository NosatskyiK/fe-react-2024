import React from 'react';

import type { SocialNetwork } from '@/interface/interfaceSocialNetwork.ts';

import styles from './createSocialIcon.module.css';

export const CreateSocialIcon: React.FC<SocialNetwork> = (props) => (
    <li className={styles.socialItem}>
        <a href={props.url}>
            <img className={styles.socialImg} src={props.img} alt={props.altName} />
        </a>
    </li>
);
