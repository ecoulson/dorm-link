import type { NextPageContext } from 'next';
import Head from 'next/head';
import { Views } from '../../views';
import { ListingComponent } from '../../views/listing/display-listing/components/listing-component';
import { DisplayListingPageProps } from '../../views/listing/display-listing/display-listing-props';
import { DisplayListingPropsRetriever } from '../../views/listing/display-listing/display-listing-props-retriever';
import { ListingViewModel } from '../../views/listing/display-listing/listing-view-model';

export async function getServerSideProps(context: NextPageContext) {
    return new DisplayListingPropsRetriever(Views.listing).retrieve(context);
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
            <ListingComponent model={new ListingViewModel(renderer)} />
        </>
    );
};

export default ListingPage;
