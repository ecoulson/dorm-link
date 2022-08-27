import React from 'react';
import { ButtonComponentProps } from './button-component-props';

export function ButtonComponent({
    renderer,
    onClick,
    commandDispatcher,
}: ButtonComponentProps) {
    function handleClick() {
        if (renderer.command) {
            commandDispatcher.dispatch(renderer.command);
        } else if (onClick.isPresent()) {
            const handler = onClick.get();
            handler();
        }
    }

    return <button onClick={handleClick}>{renderer.text}</button>;
}
