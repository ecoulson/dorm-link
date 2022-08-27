import { GetServerSidePropsResult } from 'next';
import { PageContext } from '../../page-context';
import { PropsRetriever } from '../../props-retriever';
import { ListingView } from '../listing-view';
import { DisplayListingPageProps } from './display-listing-props';

export class DisplayListingPropsRetriever
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
                renderer: await this.view.buildDisplayListingView(
                    context.query['id'] as string
                ),
            },
        };
    }
}
