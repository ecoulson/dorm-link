import { Builder } from 'builder-pattern';
import { CommandType, RedirectCommand } from '../../core';
import { InputType } from '../base/input-type';
import { HomeRenderer } from './renderers/home-renderer';

export class HomeView {
    buildHomeView(): HomeRenderer {
        return Builder<HomeRenderer>()
            .header({
                title: 'Welcome to DormLink!',
            })
            .main({
                aboutSection: {
                    text: 'Find cheap internship housing by taking over leases of local college students.',
                },
                browseListingsSection: {
                    description: 'Want to find a place to live for the summer?',
                    searchbox: {
                        input: {
                            label: 'Where are you going?',
                            type: InputType.TEXT,
                            name: 'city',
                            placeholder: 'Los Angeles...',
                        },
                        button: {
                            text: 'Browse Listings',
                        },
                    },
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
            })
            .footer({
                contactUs: {
                    text: 'Contact us at dormlinktech@gmail.com',
                    emailLink: 'mailto:dormlinktech@gmail.com',
                },
            })
            .build();
    }
}
