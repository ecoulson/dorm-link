import { useContext, useEffect, useState } from 'react';
import { FormContext } from './form-context';
import { FormData } from './form-data';

export function useForm<T extends FormData>(name: string, defaultValues: T) {
    const { formStorage } = useContext(FormContext);

    formStorage.addForm(name, defaultValues);

    const [form, setForm] = useState(formStorage.getForm<T>(name));

    useEffect(() => {
        formStorage.updateForm(name, form);
    }, [form]);

    return { form, setForm };
}
