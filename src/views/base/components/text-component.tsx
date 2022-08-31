import React from 'react';
import { TextComponentProps } from './text-component-props';
import styles from '../../../styles/base/text.module.css';

export function TextComponent({ children }: TextComponentProps) {
    return <p className={styles.text}>{children}</p>;
}
