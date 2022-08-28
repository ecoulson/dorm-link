import React, { useContext } from 'react';
import { CommandContext } from '../../commands/command-context';
import { ButtonComponentProps } from './button-component-props';

export function ButtonComponent({ renderer, onClick }: ButtonComponentProps) {
    const { dispatcher } = useContext(CommandContext);
    function handleClick() {
        if (renderer.command) {
            dispatcher.dispatch(renderer.command);
        }
        if (onClick.isPresent()) {
            const handler = onClick.get();
            handler();
        }
    }

    return <button onClick={handleClick}>{renderer.text}</button>;
}
