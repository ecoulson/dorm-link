import React from 'react';
import { TextInputComponentProps } from './text-input-component-props';

export function TextInputComponent({
    renderer,
    onChange,
    value,
}: TextInputComponentProps) {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value);
    }

    return (
        <>
            <label htmlFor={renderer.name}>{renderer.label}</label>
            <input
                value={value.getOrDefault('')}
                name={renderer.name}
                id={renderer.name}
                type="text"
                placeholder={renderer.placeholder}
                onChange={handleChange}
            />
        </>
    );
}
