import { AxiosRequestConfig } from 'axios';

declare global {
    export interface ErrorAlertConfig<T> {
        text: string;
        fallback: T;
        critical?: boolean;
        exclude?: number[];
    }

    export interface CustomRequestConfig<T> extends AxiosRequestConfig {
        errorAlert?: ErrorAlertConfig<T>;
    }

    export interface Media {
        id: number;
        attributes: {
            name: string;
            alternativeText: string;
            caption: string;
            width: number;
            height: number;
            formats: {
                thumbnail: MediaFormat;
                small: MediaFormat;
                medium: MediaFormat;
                large: MediaFormat;
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string;
            provider: string;
            createdAt: Date;
            updatedAt: Date;
        }
    }

    export interface MediaFormat {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        path: string;
        url: string;
    }

    export interface Article {
        id: number;
        attributes: {
            createdAt: Date; updatedAt: Date; publishedAt?: Date; title: string;
            description: string;
            cover: {
                data: Media
            };
            timeRead: number;
            writtenBy: string;
            date: Date;
            body: string;
            slug: string;
        };
    }

}
