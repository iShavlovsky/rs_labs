import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const defaultAxiosOptions: AxiosRequestConfig = {
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
};

const createHttp = (axiosOptions: AxiosRequestConfig): AxiosInstance => {
    return axios.create({ ...defaultAxiosOptions, ...axiosOptions });
};

export default createHttp;
