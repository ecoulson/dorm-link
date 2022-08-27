import Head from 'next/head';
import { Views } from '../../views';
import {
    CreateListingProps,
    CreateListingPropsRetriever,
} from '../../views/listing/create-listing/create-listing-props-retriever';

export async function getServerSideProps() {
    return new CreateListingPropsRetriever(Views.listing).retrieve();
}

export const CreateListingPage = ({ renderer }: CreateListingProps) => {
    console.log(renderer);
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
            <p>Create</p>
        </>
    );
};

export default CreateListingPage;
