import { NextPageContext } from 'next';

export type PageContext = Omit<NextPageContext, 'AppTree'>;
