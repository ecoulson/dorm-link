import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import { Views } from '../views';
import { CommandContext } from '../views/commands/command-context';
import { HomeComponent } from '../views/home/components/home-component';
import { HomeProps } from '../views/home/home-props';
import { HomePropsRetriever } from '../views/home/home-props-retriever';
import { HomeViewModel } from '../views/home/home-view-model';

export async function getServerSideProps() {
    return new HomePropsRetriever(Views.home).retrieve();
}

function Home({ renderer }: HomeProps) {
    const { dispatcher } = useContext(CommandContext);

    return (
        <div>
            <Head>
                <title>Dorm Link</title>
                <meta
                    name="description"
                    content="Find cheap summer internship housing here."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeComponent model={new HomeViewModel(renderer, dispatcher)} />
        </div>
    );
}

export default Home;
