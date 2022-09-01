import { useContext } from 'react';
import { Views } from '../../views';
import { CommandContext } from '../../views/commands/command-context';
import { HeadComponent } from '../../views/head/head-component';
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
            <HeadComponent />
            <CreateListingComponent
                model={new CreateListingViewModel(renderer, dispatcher)}
            />
        </>
    );
};

export default CreateListingPage;
