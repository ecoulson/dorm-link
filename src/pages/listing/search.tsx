import { NextPageContext } from 'next';
import { useContext } from 'react';
import { Views } from '../../views';
import { CommandContext } from '../../views/commands/command-context';
import { HeadComponent } from '../../views/head/head-component';
import { SearchListingComponent } from '../../views/listing/search-listing/components/search-listing-component';
import { SearchListingProps } from '../../views/listing/search-listing/search-listing-props';
import { SearchListingPropsRetriever } from '../../views/listing/search-listing/search-listing-props-retriever';
import { SearchListingViewModel } from '../../views/listing/search-listing/search-listing-view-model';

export async function getServerSideProps(context: NextPageContext) {
    return new SearchListingPropsRetriever(Views.listing).retrieve(context);
}

export const CreateListingPage = ({ renderer }: SearchListingProps) => {
    const { dispatcher } = useContext(CommandContext);
    return (
        <>
            <HeadComponent />
            <SearchListingComponent
                model={new SearchListingViewModel(renderer, dispatcher)}
            />
        </>
    );
};

export default CreateListingPage;
