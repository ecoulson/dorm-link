import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { Views } from '../../views';
import { ListingViewModel } from '../../views/listing/display-listing-view-model';
import { Listing } from '../../views/listing/listing';

interface ListingPageProps {
    model: ListingViewModel;
}

export async function getServerSideProps(context: NextPageContext) {
    return {
        props: {
            model: await Views.listing.displayListing(
                context.query['id'] as string
            ),
        },
    };
}

const ListingPage: NextPage<ListingPageProps> = ({ model }) => {
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
            <Listing model={model} />
        </>
    );
};

export default ListingPage;
