import { FormData } from './form-data';

export class FormStorage {
    private readonly storage: Record<string, FormData>;

    constructor() {
        this.storage = {};
    }

    addForm(name: string, data: FormData) {
        this.storage[name] = data;
    }

    getForm<T extends FormData>(name: string): T {
        return this.storage[name] as T;
    }

    updateForm(name: string, data: FormData) {
        this.storage[name] = data;
    }
}
