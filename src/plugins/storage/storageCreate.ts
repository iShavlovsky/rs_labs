import { IStorage, IStorageClass } from '@plugins/storage/storage.types';

class StorageItem implements IStorageClass {
    private storage: Partial<Storage>;
    private readonly keyName: string;

    constructor(storage: Partial<Storage>, keyName: string) {
        this.storage = storage;
        this.keyName = keyName;
    }

    get(): string | null {
        return this.storage.getItem?.(this.keyName) ?? null;
    }

    set(value: string): void {
        this.storage.setItem?.(this.keyName, value);
    }

    remove(): void {
        this.storage.removeItem?.(this.keyName);
    }
}

export default (storage: Partial<Storage>): IStorage => ({
    authToken: new StorageItem(storage, 'ACCESS_TOKEN'),
    refreshToken: new StorageItem(storage, 'REFRESH_TOKEN'),
    userData: new StorageItem(storage, 'USER_DATA'),
    regData: new StorageItem(storage, 'REG_DATA')
});
