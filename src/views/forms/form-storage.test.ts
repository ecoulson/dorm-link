import { FormStorage } from './form-storage';

describe('Form Storage Test Suite', () => {
    const storage = new FormStorage();

    test('Should add a form to storage', () => {
        storage.addForm('form', {});

        const form = storage.getForm('form');

        expect(form).toEqual({});
    });

    test('Should update a form', () => {
        storage.addForm('form', {});

        storage.updateForm('form', {
            foo: 'bar',
        });

        const form = storage.getForm('form');

        expect(form).toEqual({
            foo: 'bar',
        });
    });
});
