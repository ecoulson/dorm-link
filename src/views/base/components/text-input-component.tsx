import React from 'react';
import { TextInputComponentProps } from './text-input-component-props';

export function TextInputComponent({
    renderer,
    onChange,
}: TextInputComponentProps) {
    return (
        <>
            <label htmlFor={renderer.name}>{renderer.label}</label>
            <input
                name={renderer.name}
                id={renderer.name}
                type="text"
                placeholder={renderer.placeholder}
                onChange={(event) => onChange(event.target.value)}
            />
        </>
    );
}
