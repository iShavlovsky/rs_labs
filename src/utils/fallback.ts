function createErrorAlertConfig<T>(message: string): CustomRequestConfig<T> {
    return {
        errorAlert: {
            text: message,
            fallback: <T>[]
        }
    };
}

export default createErrorAlertConfig;
