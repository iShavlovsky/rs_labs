import { AxiosRequestConfig } from 'axios';

export interface IAlert {
    id: number;
    text: string;
    critical: boolean;
}

export interface IPageSettings {
    setTitle?: string;
    setDescription?: string;
    setKeywords?: string;
    setAuthor?: string;
    setRobots?: string;
    setOgType?: string;
    setSiteName?: string;
    setOgImage?: string;
    setUrl?: string;
    setStatus?: number;
}

export interface IErrorAlertConfig<T> {
    text: string;
    fallback: T;
    critical?: boolean;
    exclude?: number[];
}
export interface ICustomRequestConfig<T> extends AxiosRequestConfig {
    errorAlert?: IErrorAlertConfig<T>;
}

export interface IExcludeFP {
    plugins?: boolean;
    screenResolution?: boolean;
    [key: string]: boolean | undefined;
}

export interface IEmail {
    email: string;
}

export interface IPassword {
    password: string;
}

export interface IFingerprint {
    fingerprint: string;
}

export interface IEmailConfirm extends IEmail {
    otp: string;
}

export interface ILoginBody extends IEmail, IPassword {}

export interface ISetPasswordBody extends IEmail, IPassword {
    confirm_password: string;
}

export interface IConfirmEmail extends IEmail {
    otp: string;
}
export interface IUserResponse {
    code: number;
    data: {
        access_token: string;
        refresh_token: string;
        user_id: string;
    };
}

export interface IResponse<T> {
    code: number;
    data: T;
}

export interface ILoginCallbackGoogle {
    code: string;
    errorReason: string;
    prompt: string;
    scope: string;
    state: string;
}

export interface IProfile {
    code: number;
    data: {
        bio: string;
        email: string;
        image: string;
        is_confirmed: true;
        name: string;
        social: {
            behance: string;
            instagram: string;
            linkedin: string;
            twitter: string;
        };
        id: string;
    };
}

export interface IToken {
    exp: number;
    iat?: number;
    user_id?: string;
}
