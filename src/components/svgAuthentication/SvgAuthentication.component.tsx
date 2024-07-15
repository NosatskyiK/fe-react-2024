import styles from './svgAuthentication.module.css';

export const SvgLoginIcon: React.FC = () => (
    <svg className={styles.svgIcon} viewBox="0 0 20 20">
        <path
            className={styles.pathSvgIcon}
            d="m9.5 12.5 3-3m0 0-3-3m3 3h-11m5-4.751V4.7c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C8.02 1.5 8.58 1.5 9.7 1.5h4.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v9.607c0 1.117 0 1.676-.218 2.104a2.002 2.002 0 0 1-.875.874c-.427.218-.986.218-2.104.218H9.697c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C6.5 15.98 6.5 15.42 6.5 14.3v-.05"
        />
    </svg>
);

export const SvgSignUpIcon: React.FC = () => (
    <svg className={styles.svgIcon} viewBox="0 0 20 20">
        <path
            className={styles.pathSvgIcon}
            d="M13 16.5c0-2.21-2.686-4-6-4s-6 1.79-6 4m16-3v-3m0 0v-3m0 3h-3m3 0h3m-13-1a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
        />
    </svg>
);

export const SvgShowPassword: React.FC = () => (
    <svg className={styles.svgShowPassword} width="22" height="15" fill="none">
        <path
            className={styles.pathShowPassword}
            d="M2.586 9.279c1.78 1.769 4.883 4.22 8.414 4.22 3.53 0 6.633-2.451 8.413-4.22.469-.467.704-.7.854-1.159.106-.327.106-.913 0-1.24-.15-.458-.385-.692-.854-1.159C17.633 3.952 14.53 1.5 11 1.5c-3.531 0-6.634 2.452-8.414 4.221-.47.467-.704.7-.854 1.159-.106.327-.106.913 0 1.24.15.458.385.692.854 1.159Z"
        />
        <path className={styles.pathShowPassword} d="M9 7.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
    </svg>
);
