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

    type ExtractMediaFields<T> = {
        [K in keyof T]: T[K] extends {
            data: Media
        } ? K : never;
    }[keyof T];

    type OptionalMediaKeys = ExtractMediaFields<Article['attributes']>;

    type MediaAttributeKeys = keyof Media['attributes'];

    type OptionalMediaFields = {
        [K in OptionalMediaKeys]?: { fields: MediaAttributeKeys[] };
    };

    export interface Article {
        id: number;
        attributes: {
            createdAt: Date;
            updatedAt: Date;
            publishedAt?: Date;
            title: string;
            description: string;
            cover: {
                data: Media
            };
            timeRead: number;
            writtenBy: string;
            date: Date;
            body: string;
            slug: string;
            type: TypeArticle;
        };
    }

    export interface Payload {
        data: Article[];
        meta: Pagination
    }

    export interface ApiParameters {
        sort?: (string)[] | string | null;
        filters?: Filter | DeepFilter;
        populate?: OptionalMediaFields;
        fields?: (string)[] | null;
        pagination?: {
            pageSize?: number;
            page?: number;
        };
        publicationState?: string;
        locale?: (string)[] | string | null;
    }

    export interface DeepFilter {
        [key: string]: Filter
    }

    export interface Filter {
        [key: string]: FilterOperators
    }

    export interface Pagination {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        }
    }

    export interface FilterOperators {
        $eq?: string;
        $eqi?: string;
        $ne?: string;
        $lt?: string;
        $lte?: string;
        $gt?: string;
        $gte?: string;
        $in?: string;
        $notIn?: string;
        $contains?: string;
        $notContains?: string;
        $containsi?: string | (string)[];
        $notContainsi?: string;
        $null?: string;
        $notNull?: string;
        $between?: string;
        $startsWith?: string;
        $startsWithi?: string;
        $endsWith?: string;
        $endsWithi?: string;
        $or?: string;
        $and?: string;
        $not?: string;
    }
}
