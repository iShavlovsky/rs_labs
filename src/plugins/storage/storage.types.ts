export interface IStorageClass {
    get(): string | null;
    set(value: string): void;
    remove(): void;
}

export interface IStorage {
    authToken: IStorageClass
    refreshToken: IStorageClass,
    userData: IStorageClass,
    regData: IStorageClass
}
