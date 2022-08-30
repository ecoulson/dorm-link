import React from 'react';
import { HeadingComponentProps } from './heading-component-props';
import { HeadingSize } from './heading-size';

export function HeadingComponent({ children, size }: HeadingComponentProps) {
    switch (size) {
        case HeadingSize.Title:
            return <h1>{children}</h1>;
        case HeadingSize.Subtitle:
        default:
            return <h2>{children}</h2>;
    }
}
