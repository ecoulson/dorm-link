import { GetServerSidePropsResult, NextPageContext } from 'next';
import { PageContext } from './page-context';

export interface PropsRetriever<Props> {
    retrieve(context: PageContext): Promise<GetServerSidePropsResult<Props>>;
}
