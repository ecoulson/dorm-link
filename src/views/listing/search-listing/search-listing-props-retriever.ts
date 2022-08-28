import { GetServerSidePropsResult } from 'next';
import { PageContext } from '../../page-context';
import { PropsRetriever } from '../../props-retriever';
import { ListingView } from '../listing-view';
import { SearchListingProps } from './search-listing-props';

export class SearchListingPropsRetriever
    implements PropsRetriever<SearchListingProps>
{
    constructor(private readonly view: ListingView) {}

    async retrieve(
        context: PageContext
    ): Promise<GetServerSidePropsResult<SearchListingProps>> {
        if (!context.query['city']) {
            return {
                props: {
                    renderer: await this.view.buildSearchListingView(''),
                },
            };
        }
        return {
            props: {
                renderer: await this.view.buildSearchListingView(
                    context.query['city'] as string
                ),
            },
        };
    }
}
