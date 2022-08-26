import { GetServerSidePropsResult } from 'next';
import { PageContext } from '../../page-context';
import { PropsRetriever } from '../../props-retriever';
import { DisplayListingRender } from './renderers/display-listing-renderer';
import { ListingView } from './listing-view';

export interface DisplayListingPageProps {
    renderer: DisplayListingRender;
}

export class ListingPropsRetriever
    implements PropsRetriever<DisplayListingPageProps>
{
    constructor(private readonly view: ListingView) {}

    async retrieve(
        context: PageContext
    ): Promise<GetServerSidePropsResult<DisplayListingPageProps>> {
        if (!context.query['id']) {
            return {
                notFound: true,
            };
        }
        return {
            props: {
                renderer: await this.view.displayListing(
                    context.query['id'] as string
                ),
            },
        };
    }
}
