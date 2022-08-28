import { CommandType, RedirectCommand } from '../../core';
import { SearchBoxRenderer } from '../listing/search-listing/renderers/search-box-renderer';
import { HomeView } from './home-view';
import { HomeRenderer } from './renderers/home-renderer';

describe('Home View Test Suite', () => {
    const view = new HomeView();

    test('Should build the home view', () => {
        const renderer = view.buildHomeView();

        expect(renderer).toMatchObject<HomeRenderer>({
            header: {
                title: 'Welcome to DormLink!',
            },
            main: {
                aboutSection: {
                    text: 'Find cheap internship housing by taking over leases of local college students.',
                },
                browseListingsSection: {
                    description: 'Want to find a place to live for the summer?',
                    searchbox: {} as SearchBoxRenderer,
                },
                createListingSection: {
                    description:
                        'Want to host a fellow student for the summer?',
                    button: {
                        text: 'Post Your Listing',
                        command: {
                            type: CommandType.Redirect,
                            url: '/listing/create',
                        } as RedirectCommand,
                    },
                },
            },
            footer: {
                contactUs: {
                    text: 'Contact us at ',
                    email: 'dormlinktech@gmail.com',
                    emailLink: 'mailto:dormlinktech@gmail.com',
                },
            },
        });
    });
});
