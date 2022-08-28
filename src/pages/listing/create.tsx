import Head from 'next/head';
import { useContext } from 'react';
import { Views } from '../../views';
import { CommandContext } from '../../views/commands/command-context';
import { CreateListingComponent } from '../../views/listing/create-listing/components/create-listing-component';
import { CreateListingProps } from '../../views/listing/create-listing/create-listing-props';
import { CreateListingPropsRetriever } from '../../views/listing/create-listing/create-listing-props-retriever';
import { CreateListingViewModel } from '../../views/listing/create-listing/create-listing-view-model';

export async function getServerSideProps() {
    return new CreateListingPropsRetriever(Views.listing).retrieve();
}

export const CreateListingPage = ({ renderer }: CreateListingProps) => {
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
            <CreateListingComponent
                model={new CreateListingViewModel(renderer, dispatcher)}
            />
        </>
    );
};

export default CreateListingPage;
