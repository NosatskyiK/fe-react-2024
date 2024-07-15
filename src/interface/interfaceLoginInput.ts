export interface InterfaceLoginInput {
    email: string;
    password: string;
    setEmailUser: (email: string) => void;
    setPasswordUser: (password: string) => void;
    isValidEmail: boolean;
    setValidEmail: (isValidEmail: boolean) => void;
    isValidPassword: boolean;
    setValidPassword: (isValidPassword: boolean) => void;
    flexDirection: 'column' | 'row';
}
