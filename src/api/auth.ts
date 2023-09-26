import { AxiosInstance } from 'axios';
import createErrorAlertConfig from '@utility/fallback';
import {
    IEmail,
    IEmailConfirm,
    ILoginBody,
    ILoginCallbackGoogle,
    IProfile,
    ISetPasswordBody,
    IUserResponse
} from '@/interfaces';

export default (http: AxiosInstance) => ({
    async profile() {
        const fallbackConfig = createErrorAlertConfig<IProfile>('Profile: ');
        try {
            const response = await http.get<IProfile>('/profile ', fallbackConfig);
            return { auth: true, profile: response.data };
        } catch (e) {
            return { auth: false };
        }
    },
    async register(body: IEmail) {
        const fallbackConfig = createErrorAlertConfig<IEmail>('Create new user: ');
        const response = await http.post<TLogin[]>(
            '/register',
            body,
            fallbackConfig
        );
        return response.data;
    },
    async registerConfirm(body: IEmailConfirm) {
        const fallbackConfig =
      createErrorAlertConfig<IUserResponse>('Confirm new user: ');
        const response = await http.post<IUserResponse[]>(
            '/register/confirm',
            body,
            fallbackConfig
        );
        return response.data;
    },
    async registerResend(body: IEmail) {
        const fallbackConfig =
      createErrorAlertConfig<IUserResponse>('Resend new user: ');
        const response = await http.post<IUserResponse[]>(
            '/register/confirm/resend',
            body,
            fallbackConfig
        );
        return response.data;
    },
    async login(body: ILoginBody) {
        const fallbackConfig = createErrorAlertConfig<IUserResponse>('Login: ');
        const response = await http.post<IUserResponse>(
            '/auth/login',
            body,
            fallbackConfig
        );
        return response.data;
    },
    async loginGoogle() {
        const fallbackConfig =
      createErrorAlertConfig<TLoginGoogle>('Login Google: ');
        const response = await http.post<TLoginGoogle>(
            '/auth/login/google',
            fallbackConfig
        );
        return response.data;
    },
    async loginCallbackGoogle(body: ILoginCallbackGoogle) {
        const fallbackConfig = createErrorAlertConfig<IUserResponse>(
            'Login Google Callback: '
        );
        const response = await http.post<IUserResponse>(
            '/auth/login/google/callback',
            body,
            fallbackConfig
        );
        return response.data;
    },
    async logout() {
        const fallbackConfig = createErrorAlertConfig<TLogout>('Logout: ');
        return await http.post<TLogout>('/auth/logout', fallbackConfig, {
            withCredentials: true
        });
    },
    async setPassword(body: ISetPasswordBody) {
        const fallbackConfig = createErrorAlertConfig<TPassword>('Set password: ');
        const response = await http.patch<TPassword>(
            '/auth/password',
            { body },
            fallbackConfig
        );
        return { ok: response.status === 200, data: response.data };
    },
    async resetPassword(body: IEmail) {
        const fallbackConfig =
      createErrorAlertConfig<TPassword>('Reset password: ');
        const response = await http.post<TPassword>(
            '/auth/password/reset',
            { body },
            fallbackConfig
        );
        return { ok: response.status === 200, data: response.data };
    }
});

export type TLoginGoogle = {
    url: string;
};
export type TLogin = {
    code: number;
    data: string;
};

export type TLogout = {
    code: number;
    message: string;
};

export type TPassword = string;
