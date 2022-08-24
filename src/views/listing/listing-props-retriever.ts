import { GetServerSidePropsResult } from 'next';
import { PageContext } from '../page-context';
import { PropsRetriever } from '../props-retriever';
import { DisplayListingRender } from './display-listing-renderer';
import { ListingView } from './listing-view';

export interface ListingProps {
    renderer: DisplayListingRender;
}

export class ListingPropsRetriever implements PropsRetriever<ListingProps> {
    constructor(private readonly view: ListingView) {}

    async retrieve(
        context: PageContext
    ): Promise<GetServerSidePropsResult<ListingProps>> {
        if (!context.query['id']) {
            return {
                notFound: true,
            };
        }
        const model = await this.view.displayListing(
            context.query['id'] as string
        );
        return {
            props: {
                renderer: model.render(),
            },
        };
    }
}
