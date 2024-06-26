import React from 'react';

import type { SocialNetwork } from '@/interface/interfaceSocialNetwork.ts';

import styles from './socialIcon.module.css';

export const SocialIcon: React.FC<SocialNetwork> = (props) => (
    <li className={styles.socialItem}>
        <a href={props.url}>
            <img className={styles.socialImg} src={props.img} alt={props.altName} />
        </a>
    </li>
);
