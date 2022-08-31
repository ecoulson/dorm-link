import React from 'react';
import { TextInputComponentProps } from './text-input-component-props';
import styles from '../../../styles/base/text-input.module.css';
import { TextComponent } from './text-component';

export function TextInputComponent({
    renderer,
    onChange,
    value,
}: TextInputComponentProps) {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value);
    }

    return (
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor={renderer.name}>
                <TextComponent>{renderer.label}</TextComponent>
            </label>
            <input
                className={styles.input}
                value={value.getOrDefault('')}
                name={renderer.name}
                id={renderer.name}
                type="text"
                placeholder={renderer.placeholder}
                onChange={handleChange}
            />
        </div>
    );
}
