import Head from 'next/head';
import { Views } from '../../views';
import { CreateListingProps } from '../../views/listing/create-listing/create-listing-props';
import { CreateListingPropsRetriever } from '../../views/listing/create-listing/create-listing-props-retriever';

export async function getServerSideProps() {
    return new CreateListingPropsRetriever(Views.listing).retrieve();
}

export const CreateListingPage = ({ renderer }: CreateListingProps) => {
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
