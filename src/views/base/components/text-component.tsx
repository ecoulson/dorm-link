import React from 'react';
import { TextComponentProps } from './text-component-props';

export function TextComponent({ children }: TextComponentProps) {
    return <p>{children}</p>;
}
