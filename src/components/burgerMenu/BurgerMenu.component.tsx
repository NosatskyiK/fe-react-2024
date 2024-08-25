import { Navigation } from '@/components/navigation/Navigation.component.tsx';
import { SwitcherTheme } from '@/components/switherTheme/SwitcherTheme.component.tsx';
import { UserAuthorization } from '@/components/userAuthorization/UserAuthorization.component.tsx';

import styles from './burgerMenu.module.css';

export const BurgerMenu = () => (
    <div className={styles.burgerMenu}>
        <Navigation location={'burger'} />
        <UserAuthorization location={'burger'} />
        <SwitcherTheme location={'burger'} />
    </div>
);
