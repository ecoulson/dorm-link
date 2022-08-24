import { GetServerSidePropsResult } from 'next';
import { PageContext } from '../page-context';
import { PropsRetriever } from '../props-retriever';
import { ListingView } from './listing-view';
import { ListingViewModel } from './listing-view-model';

export interface ListingProps {
    model: ListingViewModel;
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
        return {
            props: {
                model: await this.view.displayListing(
                    context.query['id'] as string
                ),
            },
        };
    }
}
