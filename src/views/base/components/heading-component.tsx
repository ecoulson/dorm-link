import React from 'react';
import { HeadingComponentProps } from './heading-component-props';
import { HeadingSize } from './heading-size';
import styles from '../../../styles/base/heading.module.css';

export function HeadingComponent({ children, size }: HeadingComponentProps) {
    switch (size) {
        case HeadingSize.Title:
            return <h1 className={styles.title}>{children}</h1>;
        case HeadingSize.Subtitle:
        default:
            return <h2 className={styles.subtitle}>{children}</h2>;
    }
}
