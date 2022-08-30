import { ReactNode } from 'react';
import { HeadingSize } from './heading-size';

export interface HeadingComponentProps {
    children: ReactNode;
    size: HeadingSize;
}
