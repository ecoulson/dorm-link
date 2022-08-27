export class FormStorage {
    addForm(name: string, data: FormData) {}

    getForm<T extends FormData>(name: string): T {}

    updateForm(name: string, data: FormData) {}
}
