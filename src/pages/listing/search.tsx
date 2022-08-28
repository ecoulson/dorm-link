import { NextPageContext } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import { Views } from '../../views';
import { CommandContext } from '../../views/commands/command-context';
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
            <Head>
                <title>Dorm Link</title>
                <meta
                    name="description"
                    content="Find cheap summer internship housing here."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SearchListingComponent
                model={new SearchListingViewModel(renderer, dispatcher)}
            />
        </>
    );
};

export default CreateListingPage;
