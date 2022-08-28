import { GetServerSidePropsResult } from 'next';
import { PropsRetriever } from '../props-retriever';
import { HomeProps } from './home-props';
import { HomeView } from './home-view';

export class HomePropsRetriever implements PropsRetriever<HomeProps> {
    constructor(private readonly view: HomeView) {}

    async retrieve(): Promise<GetServerSidePropsResult<HomeProps>> {
        return {
            props: {
                renderer: await this.view.buildHomeView(),
            },
        };
    }
}
