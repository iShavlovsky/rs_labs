import { ICustomRequestConfig } from '@/interfaces';

function createErrorAlertConfig<T>(message: string): ICustomRequestConfig<T> {
    return {
        errorAlert: {
            text: message,
            fallback: <T>[]
        }
    };
}

export default createErrorAlertConfig;
