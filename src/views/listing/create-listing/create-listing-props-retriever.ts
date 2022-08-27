import { GetServerSidePropsResult } from 'next';
import { PageContext } from '../../page-context';
import { PropsRetriever } from '../../props-retriever';
import { ListingView } from '../listing-view';
import { CreateListingRenderer } from './renderers/create-listing-renderer';

export interface CreateListingProps {
    renderer: CreateListingRenderer;
}

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
