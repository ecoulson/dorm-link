import { GetServerSidePropsResult } from 'next';
import { PageContext } from '../../page-context';
import { PropsRetriever } from '../../props-retriever';
import { ListingView } from '../listing-view';
import { CreateListingProps } from './create-listing-props';

export class CreateListingPropsRetriever
    implements PropsRetriever<CreateListingProps>
{
    constructor(private readonly view: ListingView) {}

    async retrieve(): Promise<GetServerSidePropsResult<CreateListingProps>> {
        return {
            props: {
                renderer: this.view.buildCreateListingFormView(),
            },
        };
    }
}
