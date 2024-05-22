export interface InterfacePageChange {
    onPageChange: (onPageChange: string) => void;
    activePage: string;
    changeTheme: (changeTheme: string) => void;
    activeTheme: string;
}
