import React, { useEffect, useState } from 'react';
import { TextInputComponentProps } from './text-input-component-props';

export function TextInputComponent({
    renderer,
    onChange,
    value,
}: TextInputComponentProps) {
    const [input, setInput] = useState(value.getOrDefault(''));

    useEffect(() => {
        onChange(input);
    }, [input]);

    useEffect(() => {
        setInput(value.getOrDefault(''));
    }, [value]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    return (
        <>
            <label htmlFor={renderer.name}>{renderer.label}</label>
            <input
                value={input}
                name={renderer.name}
                id={renderer.name}
                type="text"
                placeholder={renderer.placeholder}
                onChange={handleChange}
            />
        </>
    );
}
