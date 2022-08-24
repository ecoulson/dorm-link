import type { NextPageContext } from 'next';
import Head from 'next/head';
import { Views } from '../../views';
import { Listing } from '../../views/listing/listing';
import {
    ListingProps,
    ListingPropsRetriever,
} from '../../views/listing/listing-props-retriever';

export async function getServerSideProps(context: NextPageContext) {
    return new ListingPropsRetriever(Views.listing).retrieve(context);
}

export const ListingPage = ({ model }: ListingProps) => {
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
