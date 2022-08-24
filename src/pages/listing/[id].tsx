import type { NextPageContext } from 'next';
import Head from 'next/head';
import { Views } from '../../views';
import { Listing } from '../../views/listing/listing';
import {
    DisplayListingPageProps,
    ListingPropsRetriever,
} from '../../views/listing/listing-props-retriever';
import { ListingViewModel } from '../../views/listing/listing-view-model';

export async function getServerSideProps(context: NextPageContext) {
    return new ListingPropsRetriever(Views.listing).retrieve(context);
}

export const ListingPage = ({ renderer }: DisplayListingPageProps) => {
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
            <Listing model={new ListingViewModel(renderer)} />
        </>
    );
};

export default ListingPage;
